// data/site.js
// -----------------------------------------------------------------------
// إعدادات الموقع العامة (بيانات التواصل - السوشيال ميديا - القوائم)
// لاحقًا: هيتم استبدال هذا الملف باستعلام Sanity من نوع Singleton
// مثال: const site = await client.fetch(`*[_type == "siteSettings"][0]`)
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

  phones: [
    { label: "الخط الرئيسي", value: "+201050794020", href: "tel:+201050794020" },
    { label: "عيادة التجمع / الاستفسارات", value: "01120606410", href: "tel:+201120606410" },
  ],
  whatsapp: "+201120606410",
  emails: ["dramryazeed@gmail.com", "amr.abdelkareem@yahoo.com"],

  clinics: [
    {
      id: "faisal",
      name: "عيادة فيصل",
      nameEn: "Faisal Clinic",
      address: "فيصل - المهندسين",
      mapEmbed:
        "",
    },
    {
      id: "fifth-settlement",
      name: "عيادة المهندسين",
      nameEn: "5th Settlement Clinic",
      address: "عيادة المهندسين",
      mapEmbed: "",
    },
  ],

  socials: [
    { name: "Facebook", icon: "ph-facebook-logo", href: "https://www.facebook.com/Dr.amr.EyeClinic?locale=ar_AR" },
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
      ],
    },
    { label: "المقالات", labelEn: "Blog", href: "/blog" },
    { label: "تواصل معنا", labelEn: "Contact", href: "/contact-us" },
  ],
};

export default siteConfig;
