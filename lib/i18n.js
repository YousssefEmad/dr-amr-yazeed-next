// lib/i18n.js
// -----------------------------------------------------------------------
// Helpers صغيرة للترجمة:
//
// t("bookNow", locale)               -> بيرجع النص من قاموس data/i18n.js
// pick(service, "title", locale)     -> بيرجع service.title أو service.titleEn
//                                        حسب اللغة (مبني على الاتفاق إن كل
//                                        حقل عربي عنده نظيره بـ "En" في نهاية
//                                        اسمه، زي title/titleEn, name/nameEn)
// -----------------------------------------------------------------------

import { dict } from "@/data/i18n";

export function t(key, locale = "ar") {
  return dict[locale]?.[key] ?? dict.ar[key] ?? key;
}

export function pick(obj, field, locale = "ar") {
  if (!obj) return "";
  if (locale === "en") {
    const enField = `${field}En`;
    return obj[enField] ?? obj[field] ?? "";
  }
  return obj[field] ?? "";
}

export default { t, pick };