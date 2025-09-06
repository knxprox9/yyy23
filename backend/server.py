from fastapi import FastAPI, APIRouter, HTTPException, Query, Depends
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timedelta
from decimal import Decimal

# استيراد النماذج الجديدة
from models import (
    # User models
    User, UserCreate, UserUpdate,
    # Service models  
    Service, ServiceBase, ServiceType,
    # Card models
    CardProduct, CardProductBase, CardProvider,
    # Order models
    Order, OrderCreate, OrderStatus,
    # Payment models
    Payment, PaymentBase, PaymentStatus,
    # Review models
    Review, ReviewBase,
    # Analytics models
    ServiceStats, DashboardMetrics,
    # System models
    SystemSettings, ActivityLog
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Create the main app without a prefix
app = FastAPI(
    title="خدمات البطاقات الرقمية",
    description="منصة شاملة لبيع وإدارة البطاقات الرقمية مسبقة الدفع",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# =====================================================
# SERVICES ENDPOINTS - نقاط نهاية الخدمات
# =====================================================

@api_router.get("/services", response_model=List[Service])
async def get_services(
    service_type: Optional[ServiceType] = None,
    is_active: bool = True
):
    """الحصول على قائمة الخدمات المتاحة"""
    query = {"is_active": is_active}
    if service_type:
        query["service_type"] = service_type
    
    services = await db.services.find(query).sort("display_order", 1).to_list(100)
    return [Service(**service) for service in services]

@api_router.get("/services/{service_id}", response_model=Service)
async def get_service(service_id: str):
    """الحصول على تفاصيل خدمة محددة"""
    service = await db.services.find_one({"id": service_id})
    if not service:
        raise HTTPException(status_code=404, detail="الخدمة غير موجودة")
    return Service(**service)


# =====================================================
# CARD PRODUCTS ENDPOINTS - نقاط نهاية منتجات البطاقات
# =====================================================

@api_router.get("/cards", response_model=List[CardProduct])
async def get_card_products(
    service_id: Optional[str] = None,
    provider: Optional[CardProvider] = None,
    is_available: bool = True,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None
):
    """الحصول على قائمة البطاقات المتاحة"""
    query = {"is_available": is_available}
    
    if service_id:
        query["service_id"] = service_id
    if provider:
        query["provider"] = provider
    if min_price is not None:
        query["price"] = {"$gte": min_price}
    if max_price is not None:
        if "price" in query:
            query["price"]["$lte"] = max_price
        else:
            query["price"] = {"$lte": max_price}
    
    cards = await db.card_products.find(query).sort("total_sold", -1).to_list(100)
    return [CardProduct(**card) for card in cards]

@api_router.get("/cards/{card_id}", response_model=CardProduct)
async def get_card_product(card_id: str):
    """الحصول على تفاصيل بطاقة محددة"""
    card = await db.card_products.find_one({"id": card_id})
    if not card:
        raise HTTPException(status_code=404, detail="البطاقة غير موجودة")
    return CardProduct(**card)


# =====================================================
# ORDERS ENDPOINTS - نقاط نهاية الطلبات
# =====================================================

@api_router.post("/orders", response_model=Order)
async def create_order(order_data: OrderCreate):
    """إنشاء طلب جديد"""
    # حساب المجاميع
    subtotal = Decimal("0.00")
    items = []
    
    for item_data in order_data.items:
        # التحقق من وجود البطاقة
        card = await db.card_products.find_one({"id": item_data.card_product_id})
        if not card:
            raise HTTPException(status_code=404, detail=f"البطاقة غير موجودة: {item_data.card_product_id}")
        
        card_product = CardProduct(**card)
        item_total = card_product.final_price * item_data.quantity
        subtotal += item_total
        
        items.append({
            **item_data.dict(),
            "id": str(uuid.uuid4()),
            "card_codes": []  # سيتم ملؤها عند إكمال الدفع
        })
    
    # إنشاء الطلب
    order = Order(
        user_id=order_data.user_id,
        customer_email=order_data.customer_email,
        customer_name=order_data.customer_name,
        items=items,
        subtotal=subtotal,
        total_amount=subtotal,  # يمكن إضافة رسوم أو خصومات لاحقاً
        notes=order_data.notes,
        delivery_time_estimate=datetime.utcnow() + timedelta(minutes=5)
    )
    
    await db.orders.insert_one(order.dict())
    return order

@api_router.get("/orders", response_model=List[Order])
async def get_orders(
    user_id: Optional[str] = None,
    status: Optional[OrderStatus] = None,
    limit: int = Query(50, le=100)
):
    """الحصول على قائمة الطلبات"""
    query = {}
    if user_id:
        query["user_id"] = user_id
    if status:
        query["status"] = status
    
    orders = await db.orders.find(query).sort("created_at", -1).limit(limit).to_list(limit)
    return [Order(**order) for order in orders]

@api_router.get("/orders/{order_id}", response_model=Order)
async def get_order(order_id: str):
    """الحصول على تفاصيل طلب محدد"""
    order = await db.orders.find_one({"id": order_id})
    if not order:
        raise HTTPException(status_code=404, detail="الطلب غير موجود")
    return Order(**order)


# =====================================================
# ANALYTICS ENDPOINTS - نقاط نهاية التحليلات
# =====================================================

@api_router.get("/analytics/dashboard", response_model=DashboardMetrics)
async def get_dashboard_metrics():
    """الحصول على مقاييس لوحة التحكم"""
    today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
    
    # طلبات اليوم
    today_orders = await db.orders.count_documents({
        "created_at": {"$gte": today}
    })
    
    # إيرادات اليوم
    today_revenue_pipeline = [
        {"$match": {"created_at": {"$gte": today}, "status": "completed"}},
        {"$group": {"_id": None, "total": {"$sum": "$total_amount"}}}
    ]
    today_revenue_result = await db.orders.aggregate(today_revenue_pipeline).to_list(1)
    today_revenue = Decimal(str(today_revenue_result[0]["total"])) if today_revenue_result else Decimal("0.00")
    
    # إجمالي العملاء
    total_customers = await db.users.count_documents({"role": "customer"})
    
    # الخدمات النشطة
    active_services = await db.services.count_documents({"is_active": True})
    
    # الطلبات المعلقة
    pending_orders = await db.orders.count_documents({"status": "pending"})
    
    return DashboardMetrics(
        total_orders_today=today_orders,
        total_revenue_today=today_revenue,
        total_customers=total_customers,
        active_services=active_services,
        pending_orders=pending_orders,
        success_rate_today=95.0  # يمكن حسابها لاحقاً
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
