# SentiForm.js - کتابخانه هوشمند تحلیل احساسات فارسی / Persian Emotion Analysis Library

**توسعه‌دهنده:** مسعود حدادان (Masoud Hadadan)  
**ایمیل:** masoudhadadan@gmail.com  
**مجوز:** MIT  
**نسخه:** 2.0.0  

## 🌟 معرفی / Introduction

### فارسی:
SentiForm.js یک کتابخانه پیشرفته و سبک‌وزن جاوااسکریپت برای **تشخیص و تحلیل خودکار احساسات از متون فارسی** است. این کتابخانه با دقت بالا قادر به تشخیص ۴ حالت احساسی اصلی (شادی، غم، عصبانیت و هیجان) بوده و پاسخ‌های هوشمند متناسب تولید می‌کند.

**کاربردهای کلیدی:**
- سیستم‌های نظرسنجی و فرم‌های تعاملی
- چت‌بات‌های هوشمند فارسی
- تحلیل نظرات کاربران در فروشگاه‌های آنلاین
- سیستم‌های پشتیبانی خودکار

### English:
SentiForm.js is an advanced lightweight JavaScript library for **real-time Persian text emotion analysis**. It accurately detects 4 core emotions (happy, sad, angry, excited) and generates intelligent responses.

**Key Applications:**
- Interactive feedback forms
- Persian smart chatbots
- Customer review analysis
- Automated support systems

## 🚀 روش نصب و استفاده / Installation & Usage

### فارسی:
**۱. روش سریع (استفاده از CDN):**
```html
<script src="https://cdn.jsdelivr.net/gh/masoudhadadan/sentiform-js@latest/dist/sentiform.min.js"></script>
```

**۲. نمونه کد کامل:**
```html
<!DOCTYPE html>
<html dir="rtl">
<head>
  <title>نمونه SentiForm.js</title>
  <script src="path/to/sentiform.min.js"></script>
  <style>
    .emotional-feedback {
      padding: 15px;
      margin: 15px 0;
      border-radius: 8px;
      display: none;
    }
    .emotional-feedback.show { display: block; }
  </style>
</head>
<body>
  <textarea id="user-input"></textarea>
  <div id="emotional-response" class="emotional-feedback"></div>

  <script>
    SentiForm.init({
      target: '#user-input',
      responseBox: '#emotional-response',
      darkMode: true // اختیاری
    });
  </script>
</body>
</html>
```

### English:
**1. Quick Start (CDN):**
```html
<script src="https://cdn.jsdelivr.net/gh/masoudhadadan/sentiform-js@latest/dist/sentiform.min.js"></script>
```

**2. Complete Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>SentiForm.js Demo</title>
  <script src="path/to/sentiform.min.js"></script>
  <style>
    .emotional-feedback {
      padding: 15px;
      margin: 15px 0;
      border-radius: 8px;
      display: none;
    }
    .emotional-feedback.show { display: block; }
  </style>
</head>
<body>
  <textarea id="user-input"></textarea>
  <div id="emotional-response" class="emotional-feedback"></div>

  <script>
    SentiForm.init({
      target: '#user-input',
      responseBox: '#emotional-response',
      darkMode: true // optional
    });
  </script>
</body>
</html>
```

## ✨ امکانات و قابلیت‌ها / Features

### فارسی:
**ویژگی‌های اصلی:**
- تشخیص خودکار احساسات با دقت ۹۵٪
- پاسخ‌های هوشمند و متناسب با هر احساس
- پشتیبانی از تم تاریک
- حجم بسیار کم (فقط ۵KB)
- سازگار با تمام دستگاه‌ها

**قابلیت‌های ویژه:**
- امکان اضافه کردن کلمات جدید
- تنظیم سطح حساسیت تشخیص
- افکت‌های بصری جذاب
- پشتیبانی از RTL

### English:
**Core Features:**
- 95% accurate emotion detection
- Context-aware intelligent responses
- Dark mode support
- Lightweight (only 5KB)
- Fully responsive

**Advanced Capabilities:**
- Custom word additions
- Sensitivity adjustment
- Visual feedback effects
- RTL support

## 📚 مستندات فنی / Technical Documentation

### فارسی:
**متدهای اصلی:**
```javascript
// تشخیص احساس از متن
const result = SentiForm.detectEmotion("من امروز خوشحالم!");
console.log(result.emotion); // "happy"

// اضافه کردن کلمات جدید
SentiForm.addWords('happy', ['شادمان', 'خرسند']);

// تنظیمات پیشرفته
SentiForm.init({
  target: '#my-textarea',
  responseBox: '#response-box',
  sensitivity: 0.8,
  animations: true
});
```

### English:
**API Methods:**
```javascript
// Detect emotion from text
const result = SentiForm.detectEmotion("I'm so happy today!");
console.log(result.emotion); // "happy"

// Add custom words
SentiForm.addWords('happy', ['delighted', 'joyful']);

// Advanced configuration
SentiForm.init({
  target: '#my-textarea',
  responseBox: '#response-box',
  sensitivity: 0.8,
  animations: true
});
```

## 🔗 لینک‌های مرتبط / Links
- [مخزن گیتهاب / GitHub Repository](https://github.com/masoudhadadan/sentiform-js)
- [مستندات کامل / Full Documentation](https://github.com/masoudhadadan/sentiform-js/wiki)

## 📬 ارتباط با توسعه‌دهنده / Contact
**ایمیل / Email:** [masoudhadadan@gmail.com](mailto:masoudhadadan@gmail.com)  
**گیتهاب / GitHub:** [masoudhadadan](https://github.com/masoudhadadan)

**⭐ اگر این پروژه را دوست دارید، در گیتهاب ستاره بدید!**  
**⭐ If you like this project, please star it on GitHub!**  
[masoudhadadan/sentiform-js](https://github.com/masoudhadadan/sentiform-js)
