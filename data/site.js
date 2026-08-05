// data/site.js
// -----------------------------------------------------------------------
// إعدادات الموقع العامة (بيانات التواصل - السوشيال ميديا - القوائم)
// -----------------------------------------------------------------------

export const siteConfig = {
  name: "دكتور عمرو يزيد",
  nameEn: "Dr. Amr Yazeed",
  title: "دكتور عمرو يزيد | استشاري أمراض وجراحات الشبكية والجسم الزجاجي والليزر",
  titleEn: "Dr. Amr Yazeed | Retina, Vitreous & Laser Consultant",
  description:
    "دكتور عمرو يزيد، مدرس واستشاري أمراض وجراحات الشبكية والجسم الزجاجي والليزر بمعهد بحوث أمراض العيون. رعاية متخصصة تعتمد على التشخيص الدقيق وأحدث التقنيات الطبية.",
  descriptionEn:
    "Dr. Amr Yazeed, lecturer and consultant of retina, vitreous and laser diseases & surgery at the Research Institute of Ophthalmology. Specialized care based on precise diagnosis and the latest medical technologies.",
  url: "https://www.dramryazeed.com",
  logo: "/images/dr-logo.png",
  themeColor: "#e2bf6b",
  locales: ["ar", "en"],
  defaultLocale: "ar",
  contactEmail: "youssef7200143@gmail.com",
  formEndpoint: "/sendmail.php",

  phones: [
    {
      label: "الخط الرئيسي",
      labelEn: "Main Line",
      value: "+201050794020",
      href: "tel:+201050794020",
    },
    {
      label: "عيادة المهندسين / الاستفسارات",
      labelEn: "El-Mohandeseen Clinic / Inquiries",
      value: "01120606410",
      href: "tel:+201120606410",
    },
  ],
  whatsapp: "+201120606410",
  emails: ["dramryazeed@gmail.com", "amr.abdelkareem@yahoo.com"],

  clinics: [
    {
      id: "mohandeseen",
      name: "عيادة المهندسين",
      nameEn: "El-Mohandeseen Clinic",
      address: "المهندسين",
      addressEn: "El-Mohandeseen",
      mapEmbed: "",
    },
    {
      id: "faisal",
      name: "عيادة فيصل",
      nameEn: "Faisal Clinic",
      address: "فيصل",
      addressEn: "Faisal",
      mapEmbed: "",
    },
  ],

  socials: [
    {
      name: "Facebook",
      icon: "ph-facebook-logo",
      href: "https://www.facebook.com/Dr.amr.EyeClinic?locale=ar_AR",
    },
    { name: "TikTok", icon: "ph-tiktok-logo", href: "https://www.tiktok.com/@dramr.yazzed" },
    { name: "WhatsApp", icon: "ph-whatsapp-logo", href: "https://wa.me/201120606410?text=" },
  ],

  nav: [
    { label: "الرئيسية", labelEn: "Home", href: "/" },
    { label: "نبذة عن الدكتور", labelEn: "About", href: "/about-us" },
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
        { label: "معرض الصور", labelEn: "Gallery", href: "/gallery" },
        { label: "الفيديوهات", labelEn: "Videos", href: "/video" },
        { label: "آراء العملاء", labelEn: "Reviews", href: "/testimonials" },
      ],
    },
    { label: "المقالات", labelEn: "Blog", href: "/blog" },
    { label: "تواصل معنا", labelEn: "Contact", href: "/contact-us" },
  ],
};

export default siteConfig;
