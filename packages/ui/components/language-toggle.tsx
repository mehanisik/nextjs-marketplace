"use client";

import { useTolgee } from "@next-marketplace/localization/tolgee/index";
import { setLanguage } from "@next-marketplace/localization/tolgee/language";
import type { ALL_LANGUAGES } from "@next-marketplace/localization/tolgee/shared";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const locales: { label: string; value: (typeof ALL_LANGUAGES)[number] }[] = [
  { label: "English", value: "en" },
  { label: "Türkçe", value: "tr" },
];

export function LanguageToggle() {
  const tolgee = useTolgee(["language"]);
  const language = tolgee.getLanguage();

  async function onSelectChange(value: (typeof ALL_LANGUAGES)[number]) {
    await setLanguage(value);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {language}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.value}
            onClick={() => onSelectChange(locale.value)}
            className={language === locale.value ? "bg-accent" : ""}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
