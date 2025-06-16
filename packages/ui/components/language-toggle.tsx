"use client";

import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@next-marketplace/localization/src/client";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const locales: { label: string; value: "en" | "tr" }[] = [
  { label: "English", value: "en" },
  { label: "Türkçe", value: "tr" },
];

export function LanguageToggle() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useScopedI18n("language");

  function onSelectChange(value: "en" | "tr") {
    changeLocale(value);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((localeItem) => (
          <DropdownMenuItem
            key={localeItem.value}
            onClick={() => onSelectChange(localeItem.value)}
            className={locale === localeItem.value ? "bg-accent" : ""}
          >
            {t(localeItem.value)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
