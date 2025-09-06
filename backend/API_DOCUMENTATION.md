# 📋 وثائق API - منصة البطاقات الرقمية

## 🌟 نظرة عامة

منصة شاملة لبيع وإدارة البطاقات الرقمية مسبقة الدفع مع دعم خدمات متعددة ونظام إدارة متطور.

---

## 🏗️ نماذج البيانات

### 📱 **الخدمات (Services)**

```json
{
  "id": "uuid",
  "name": "Digital Gift Cards",
  "name_ar": "بطاقات الهدايا الرقمية",
  "description": "Premium digital gift cards",
  "description_ar": "بطاقات هدايا رقمية مميزة",
  "service_type": "digital_cards | gaming_cards | payment_cards",
  "is_active": true,
  "icon": "🎁",
  "display_order": 1,
  "total_orders": 0,
  "success_rate": 95.5
}
```

### 💳 **منتجات البطاقات (Card Products)**

```json
{
  "id": "uuid",
  "name": "Google Play Gift Card $10",
  "name_ar": "بطاقة هدايا جوجل بلاي 10 دولار",
  "provider": "google_play | roblox | visa | mastercard",
  "service_id": "uuid",
  "denomination": 10.0,
  "currency": "USD",
  "price": 10.50,
  "discount_percentage": 5.0,
  "is_available": true,
  "delivery_time_minutes": 2,
  "total_sold": 145,
  "rating": 4.8,
  "review_count": 23
}
```

### 👤 **المستخدمين (Users)**

```json
{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "أحمد محمد",
  "phone": "+966501234567",
  "preferred_language": "ar",
  "country": "SA",
  "role": "customer | admin | vendor | support",
  "is_active": true,
  "total_orders": 5,
  "total_spent": 127.50,
  "loyalty_points": 128
}
```

### 🛒 **الطلبات (Orders)**

```json
{
  "id": "uuid",
  "order_number": "ORD-20241206-ABCD1234",
  "user_id": "uuid",
  "customer_email": "user@example.com",
  "customer_name": "أحمد محمد",
  "status": "pending | processing | completed | delivered",
  "items": [
    {
      "id": "uuid",
      "card_product_id": "uuid",
      "quantity": 2,
      "unit_price": 10.50,
      "discount_applied": 5.0,
      "card_codes": ["CODE1", "CODE2"]
    }
  ],
  "subtotal": 19.95,
  "total_amount": 19.95,
  "currency": "USD",
  "delivery_time_estimate": "2024-12-06T18:35:00Z"
}
```

### 💰 **المدفوعات (Payments)**

```json
{
  "id": "uuid",
  "order_id": "uuid",
  "amount": 19.95,
  "currency": "USD",
  "payment_method": "credit_card",
  "status": "pending | completed | failed | refunded",
  "transaction_id": "TXN_123456",
  "gateway_response": {}
}
```

### ⭐ **التقييمات (Reviews)**

```json
{
  "id": "uuid",
  "user_id": "uuid",
  "card_product_id": "uuid",
  "order_id": "uuid",
  "rating": 5,
  "comment": "خدمة ممتازة وسريعة جداً!",
  "is_verified": true,
  "helpful_count": 3
}
```

---

## 🔗 نقاط النهاية (API Endpoints)

### 🏪 **الخدمات**

#### `GET /api/services`
الحصول على قائمة الخدمات المتاحة

**معايير البحث:**
- `service_type`: نوع الخدمة
- `is_active`: الحالة النشطة

**مثال:**
```bash
curl "http://localhost:8001/api/services?service_type=digital_cards&is_active=true"
```

#### `GET /api/services/{service_id}`
الحصول على تفاصيل خدمة محددة

---

### 💳 **البطاقات**

#### `GET /api/cards`
الحصول على قائمة البطاقات المتاحة

**معايير البحث:**
- `service_id`: معرف الخدمة
- `provider`: مقدم الخدمة
- `is_available`: متاح للبيع
- `min_price`: أقل سعر
- `max_price`: أعلى سعر

**مثال:**
```bash
curl "http://localhost:8001/api/cards?provider=google_play&is_available=true&max_price=50"
```

#### `GET /api/cards/{card_id}`
الحصول على تفاصيل بطاقة محددة

---

### 🛒 **الطلبات**

#### `POST /api/orders`
إنشاء طلب جديد

**البيانات المطلوبة:**
```json
{
  "user_id": "uuid",
  "customer_email": "user@example.com",
  "customer_name": "أحمد محمد",
  "items": [
    {
      "card_product_id": "uuid",
      "quantity": 2,
      "unit_price": 10.50,
      "discount_applied": 5.0
    }
  ],
  "notes": "ملاحظات اختيارية"
}
```

#### `GET /api/orders`
الحصول على قائمة الطلبات

**معايير البحث:**
- `user_id`: معرف المستخدم
- `status`: حالة الطلب
- `limit`: عدد النتائج (افتراضي: 50)

#### `GET /api/orders/{order_id}`
الحصول على تفاصيل طلب محدد

---

### 📊 **التحليلات**

#### `GET /api/analytics/dashboard`
الحصول على مقاييس لوحة التحكم

**النتيجة:**
```json
{
  "total_orders_today": 2,
  "total_revenue_today": 19.95,
  "total_customers": 4,
  "active_services": 9,
  "pending_orders": 0,
  "success_rate_today": 95.0,
  "top_selling_cards": [],
  "recent_orders": []
}
```

---

## 🔧 مميزات النظام

### ✨ **المميزات الأساسية**
- ✅ إدارة خدمات متعددة
- ✅ دعم بطاقات متنوعة (Google Play, Roblox, Visa, MasterCard)
- ✅ نظام طلبات متطور
- ✅ إدارة المدفوعات
- ✅ نظام تقييمات العملاء
- ✅ تحليلات وإحصائيات
- ✅ دعم اللغة العربية والإنجليزية

### 🎯 **المميزات المتقدمة**
- 🔒 إدارة أدوار المستخدمين
- 📱 واجهة API شاملة
- 📊 لوحة تحكم تحليلية
- 🔔 نظام إشعارات
- ⚙️ إعدادات نظام مرنة
- 📋 سجل الأنشطة

### 📈 **الإحصائيات**
- إجمالي المبيعات اليومية
- معدل النجاح
- أفضل البطاقات مبيعاً
- إحصائيات العملاء
- تقارير شاملة

---

## 🚀 البدء السريع

### 1️⃣ **تثبيت التبعيات**
```bash
pip install -r requirements.txt
```

### 2️⃣ **إدخال البيانات التجريبية**
```bash
python seed_data.py
```

### 3️⃣ **تشغيل الخادم**
```bash
uvicorn server:app --host 0.0.0.0 --port 8001
```

### 4️⃣ **اختبار API**
```bash
curl http://localhost:8001/api/services
```

---

## 🔮 الخطط المستقبلية

- 🌍 دعم عملات متعددة
- 🤖 تكامل الذكاء الاصطناعي
- 📱 تطبيق موبايل
- 🔗 تكاملات أكثر مع البوابات
- 📧 نظام إشعارات متطور
- 🛡️ أمان محسن
- ⚡ أداء محسن
- 📊 تقارير متقدمة

---

## 💡 ملاحظات تقنية

- **قاعدة البيانات:** MongoDB
- **إطار العمل:** FastAPI + Pydantic
- **اللغة:** Python 3.11+
- **التوثيق:** OpenAPI/Swagger
- **الأمان:** JWT + OAuth2
- **النشر:** Docker + Kubernetes

---

*تم إنشاء هذه الوثائق لمنصة البطاقات الرقمية - نسخة 1.0.0*