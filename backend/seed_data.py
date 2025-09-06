"""
ملف إدخال البيانات التجريبية
Sample Data Seeder for Digital Cards Platform
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
from pathlib import Path

# تحميل متغيرات البيئة
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from models import *


async def seed_database():
    """إدخال البيانات التجريبية"""
    
    # الاتصال بقاعدة البيانات
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    print("🌱 بدء إدخال البيانات التجريبية...")
    
    # =====================================================
    # 1. إدخال الخدمات
    # =====================================================
    services_data = [
        {
            "name": "Digital Gift Cards",
            "name_ar": "بطاقات الهدايا الرقمية", 
            "description": "Premium digital gift cards for various platforms",
            "description_ar": "بطاقات هدايا رقمية مميزة لمختلف المنصات",
            "service_type": ServiceType.DIGITAL_CARDS,
            "is_active": True,
            "icon": "🎁",
            "display_order": 1
        },
        {
            "name": "Gaming Cards",
            "name_ar": "بطاقات الألعاب",
            "description": "Gaming platform cards and credits",
            "description_ar": "بطاقات ورصيد منصات الألعاب",
            "service_type": ServiceType.GAMING_CARDS,
            "is_active": True,
            "icon": "🎮",
            "display_order": 2
        },
        {
            "name": "Payment Cards", 
            "name_ar": "بطاقات الدفع",
            "description": "Prepaid payment cards",
            "description_ar": "بطاقات الدفع مسبقة الدفع",
            "service_type": ServiceType.PAYMENT_CARDS,
            "is_active": True,
            "icon": "💳",
            "display_order": 3
        }
    ]
    
    services = []
    for service_data in services_data:
        service = Service(**service_data)
        services.append(service)
        await db.services.insert_one(service.model_dump())
    
    print(f"✅ تم إدخال {len(services)} خدمات")
    
    # =====================================================
    # 2. إدخال منتجات البطاقات
    # =====================================================
    card_products_data = [
        # Google Play Cards
        {
            "name": "Google Play Gift Card $10",
            "name_ar": "بطاقة هدايا جوجل بلاي 10 دولار",
            "provider": CardProvider.GOOGLE_PLAY,
            "service_id": services[0].id,
            "denomination": 10.0,
            "currency": "USD",
            "price": 10.50,
            "discount_percentage": 5.0,
            "is_available": True,
            "delivery_time_minutes": 2,
            "total_sold": 145,
            "rating": 4.8,
            "review_count": 23
        },
        {
            "name": "Google Play Gift Card $25", 
            "name_ar": "بطاقة هدايا جوجل بلاي 25 دولار",
            "provider": CardProvider.GOOGLE_PLAY,
            "service_id": services[0].id,
            "denomination": 25.0,
            "currency": "USD", 
            "price": 26.0,
            "discount_percentage": 3.0,
            "is_available": True,
            "delivery_time_minutes": 2,
            "total_sold": 89,
            "rating": 4.9,
            "review_count": 31
        },
        # Roblox Cards
        {
            "name": "Roblox Gift Card $10",
            "name_ar": "بطاقة هدايا روبلوكس 10 دولار", 
            "provider": CardProvider.ROBLOX,
            "service_id": services[1].id,
            "denomination": 10.0,
            "currency": "USD",
            "price": 10.99,
            "discount_percentage": 0.0,
            "is_available": True,
            "delivery_time_minutes": 5,
            "total_sold": 67,
            "rating": 4.7,
            "review_count": 18
        },
        {
            "name": "Roblox Gift Card $25",
            "name_ar": "بطاقة هدايا روبلوكس 25 دولار",
            "provider": CardProvider.ROBLOX, 
            "service_id": services[1].id,
            "denomination": 25.0,
            "currency": "USD",
            "price": 25.99,
            "discount_percentage": 2.0,
            "is_available": True,
            "delivery_time_minutes": 5,
            "total_sold": 43,
            "rating": 4.6,
            "review_count": 12
        },
        # Visa Cards
        {
            "name": "Visa Prepaid Card $50",
            "name_ar": "بطاقة فيزا مسبقة الدفع 50 دولار",
            "provider": CardProvider.VISA,
            "service_id": services[2].id,
            "denomination": 50.0, 
            "currency": "USD",
            "price": 52.50,
            "discount_percentage": 0.0,
            "is_available": True,
            "delivery_time_minutes": 10,
            "total_sold": 28,
            "rating": 4.9,
            "review_count": 8
        },
        # MasterCard Cards
        {
            "name": "MasterCard Prepaid $100",
            "name_ar": "بطاقة ماستركارد مسبقة الدفع 100 دولار",
            "provider": CardProvider.MASTERCARD,
            "service_id": services[2].id,
            "denomination": 100.0,
            "currency": "USD", 
            "price": 103.0,
            "discount_percentage": 1.0,
            "is_available": True,
            "delivery_time_minutes": 10,
            "total_sold": 15,
            "rating": 5.0,
            "review_count": 5
        }
    ]
    
    card_products = []
    for card_data in card_products_data:
        card = CardProduct(**card_data)
        card_products.append(card)
        await db.card_products.insert_one(card.dict())
    
    print(f"✅ تم إدخال {len(card_products)} منتج بطاقة")
    
    # =====================================================
    # 3. إدخال المستخدمين التجريبيين
    # =====================================================
    users_data = [
        {
            "email": "customer1@example.com",
            "full_name": "أحمد محمد",
            "phone": "+966501234567",
            "preferred_language": "ar",
            "country": "SA",
            "role": UserRole.CUSTOMER,
            "total_orders": 5,
            "total_spent": Decimal("127.50"),
            "loyalty_points": 128
        },
        {
            "email": "customer2@example.com", 
            "full_name": "فاطمة علي",
            "phone": "+966509876543",
            "preferred_language": "ar", 
            "country": "SA",
            "role": UserRole.CUSTOMER,
            "total_orders": 3,
            "total_spent": Decimal("85.00"),
            "loyalty_points": 85
        },
        {
            "email": "admin@example.com",
            "full_name": "مدير النظام", 
            "phone": "+966500000000",
            "preferred_language": "ar",
            "country": "SA", 
            "role": UserRole.ADMIN,
            "total_orders": 0,
            "total_spent": Decimal("0.00"),
            "loyalty_points": 0
        }
    ]
    
    users = []
    for user_data in users_data:
        user = User(**user_data)
        users.append(user)
        await db.users.insert_one(user.dict())
    
    print(f"✅ تم إدخال {len(users)} مستخدم")
    
    # =====================================================
    # 4. إدخال طلبات تجريبية
    # =====================================================
    sample_orders = [
        {
            "user_id": users[0].id,
            "customer_email": users[0].email,
            "customer_name": users[0].full_name,
            "items": [
                {
                    "id": "item-1",
                    "card_product_id": card_products[0].id,
                    "quantity": 2,
                    "unit_price": card_products[0].price,
                    "discount_applied": 5.0,
                    "card_codes": ["GP10-XXXX-YYYY-1234", "GP10-XXXX-YYYY-5678"]
                }
            ],
            "status": OrderStatus.COMPLETED,
            "subtotal": Decimal("19.95"),
            "total_amount": Decimal("19.95"),
            "completed_at": datetime.utcnow() - timedelta(days=2)
        },
        {
            "user_id": users[1].id,
            "customer_email": users[1].email, 
            "customer_name": users[1].full_name,
            "items": [
                {
                    "id": "item-2",
                    "card_product_id": card_products[2].id,
                    "quantity": 1,
                    "unit_price": card_products[2].price,
                    "discount_applied": 0.0,
                    "card_codes": ["RBX10-XXXX-YYYY-9876"]
                }
            ],
            "status": OrderStatus.DELIVERED,
            "subtotal": Decimal("10.99"),
            "total_amount": Decimal("10.99"),
            "completed_at": datetime.utcnow() - timedelta(hours=6)
        }
    ]
    
    orders = []
    for order_data in sample_orders:
        order = Order(**order_data)
        orders.append(order)
        await db.orders.insert_one(order.dict())
    
    print(f"✅ تم إدخال {len(orders)} طلب")
    
    # =====================================================
    # 5. إدخال التقييمات
    # =====================================================
    reviews_data = [
        {
            "user_id": users[0].id,
            "card_product_id": card_products[0].id,
            "order_id": orders[0].id,
            "rating": 5,
            "comment": "خدمة ممتازة وسريعة جداً!",
            "is_verified": True,
            "helpful_count": 3
        },
        {
            "user_id": users[1].id,
            "card_product_id": card_products[2].id,
            "order_id": orders[1].id, 
            "rating": 4,
            "comment": "جودة ممتازة، تم تسليم البطاقة بسرعة",
            "is_verified": True,
            "helpful_count": 1
        }
    ]
    
    reviews = []
    for review_data in reviews_data:
        review = Review(**review_data)
        reviews.append(review)
        await db.reviews.insert_one(review.dict())
    
    print(f"✅ تم إدخال {len(reviews)} تقييم")
    
    # =====================================================
    # 6. إدخال إعدادات النظام
    # =====================================================
    system_settings = [
        {
            "key": "platform_name",
            "value": "منصة البطاقات الرقمية",
            "description": "اسم المنصة",
            "is_public": True
        },
        {
            "key": "support_email", 
            "value": "support@digitalcards.com",
            "description": "بريد الدعم الفني",
            "is_public": True
        },
        {
            "key": "min_order_amount",
            "value": "5.00",
            "description": "أقل مبلغ للطلب",
            "is_public": False
        },
        {
            "key": "max_delivery_time_minutes",
            "value": "15",
            "description": "أقصى وقت تسليم بالدقائق",
            "is_public": False
        }
    ]
    
    settings = []
    for setting_data in system_settings:
        setting = SystemSettings(**setting_data)
        settings.append(setting)
        await db.system_settings.insert_one(setting.dict())
    
    print(f"✅ تم إدخال {len(settings)} إعداد نظام")
    
    print("\n🎉 تم إكمال إدخال جميع البيانات التجريبية بنجاح!")
    print("\n📊 ملخص البيانات:")
    print(f"   • {len(services)} خدمات")
    print(f"   • {len(card_products)} منتج بطاقة")
    print(f"   • {len(users)} مستخدم")
    print(f"   • {len(orders)} طلب")
    print(f"   • {len(reviews)} تقييم")
    print(f"   • {len(settings)} إعداد نظام")
    
    # إغلاق الاتصال
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_database())