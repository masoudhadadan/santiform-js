/**
 * SentiForm.js - کتابخانه هوشمند تحلیل احساسات متون فارسی
 * @author مسعود حدادان (Masoud Hadadan)
 * @email masoudhadadan@gmail.com
 * @license MIT
 * @version 2.0.0
 * 
 * 📌 کاربرد اصلی:
 * - تشخیص خودکار احساسات از متن فارسی (شادی، غم، عصبانیت، هیجان)
 * - نمایش پاسخ‌های هوشمند متناسب با احساس کاربر
 * - مناسب برای فرم‌های نظرسنجی، چت‌بات‌ها و سیستم‌های تعاملی
 * 
 * 🔧 روش استفاده:
 * 1. اضافه کردن فایل کتابخانه:
 *    <script src="sentiform.js"></script>
 * 
 * 2. راه‌اندازی اولیه:
 *    SentiForm.init({
 *      target: '#my-textarea',
 *      responseBox: '#response-container'
 *    });
 * 
 * 🌟 ویژگی‌های کلیدی:
 * - پردازش بلادرنگ متن
 * - پشتیبانی از تم تاریک
 * - افکت‌های بصری جذاب
 * - امکان گسترش دیتابیس کلمات
 */

const SentiForm = (function() {
    // دیتابیس کلمات احساسی (قابل گسترش)
    const emotionalWords = {
        happy: ['خوشحال', 'عالی', 'ممنون', 'دوستت دارم', 'خوب', 'شاد'],
        sad: ['ناراحت', 'غمگین', 'افسرده', 'بیچاره', 'خسته'],
        angry: ['عصبانی', 'نفرت', 'مزخرف', 'بی ادب', 'خفه'],
        excited: ['هیجان', 'جالب', 'فوق العاده', 'محشر', 'بینظیر']
    };

    // تنظیمات پیش‌فرض
    const defaults = {
        target: '#user-input',
        responseBox: '#emotional-response',
        darkMode: false,
        sensitivity: 0.7
    };

    // تابع اصلی تحلیل احساسات
    function detectEmotion(text) {
        if (!text || text.trim().length < 3) return 'neutral';

        text = text.toLowerCase();
        let scores = {
            happy: 0,
            sad: 0,
            angry: 0,
            excited: 0
        };

        // محاسبه امتیاز هر احساس
        for (const [emotion, words] of Object.entries(emotionalWords)) {
            scores[emotion] = words.reduce((sum, word) => 
                sum + (text.includes(word) ? 1 : 0), 0);
        }

        // تشخیص احساس غالب
        const maxEmotion = Object.keys(scores).reduce((a, b) => 
            scores[a] > scores[b] ? a : b);

        return scores[maxEmotion] > 0 ? maxEmotion : 'neutral';
    }

    // تولید پاسخ هوشمند
    function generateResponse(emotion) {
        const responses = {
            happy: [
                "حالتون رو می‌بینم! 😊 انرژی مثبت شما قابل تحسینه!",
                "چه متن شادی! 🌟 خوشحالم که شما خوشحالید!"
            ],
            sad: [
                "به نظر غمگین هستید... 🤗 ما اینجا هستیم تا کمک کنیم.",
                "غم همیشه موقتیه 💪 شما قوی‌تر از این حرفا هستید!"
            ],
            angry: [
                "آروم باشید... 🧘‍♂️ همه چیز درست میشه.",
                "مشکلتون رو بگید 🤝 با هم حلش می‌کنیم."
            ],
            excited: [
                "وای! چقدر هیجان‌انگیز! 🎉",
                "این حس رو دوست دارم! 🔥"
            ],
            neutral: [
                "نظر شما برامون ارزشمنده... 📝",
                "مشتاقانه منتظر نظرات شما هستیم 💭"
            ]
        };

        return responses[emotion][Math.floor(Math.random() * responses[emotion].length)];
    }

    // رابط عمومی کتابخانه
    return {
        /**
         * راه‌اندازی کتابخانه
         * @param {object} options - تنظیمات سفارشی
         */
        init: function(options) {
            const config = {...defaults, ...options};
            const inputEl = document.querySelector(config.target);
            const responseEl = document.querySelector(config.responseBox);

            if (!inputEl || !responseEl) {
                console.error('عناصر مورد نیاز یافت نشدند!');
                return;
            }

            // رویداد تحلیل هنگام تایپ
            inputEl.addEventListener('input', () => {
                const emotion = this.detectEmotion(inputEl.value);
                this.showEmotion(emotion, responseEl, config);
            });
        },

        /**
         * نمایش احساس تشخیص داده شده
         * @param {string} emotion - نوع احساس
         * @param {HTMLElement} element - المنت نمایش
         * @param {object} config - تنظیمات
         */
        showEmotion: function(emotion, element, config) {
            element.classList.remove('happy', 'sad', 'angry', 'excited', 'show');
            
            if (emotion !== 'neutral') {
                element.classList.add(emotion, 'show');
                element.textContent = this.generateResponse(emotion);
                
                if (config.darkMode) {
                    document.body.classList.add('dark-mode');
                }
            }
        },

        // توابع در دسترس برای توسعه
        detectEmotion: detectEmotion,
        generateResponse: generateResponse,

        /**
         * اضافه کردن کلمات جدید
         * @param {string} category - دسته احساسی
         * @param {array} words - آرایه کلمات جدید
         */
        addWords: function(category, words) {
            if (emotionalWords[category]) {
                emotionalWords[category] = [...new Set([...emotionalWords[category], ...words])];
            }
        }
    };
})();

// سازگاری با محیط‌های مختلف
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SentiForm;
} else {
    window.SentiForm = SentiForm;
}
