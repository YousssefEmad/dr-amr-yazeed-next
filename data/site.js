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
  url: "https://www.dramryazeed.com", // غيّرها لما يبقى الدومين جاهز
  logo: "/images/dr-logo.png",
  themeColor: "#e2bf6b",
  locales: ["ar", "en"],
  defaultLocale: "ar",

  phones: [
    { label: "الخط الرئيسي", value: "+201050794020", href: "tel:+201050794020" },
    { label: "عيادة التجمع / الاستفسارات", value: "01120606410", href: "tel:+201120606410" },
  ],
  whatsapp: "+201050794020",
  emails: ["dramryazeed@gmail.com", "amr.abdelkareem@yahoo.com"],

  clinics: [
    {
      id: "faisal",
      name: "عيادة فيصل",
      nameEn: "Faisal Clinic",
      address: "فيصل - المهندسين",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1307289691085!2d31.350871823670477!3d30.090442116388587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8e0b57ad3%3A0xaf4dce69c9f474fa!2zMzhSWCs1OEbYjCDYp9mE2YXYp9i42KnYjCDZgtiz2YUg2YXYtdixINin2YTYrNiv2YrYr9ip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQ0NjExNDU!5e0!3m2!1sar!2seg!4v1760366630903!5m2!1sar!2seg",
    },
    {
      id: "research-institute",
      name: "معهد بحوث أمراض العيون",
      nameEn: "Research Institute of Ophthalmology",
      address: "معهد بحوث أمراض العيون",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1307289691085!2d31.350871823670477!3d30.090442116388587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8e0b57ad3%3A0xaf4dce69c9f474fa!2zMzhSWCs1OEbYjCDYp9mE2YXYp9i42KnYjCDZgtiz2YUg2YXYtdixINin2YTYrNiv2YrYr9ip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQ0NjExNDU!5e0!3m2!1sar!2seg!4v1760366630903!5m2!1sar!2seg",
    },
    {
      id: "nasr-city",
      name: "عيادة مدينة نصر",
      nameEn: "Nasr City Clinic",
      address: "مدينة نصر",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1307289691085!2d31.350871823670477!3d30.090442116388587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8e0b57ad3%3A0xaf4dce69c9f474fa!2zMzhSWCs1OEbYjCDYp9mE2YXYp9i42KnYjCDZgtiz2YUg2YXYtdixINin2YTYrNiv2YrYr9ip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQ0NjExNDU!5e0!3m2!1sar!2seg!4v1760366630903!5m2!1sar!2seg",
    },
    {
      id: "fifth-settlement",
      name: "عيادة التجمع الخامس",
      nameEn: "5th Settlement Clinic",
      address: "التجمع الخامس",
      mapEmbed: "",
    },
  ],

  socials: [
    { name: "Facebook", icon: "ph-facebook-logo", href: "#" },
    { name: "Instagram", icon: "ph-instagram-logo", href: "#" },
    { name: "YouTube", icon: "ph-youtube-logo", href: "#" },
    { name: "WhatsApp", icon: "ph-whatsapp-logo", href: "#" },
  ],

  nav: [
    { label: "الرئيسية", labelEn: "Home", href: "/" },
    { label: "نبذة عن الدكتور", labelEn: "About", href: "/about-us" },
    {
      label: "الخدمات",
      labelEn: "Services",
      href: "/services",
      children: "services", // يتم تعبئتها ديناميكيًا من data/services.js
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
