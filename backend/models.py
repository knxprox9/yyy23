from pydantic import BaseModel, Field, EmailStr, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from decimal import Decimal
import uuid
from enum import Enum


# =====================================================
# ENUMS - تعدادات الحالات والأنواع
# =====================================================

class ServiceType(str, Enum):
    """أنواع الخدمات المتاحة"""
    DIGITAL_CARDS = "digital_cards"          # بطاقات رقمية
    GIFT_CARDS = "gift_cards"                # بطاقات هدايا
    GAMING_CARDS = "gaming_cards"            # بطاقات ألعاب
    PAYMENT_CARDS = "payment_cards"          # بطاقات دفع
    SUBSCRIPTION_CARDS = "subscription_cards" # بطاقات اشتراكات

class CardProvider(str, Enum):
    """مقدمي خدمات البطاقات"""
    GOOGLE_PLAY = "google_play"
    APPLE_STORE = "apple_store"
    ROBLOX = "roblox"
    VISA = "visa"
    MASTERCARD = "mastercard"
    STEAM = "steam"
    PLAYSTATION = "playstation"
    XBOX = "xbox"
    NETFLIX = "netflix"
    SPOTIFY = "spotify"

class OrderStatus(str, Enum):
    """حالات الطلبات"""
    PENDING = "pending"           # في الانتظار
    PROCESSING = "processing"     # قيد المعالجة
    COMPLETED = "completed"       # مكتمل
    DELIVERED = "delivered"       # تم التسليم
    CANCELLED = "cancelled"       # ملغي
    REFUNDED = "refunded"        # مسترد

class PaymentStatus(str, Enum):
    """حالات الدفع"""
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"
    REFUNDED = "refunded"

class UserRole(str, Enum):
    """أدوار المستخدمين"""
    CUSTOMER = "customer"         # عميل
    ADMIN = "admin"              # مدير
    VENDOR = "vendor"            # بائع
    SUPPORT = "support"          # دعم فني


# =====================================================
# USER MODELS - نماذج المستخدمين
# =====================================================

class UserBase(BaseModel):
    """النموذج الأساسي للمستخدم"""
    email: EmailStr
    full_name: str
    phone: Optional[str] = None
    preferred_language: str = Field(default="ar", description="اللغة المفضلة")
    country: Optional[str] = None
    is_active: bool = Field(default=True)

class UserCreate(UserBase):
    """نموذج إنشاء مستخدم جديد"""
    password: str = Field(min_length=8, description="كلمة المرور")

class UserUpdate(BaseModel):
    """نموذج تحديث بيانات المستخدم"""
    full_name: Optional[str] = None
    phone: Optional[str] = None
    preferred_language: Optional[str] = None
    country: Optional[str] = None

class User(UserBase):
    """نموذج المستخدم الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    role: UserRole = Field(default=UserRole.CUSTOMER)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = None
    last_login: Optional[datetime] = None
    total_orders: int = Field(default=0, description="إجمالي الطلبات")
    total_spent: Decimal = Field(default=Decimal("0.00"), description="إجمالي المبلغ المنفق")
    loyalty_points: int = Field(default=0, description="نقاط الولاء")


# =====================================================
# SERVICE MODELS - نماذج الخدمات
# =====================================================

class ServiceBase(BaseModel):
    """النموذج الأساسي للخدمة"""
    name: str = Field(description="اسم الخدمة")
    name_ar: str = Field(description="اسم الخدمة بالعربية")
    description: str = Field(description="وصف الخدمة")
    description_ar: str = Field(description="وصف الخدمة بالعربية")
    service_type: ServiceType
    is_active: bool = Field(default=True)
    icon: Optional[str] = Field(description="أيقونة الخدمة", default=None)
    display_order: int = Field(default=0, description="ترتيب العرض")

class Service(ServiceBase):
    """نموذج الخدمة الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = None
    total_orders: int = Field(default=0, description="إجمالي الطلبات")
    success_rate: float = Field(default=0.0, description="معدل النجاح %")


# =====================================================
# CARD MODELS - نماذج البطاقات
# =====================================================

class CardProductBase(BaseModel):
    """النموذج الأساسي لمنتج البطاقة"""
    name: str = Field(description="اسم البطاقة")
    name_ar: str = Field(description="اسم البطاقة بالعربية")
    provider: CardProvider
    service_id: str = Field(description="معرف الخدمة")
    denomination: Decimal = Field(description="فئة البطاقة")
    currency: str = Field(default="USD", description="العملة")
    price: Decimal = Field(description="السعر")
    discount_percentage: Optional[float] = Field(default=0.0, description="نسبة الخصم")
    is_available: bool = Field(default=True)
    delivery_time_minutes: int = Field(default=5, description="وقت التسليم بالدقائق")
    
class CardProduct(CardProductBase):
    """نموذج منتج البطاقة الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = None
    total_sold: int = Field(default=0, description="إجمالي المبيعات")
    rating: float = Field(default=0.0, description="التقييم")
    review_count: int = Field(default=0, description="عدد المراجعات")
    
    @property
    def final_price(self) -> Decimal:
        """السعر النهائي بعد الخصم"""
        if self.discount_percentage > 0:
            discount_amount = self.price * Decimal(self.discount_percentage / 100)
            return self.price - discount_amount
        return self.price


# =====================================================
# ORDER MODELS - نماذج الطلبات
# =====================================================

class OrderItemBase(BaseModel):
    """عنصر في الطلب"""
    card_product_id: str
    quantity: int = Field(ge=1, description="الكمية")
    unit_price: Decimal = Field(description="سعر الوحدة")
    discount_applied: Optional[float] = Field(default=0.0, description="الخصم المطبق")

class OrderItem(OrderItemBase):
    """عنصر الطلب الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    card_codes: List[str] = Field(default_factory=list, description="أكواد البطاقات")
    
    @property
    def total_price(self) -> Decimal:
        """إجمالي السعر للعنصر"""
        unit_price_after_discount = self.unit_price * Decimal(1 - (self.discount_applied or 0) / 100)
        return unit_price_after_discount * self.quantity

class OrderBase(BaseModel):
    """النموذج الأساسي للطلب"""
    user_id: str
    customer_email: EmailStr
    customer_name: str
    items: List[OrderItemBase]
    notes: Optional[str] = Field(description="ملاحظات العميل", default=None)

class OrderCreate(OrderBase):
    """نموذج إنشاء طلب جديد"""
    pass

class Order(BaseModel):
    """نموذج الطلب الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    order_number: str = Field(description="رقم الطلب")
    user_id: str
    customer_email: EmailStr
    customer_name: str
    items: List[OrderItem]
    status: OrderStatus = Field(default=OrderStatus.PENDING)
    subtotal: Decimal = Field(description="المجموع الفرعي")
    discount_amount: Decimal = Field(default=Decimal("0.00"), description="مبلغ الخصم")
    total_amount: Decimal = Field(description="المبلغ الإجمالي")
    currency: str = Field(default="USD")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    delivery_time_estimate: Optional[datetime] = None
    notes: Optional[str] = None
    
    @validator('order_number', pre=True, always=True)
    def generate_order_number(cls, v):
        if not v:
            return f"ORD-{datetime.now().strftime('%Y%m%d%H%M%S')}-{str(uuid.uuid4())[:8].upper()}"
        return v


# =====================================================
# PAYMENT MODELS - نماذج الدفعات
# =====================================================

class PaymentBase(BaseModel):
    """النموذج الأساسي للدفعة"""
    order_id: str
    amount: Decimal
    currency: str = Field(default="USD")
    payment_method: str = Field(description="طريقة الدفع")

class Payment(PaymentBase):
    """نموذج الدفعة الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    transaction_id: Optional[str] = Field(description="معرف المعاملة الخارجي", default=None)
    status: PaymentStatus = Field(default=PaymentStatus.PENDING)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    completed_at: Optional[datetime] = None
    failure_reason: Optional[str] = None
    gateway_response: Optional[Dict[str, Any]] = Field(default_factory=dict)


# =====================================================
# REVIEW MODELS - نماذج التقييمات
# =====================================================

class ReviewBase(BaseModel):
    """النموذج الأساسي للتقييم"""
    user_id: str
    card_product_id: str
    order_id: str
    rating: int = Field(ge=1, le=5, description="التقييم من 1 إلى 5")
    comment: Optional[str] = Field(description="التعليق", default=None)

class Review(ReviewBase):
    """نموذج التقييم الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_verified: bool = Field(default=False, description="تقييم موثق")
    helpful_count: int = Field(default=0, description="عدد الأشخاص الذين وجدوا التقييم مفيداً")


# =====================================================
# ANALYTICS MODELS - نماذج التحليلات
# =====================================================

class ServiceStats(BaseModel):
    """إحصائيات الخدمة"""
    service_id: str
    total_orders: int = Field(default=0)
    total_revenue: Decimal = Field(default=Decimal("0.00"))
    success_rate: float = Field(default=0.0)
    average_rating: float = Field(default=0.0)
    total_customers: int = Field(default=0)
    last_updated: datetime = Field(default_factory=datetime.utcnow)

class DashboardMetrics(BaseModel):
    """مقاييس لوحة التحكم"""
    total_orders_today: int = Field(default=0)
    total_revenue_today: Decimal = Field(default=Decimal("0.00"))
    total_customers: int = Field(default=0)
    active_services: int = Field(default=0)
    pending_orders: int = Field(default=0)
    success_rate_today: float = Field(default=0.0)
    top_selling_cards: List[Dict[str, Any]] = Field(default_factory=list)
    recent_orders: List[Dict[str, Any]] = Field(default_factory=list)


# =====================================================
# NOTIFICATION MODELS - نماذج الإشعارات
# =====================================================

class NotificationBase(BaseModel):
    """النموذج الأساسي للإشعار"""
    user_id: str
    title: str
    title_ar: str
    message: str
    message_ar: str
    type: str = Field(description="نوع الإشعار")

class Notification(NotificationBase):
    """نموذج الإشعار الكامل"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    is_read: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read_at: Optional[datetime] = None


# =====================================================
# SYSTEM MODELS - نماذج النظام
# =====================================================

class SystemSettings(BaseModel):
    """إعدادات النظام"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    key: str = Field(description="مفتاح الإعداد")
    value: str = Field(description="قيمة الإعداد")
    description: Optional[str] = Field(description="وصف الإعداد", default=None)
    is_public: bool = Field(default=False, description="إعداد عام")
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ActivityLog(BaseModel):
    """سجل الأنشطة"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: Optional[str] = None
    action: str = Field(description="الإجراء المتخذ")
    resource_type: str = Field(description="نوع المورد")
    resource_id: Optional[str] = None
    details: Optional[Dict[str, Any]] = Field(default_factory=dict)
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)