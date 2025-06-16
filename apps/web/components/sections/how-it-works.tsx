"use client";

import { useScopedI18n } from "@repo/localization/src/client";

interface Step {
  id: string;
  number: number;
  titleKey: string;
  descriptionKey: string;
}

export function HowItWorks() {
  const t = useScopedI18n("howItWorks");

  const steps: Step[] = [
    {
      id: "create-account",
      number: 1,
      titleKey: "steps.createAccount.title",
      descriptionKey: "steps.createAccount.description",
    },
    {
      id: "list-browse",
      number: 2,
      titleKey: "steps.listBrowse.title",
      descriptionKey: "steps.listBrowse.description",
    },
    {
      id: "start-trading",
      number: 3,
      titleKey: "steps.startTrading.title",
      descriptionKey: "steps.startTrading.description",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("title")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{t(step.titleKey as any)}</h3>
              <p className="text-center text-muted-foreground">
                {t(step.descriptionKey as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
