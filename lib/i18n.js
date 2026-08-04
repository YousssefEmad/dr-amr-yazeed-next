// lib/i18n.js
// -----------------------------------------------------------------------
// Helpers صغيرة للترجمة:
//
// t("bookNow", locale)               -> بيرجع النص من قاموس data/i18n.js
// pick(service, "title", locale)     -> بيرجع service.title أو service.titleEn
// pickList(doctor, "qualifications", locale)
// pickBlocks(post.content, locale)   -> بيرجع content أو contentEn
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

export function pickList(obj, field, locale = "ar") {
  if (!obj) return [];
  if (locale === "en") {
    const enField = `${field}En`;
    return obj[enField] ?? obj[field] ?? [];
  }
  return obj[field] ?? [];
}

export function pickBlocks(blocks, blocksEn, locale = "ar") {
  const source = locale === "en" && blocksEn?.length ? blocksEn : blocks;
  if (!source) return [];
  return source.map((block) => {
    if (locale === "en" && !blocksEn?.length) {
      if (block.type === "list") {
        return { ...block, items: block.itemsEn ?? block.items };
      }
      return { ...block, text: block.textEn ?? block.text };
    }
    return block;
  });
}

export default { t, pick, pickList, pickBlocks };
