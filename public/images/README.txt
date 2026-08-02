هنا لازم تحط نفس ملفات الصور اللي كانت في مجلد assets/images بتاع الموقع القديم،
بنفس الأسماء دي عشان الداتا في مجلد /data شغالة عليها مباشرة:

- dr-logo.png          (لوجو العيادة)
- breadcramb.png        (خلفية بانر الصفحات الداخلية)
- banner.jpeg           (خلفية البانر الرئيسي بالصفحة الأولى)
- dr-amr.png            (صورة الدكتور - سكشن نبذة)
- doc-3.jpeg            (صورة الدكتور - سكشن "نبذة عن الدكتور" التفصيلي)
- serv.jpg / serv-2.jpg / serv-3.jpg / serv-4.jpg   (صور كروت الخدمات)
- blog-1.jpg / blog-2.jpg                            (صور المقالات)
- gallery.jpg / gallery-2.jpg / gallery-1-1.jpg      (صور المعرض)
- clients-t.jpg / clients-t1.jpg / clients-t2.jpg    (صور آراء العملاء)

لو غيّرت أي اسم ملف، لازم تحدّث المسار المطابق في:
- data/site.js
- data/doctor.js
- data/services.js
- data/blog.js
- data/gallery.js

ملحوظة: مجلد public في Next.js بيتقرأ من الجذر مباشرة (يعني الصورة اللي في
public/images/dr-logo.png بتتنادى بالمسار "/images/dr-logo.png").
