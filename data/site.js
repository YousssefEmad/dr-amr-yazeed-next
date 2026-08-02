// data/site.js
// -----------------------------------------------------------------------
// إعدادات الموقع العامة
// لاحقًا: Sanity Singleton "siteSettings"
// -----------------------------------------------------------------------

export const siteConfig = {
  name: "دكتور عمرو يزيد",
  nameEn: "Dr. Amr Yazeed",

  title:
    "دكتور عمرو يزيد | مدرس واستشاري أمراض وجراحات الشبكية والجسم الزجاجي والليزر",

  description:
    "دكتور عمرو يزيد مدرس واستشاري الشبكية والجسم الزجاجي والليزر بمعهد بحوث أمراض العيون. تشخيص وعلاج أمراض الشبكية باستخدام أحدث التقنيات الطبية.",

  url: "https://www.dramryazeed.com",

  logo: "/images/dr-logo.png",

  themeColor: "#e2bf6b",

  locales: ["ar", "en"],
  defaultLocale: "ar",


  contact: {
    phones: [
      {
        label: "رقم الحجز والاستفسارات",
        value: "+201120606410",
        href: "tel:+201120606410",
      },
    ],

    whatsapp: {
      number: "+201120606410",
      link:
        "https://wa.me/201120606410?text=",
    },

    email: "dramryazeed@gmail.com",
  },


  locations: [
    {
      id: "mohandessin",
      name: "عيادة المهندسين",
      address: "المهندسين",
      mapEmbed: "",
    },

    {
      id: "faisal",
      name: "عيادة فيصل",
      address: "فيصل",
      mapEmbed: "",
    },
  ],


  socials: [
    {
      name: "Facebook",
      icon: "ph-facebook-logo",
      href:
        "https://www.facebook.com/Dr.amr.EyeClinic?locale=ar_AR",
    },

    {
      name: "TikTok",
      icon: "ph-tiktok-logo",
      href:
        "https://www.tiktok.com/@dramr.yazzed",
    },

    {
      name: "WhatsApp",
      icon: "ph-whatsapp-logo",
      href:
        "https://wa.me/201120606410?text=",
    },
  ],


  nav: [
    {
      label: "الرئيسية",
      labelEn: "Home",
      href: "/",
    },

    {
      label: "نبذة عن الدكتور",
      labelEn: "About",
      href: "/about-us",
    },

    {
      label: "الخدمات",
      labelEn: "Services",
      href: "/services",
      children: "services",
    },

    {
      label: "الميديا",
      labelEn: "Media",
      href: "#",
      children: [
        {
          label: "معرض الصور",
          labelEn: "Gallery",
          href: "/gallery",
        },

        {
          label: "الفيديوهات",
          labelEn: "Videos",
          href: "/video",
        },
      ],
    },

    {
      label: "المقالات",
      labelEn: "Blog",
      href: "/blog",
    },

    {
      label: "تواصل معنا",
      labelEn: "Contact",
      href: "/contact-us",
    },
  ],
};

export default siteConfig;