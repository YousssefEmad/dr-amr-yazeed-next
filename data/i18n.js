// data/i18n.js
// -----------------------------------------------------------------------
// قاموس النصوص الثابتة اللي مش موجودة أصلاً في data/*.js (زي أزرار وعناوين
// عامة). البيانات الفعلية (اسم الدكتور، الخدمات، المقالات...) عندها حقول
// موازية بـ "En" في ملفاتها (title / titleEn) وبتتقرأ عن طريق pick() في
// lib/i18n.js مش من هنا.
//
// استخدام: import { t } from "@/lib/i18n";  ثم  t("bookNow", locale)
// -----------------------------------------------------------------------

export const dict = {
  ar: {
    home: "الرئيسية",
    about: "نبذة عن الدكتور",
    services: "الخدمات",
    media: "الميديا",
    gallery: "معرض الصور",
    videos: "الفيديوهات",
    blog: "المقالات",
    contact: "تواصل معنا",

    bookNow: "احجز موعدك الآن",
    readMore: "اعرف المزيد",
    readArticle: "اقرأ المزيد",
    allServices: "جميع الخدمات",
    allArticles: "عرض جميع المقالات",
    allPhotos: "عرض جميع الصور",
    sendRequest: "إرسال الطلب",
    sending: "جاري الإرسال...",

    ourServices: "خدماتنا الطبية",
    latestArticles: "أحدث المقالات",
    relatedArticles: "مقالات ذات صلة",
    whyChooseTitle: "لماذا تختار دكتور عمرو يزيد؟",
    contactInfo: "بيانات التواصل",
    clinicAddresses: "عناوين العيادات",
    callUs: "اتصل بنا",
    email: "البريد الإلكتروني",
    quickLinks: "روابط سريعة",
    allRightsReserved: "جميع الحقوق محفوظة",

    fullName: "الاسم بالكامل",
    phone: "رقم الهاتف",
    chooseService: "اختر الخدمة",
    yourMessage: "رسالتك",

    notFoundTitle: "الصفحة غير موجودة",
    notFoundText: "عذرًا، الصفحة اللي بتدور عليها مش موجودة.",
    backHome: "الرجوع للرئيسية",
  },

  en: {
    home: "Home",
    about: "About the Doctor",
    services: "Services",
    media: "Media",
    gallery: "Gallery",
    videos: "Videos",
    blog: "Blog",
    contact: "Contact Us",

    bookNow: "Book Your Appointment",
    readMore: "Read More",
    readArticle: "Read More",
    allServices: "All Services",
    allArticles: "View All Articles",
    allPhotos: "View All Photos",
    sendRequest: "Send Request",
    sending: "Sending...",

    ourServices: "Our Medical Services",
    latestArticles: "Latest Articles",
    relatedArticles: "Related Articles",
    whyChooseTitle: "Why Choose Dr. Amr Yazeed?",
    contactInfo: "Contact Information",
    clinicAddresses: "Clinic Addresses",
    callUs: "Call Us",
    email: "Email",
    quickLinks: "Quick Links",
    allRightsReserved: "All Rights Reserved",

    fullName: "Full Name",
    phone: "Phone Number",
    chooseService: "Choose a Service",
    yourMessage: "Your Message",

    notFoundTitle: "Page Not Found",
    notFoundText: "Sorry, the page you're looking for doesn't exist.",
    backHome: "Back to Home",
  },
};

export default dict;