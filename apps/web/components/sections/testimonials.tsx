"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@next-marketplace/ui/components/ui/avatar";
import { Card, CardContent } from "@next-marketplace/ui/components/ui/card";
import { useScopedI18n } from "@repo/localization/src/client";

interface Testimonial {
  id: string;
  contentKey: string;
  authorNameKey: string;
  authorRoleKey: string;
  authorCompanyKey: string;
  avatar: string;
}

export function Testimonials() {
  const t = useScopedI18n("testimonials");

  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      contentKey: "items.testimonial1.content",
      authorNameKey: "items.testimonial1.authorName",
      authorRoleKey: "items.testimonial1.authorRole",
      authorCompanyKey: "items.testimonial1.authorCompany",
      avatar: "/avatars/sarah.jpg",
    },
    {
      id: "testimonial-2",
      contentKey: "items.testimonial2.content",
      authorNameKey: "items.testimonial2.authorName",
      authorRoleKey: "items.testimonial2.authorRole",
      authorCompanyKey: "items.testimonial2.authorCompany",
      avatar: "/avatars/michael.jpg",
    },
    {
      id: "testimonial-3",
      contentKey: "items.testimonial3.content",
      authorNameKey: "items.testimonial3.authorName",
      authorRoleKey: "items.testimonial3.authorRole",
      authorCompanyKey: "items.testimonial3.authorCompany",
      avatar: "/avatars/emma.jpg",
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <blockquote className="text-lg font-medium">
                  "{t(testimonial.contentKey as any)}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={t(testimonial.authorNameKey as any)}
                    />
                    <AvatarFallback>
                      {t(testimonial.authorNameKey as any)
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">
                      {t(testimonial.authorNameKey as any)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(testimonial.authorRoleKey as any)} at{" "}
                      {t(testimonial.authorCompanyKey as any)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
