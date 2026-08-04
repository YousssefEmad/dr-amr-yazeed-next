import { useState } from "react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

async function sendViaFormSubmit(payload, locale) {
  const email = siteConfig.contactEmail;
  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      _subject:
        locale === "en"
          ? `New appointment request - ${payload.name}`
          : `طلب حجز جديد - ${payload.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.success === "false" || result.success === false) {
    throw new Error(result.message || "formsubmit_failed");
  }
  return result;
}

async function sendViaPhp(payload, locale) {
  const body = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    body.append(key, value);
  });
  body.append("to", siteConfig.contactEmail);
  body.append(
    "_subject",
    locale === "en"
      ? `New appointment request - ${payload.name}`
      : `طلب حجز جديد - ${payload.name}`
  );

  const response = await fetch(siteConfig.formEndpoint || "/sendmail.php", {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });

  const contentType = response.headers.get("content-type") || "";
  let result = null;
  if (contentType.includes("application/json")) {
    result = await response.json();
  } else {
    result = { success: response.ok };
  }

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message || "php_failed");
  }
  return result;
}

export default function ContactForm() {
  const { locale } = useLocale();
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
      lang: locale,
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.phone ||
      !payload.service ||
      !payload.message
    ) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    try {
      await sendViaFormSubmit(payload, locale);
      setStatus("ok");
      form.reset();
    } catch (_) {
      try {
        await sendViaPhp(payload, locale);
        setStatus("ok");
        form.reset();
      } catch (__) {
        setStatus("error");
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-12">
          {status === "ok" && (
            <p className="text-center form-status-success mb-0">{t("formSuccess", locale)}</p>
          )}
          {status === "error" && (
            <p className="text-center form-status-error mb-0">{t("formError", locale)}</p>
          )}
          {status === "invalid" && (
            <p className="text-center form-status-error mb-0">{t("formInvalid", locale)}</p>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="name">{t("fullName", locale)}</label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder={t("fullNamePlaceholder", locale)}
            required
            autoComplete="name"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email">{t("email", locale)}</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder={t("emailPlaceholder", locale)}
            required
            autoComplete="email"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="phone">{t("phone", locale)}</label>
          <input
            name="phone"
            type="tel"
            id="phone"
            placeholder={t("phonePlaceholder", locale)}
            required
            autoComplete="tel"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="service">{t("chooseService", locale)}</label>
          <select name="service" id="service" required defaultValue="">
            <option value="" disabled>
              {t("chooseService", locale)}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={pick(s, "title", locale)}>
                {pick(s, "title", locale)}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="message">{t("yourMessage", locale)}</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder={t("messagePlaceholder", locale)}
            required
          />
        </div>

        <div className="col-12 d-flex justify-content-center mt-3">
          <button type="submit" className="primary-btn" disabled={status === "loading"}>
            {status === "loading" ? t("sending", locale) : t("sendRequest", locale)}
            <i className="ph ph-paper-plane-right" />
          </button>
        </div>
      </div>
    </form>
  );
}
