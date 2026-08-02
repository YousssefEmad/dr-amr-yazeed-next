# موقع دكتور عمرو يزيد - Next.js

نسخة Next.js من موقع العيادة (كان HTML/CSS/JS بوتستراب) — بدون Tailwind، الاستايل بوتستراب
عادي في `styles/globals.css`. المشروع أساسه عربي (RTL) وجاهز بنية تحتية لإضافة نسخة إنجليزية لاحقًا.

## تشغيل المشروع محليًا

```bash
npm install
npm run dev
```

هيفتح على `http://localhost:3000`.

## البناء للنشر (Static Export لـ Hostinger)

المشروع مضبوط في `next.config.js` بـ `output: "export"`، يعني `next build`
هيولّد مجلد `out/` فيه ملفات HTML/CSS/JS ثابتة تقدر ترفعها مباشرة على استضافة
مشتركة زي Hostinger من غير سيرفر Node.

```bash
npm run build
```

الأمر ده كمان بيولّد `sitemap.xml` و `robots.txt` تلقائيًا جوه `out/` (عن طريق
`next-sitemap`، شوف `next-sitemap.config.js` وغيّر فيه `siteUrl` لما ياخد الدومين).

### الرفع على هوستنجر

1. بعد ما ياخد الدومين، حدّث `siteConfig.url` في `data/site.js` و `siteUrl` في
   `next-sitemap.config.js`.
2. شغّل `npm run build`.
3. ارفع **كل محتويات** مجلد `out/` (مش المجلد نفسه) على `public_html` في هوستنجر
   عن طريق File Manager أو FTP.
4. تأكد إن فيه ملف `.htaccess` بسيط لو احتجت إعادة توجيه (Next export بيولّد
   صفحات كـ `.html` أو مجلدات مع `index.html` حسب `trailingSlash: true`، شغالة
   عادي مع Apache).

> ملحوظة: مع `output: "export"` مينفعش تستخدم API Routes أو `getServerSideProps`
> أو تحسين الصور التلقائي بتاع `next/image` (لذلك الصور هنا بـ `<img>` عادي).
> لو حبيت السيرفر Node (Node.js App) موجود عند هوستنجر ممكن تشيل `output: "export"`
> وتشغّل `next start` بدل كده وتستخدم API Routes للفورم مثلاً.

## هيكل المشروع

```
data/            بيانات الموقع (خدمات - مقالات - معرض - فيديوهات - بيانات الدكتور - إعدادات عامة)
components/      مكونات React قابلة لإعادة الاستخدام (هيدر - فوتر - كروت - SEO...)
pages/           الصفحات (Next.js Pages Router)
  index.js               الرئيسية
  about-us.js             نبذة عن الدكتور
  services.js              كل الخدمات
  services/[slug].js       تفاصيل خدمة معينة
  blog.js                   كل المقالات
  blog/[slug].js             تفاصيل مقال
  gallery.js                  معرض الصور
  video.js                     الفيديوهات
  contact-us.js                 تواصل معنا
styles/globals.css   كل الاستايل (بوتستراب مُبسّط + ثيم الموقع) - بدون Tailwind
public/images/         مكان ملفات الصور (شوف README.txt جواها)
```

## المحتوى وربطه بالبيانات

كل صفحة بتاخد المحتوى بتاعها من ملفات في `data/`. يعني لو عايز تغيّر نص، سعر
خدمة، تضيف مقال جديد، تضيف خدمة جديدة... تعدل في ملف الداتا مش في الصفحة نفسها.

- `data/site.js` → بيانات عامة (تليفونات - إيميلات - عناوين عيادات - سوشيال ميديا - القائمة الرئيسية)
- `data/doctor.js` → نبذة الدكتور، المؤهلات، رسالة/رؤية العيادة، "ليه تختارنا"
- `data/services.js` → كل خدمة عندها `slug` مستقل بيتولّد منه رابط `/services/[slug]`
- `data/blog.js` → المقالات، كل مقال محتواه مقسّم لـ blocks (فقرة / عنوان / قائمة) عشان يتعرض بسهولة
- `data/gallery.js` → صور المعرض
- `data/videos.js` → فيديوهات الفيسبوك (العيادة + آراء العملاء)

## الربط بـ Sanity.io مستقبلًا

كل ملفات `data/*.js` اتكتبت بشكل قريب جدًا من شكل استعلامات Sanity (نفس أسماء
الحقول تقريبًا)، عشان لما تتعلم Sanity يبقى سهل تستبدلها:

1. تعمل Sanity Studio منفصل (أو embedded) وتصمم الـ Schemas بنفس الحقول
   الموجودة في `data/*.js` (مثلاً schema اسمه `service` بحقول `title`,
   `slug`, `image`, `shortDescription`...).
2. تستبدل كل `import { services } from "@/data/services"` بـ:
   ```js
   const services = await client.fetch(`*[_type == "service"]`);
   ```
   جوه `getStaticProps` (أو `getServerSideProps` لو شلت الـ static export).
3. تسيب ملفات `data/*.js` كـ fallback / بيانات تجريبية للتطوير المحلي.

## SEO

- كل صفحة فيها `<SEO />` component (`components/SEO.js`) بيحط Title, Description,
  Canonical, Open Graph, Twitter Card, وhreflang جاهزة للنسخة الإنجليزية.
- `next-sitemap` بيولّد `sitemap.xml` و `robots.txt` تلقائيًا مع كل build.
- اللغة الأساسية `ar` والاتجاه `rtl` مضبوطين في `pages/_document.js`.

## النسخة الإنجليزية (لاحقًا)

البنية جاهزة لإضافة نسخة إنجليزية:
- كل عنصر بيانات في `data/*.js` عنده حقل موازي بـ `En` (زي `titleEn`, `nameEn`).
- لما تيجي تضيف الإنجليزي فعليًا، أسهل حل مع static export هو مجلد `pages/en/`
  مطابق لهيكل `pages/` الحالي، ويقرأ من نفس ملفات `data/*.js` لكن بيختار الحقول
  اللي بـ `En` بدل العربي، مع `dir="ltr"` و `hreflang="en"`.
- أو لو حابب حل جاهز أقوى، تقدر تستخدم `next-intl` أو `next-i18next` بعد كده.

## المكتبات المستخدمة

- **Next.js 14** (Pages Router) - عشان يدعم Static Export بسهولة لهوستنجر.
- **Bootstrap-style CSS مخصص** بدل Tailwind - في `styles/globals.css` (RTL).
- **Phosphor Icons** + **Font Awesome** عن طريق CDN في `pages/_document.js`
  (زي ما كانوا في الموقع الأصلي).
- **خط DM Sans / Playfair Display** من Google Fonts.
- **Swiper** متاحة كمكتبة (npm) لو حبيت تضيف سلايدر للفيديوهات/الآراء لاحقًا
  بدل الجريد الحالي (مش مفعّلة افتراضيًا للحفاظ على بساطة static export).

## فورم التواصل

فورم صفحة "تواصل معنا" (`components/ContactForm.js`) شغال على الفرونت إند بس
دلوقتي (بيطبع البيانات في الـ console). مع static export مفيش سيرفر يستقبل
الفورم، فلازم تربطه بواحدة من دول:
- **Formspree** / **Getform** / **Basin** (خدمات جاهزة لاستقبال الفورمز بدون باك إند).
- **EmailJS** (يبعت إيميل مباشرة من المتصفح).
- أو لو هوستنجر بيدعم Node.js Apps، تعمل API route حقيقي وتشيل `output: "export"`.
# dr-amr-yazeed-next
