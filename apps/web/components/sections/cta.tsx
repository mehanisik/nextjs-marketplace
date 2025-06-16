"use client";

import { useScopedI18n } from "@repo/localization/src/client";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const t = useScopedI18n("cta");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="gap-2">
              {t("primaryButton")} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              {t("secondaryButton")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
