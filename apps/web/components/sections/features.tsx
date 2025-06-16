"use client";

import { useScopedI18n } from "@repo/localization/src/client";
import { Shield, ShoppingBag, Sparkles, Users } from "lucide-react";

interface Feature {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

export function Features() {
  const t = useScopedI18n("features");

  const features: Feature[] = [
    {
      id: "easy-buying-selling",
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      titleKey: "items.easyBuyingSelling.title",
      descriptionKey: "items.easyBuyingSelling.description",
    },
    {
      id: "secure-transactions",
      icon: <Shield className="h-12 w-12 text-primary" />,
      titleKey: "items.secureTransactions.title",
      descriptionKey: "items.secureTransactions.description",
    },
    {
      id: "growing-community",
      icon: <Users className="h-12 w-12 text-primary" />,
      titleKey: "items.growingCommunity.title",
      descriptionKey: "items.growingCommunity.description",
    },
    {
      id: "premium-features",
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      titleKey: "items.premiumFeatures.title",
      descriptionKey: "items.premiumFeatures.description",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
            >
              {feature.icon}
              <h3 className="text-xl font-bold">
                {t(feature.titleKey as any)}
              </h3>
              <p className="text-center text-muted-foreground">
                {t(feature.descriptionKey as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
