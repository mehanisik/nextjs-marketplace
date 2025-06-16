import { createI18nMiddleware } from "next-international/middleware";

export const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "en",
  urlMappingStrategy: "redirect",
});
