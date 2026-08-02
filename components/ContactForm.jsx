import { useState } from "react";
import { services } from "@/data/services";

export default function ContactForm() {
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // TODO: اربطها بـ API Route حقيقي (مثلاً /api/contact) أو خدمة إرسال إيميل
      // زي Formspree / EmailJS / Resend، لأن الموقع بيتنشر كـ Static Export
      // بدون سيرفر Node، فلازم خدمة خارجية تستقبل الفورم.
      console.log("Contact form submission:", data);
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name">الاسم بالكامل</label>
          <input name="user_name" type="text" id="name" placeholder="أدخل اسمك بالكامل" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input name="user_email" type="email" id="email" placeholder="أدخل بريدك الإلكتروني" />
        </div>

        <div className="col-md-6">
          <label htmlFor="phone">رقم الهاتف</label>
          <input name="contact_number" type="tel" id="phone" placeholder="أدخل رقم الهاتف" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="service">اختر الخدمة</label>
          <select name="user_service" id="service" required defaultValue="">
            <option value="" disabled>اختر الخدمة</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="message">رسالتك</label>
          <textarea name="message" id="message" rows={5} placeholder="اكتب استفسارك أو رسالتك هنا..." required />
        </div>

        <div className="col-12 d-flex justify-content-center mt-3">
          <button type="submit" className="primary-btn" disabled={status === "sending"}>
            {status === "sending" ? "جاري الإرسال..." : "إرسال الطلب"}
            <i className="ph ph-paper-plane-right" />
          </button>
        </div>

        {status === "success" && (
          <p className="col-12 text-center" style={{ color: "#8bd18b" }}>
            تم إرسال طلبك بنجاح، هيتم التواصل معك قريبًا.
          </p>
        )}
        {status === "error" && (
          <p className="col-12 text-center" style={{ color: "#e08" }}>
            حدث خطأ أثناء الإرسال، حاول مرة أخرى.
          </p>
        )}
      </div>
    </form>
  );
}
