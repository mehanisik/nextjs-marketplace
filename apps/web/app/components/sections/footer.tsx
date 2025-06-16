"use client";

import { useTolgee } from "@repo/localization/tolgee";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const tolgee = useTolgee();

  const footerSections: FooterSection[] = [
    {
      title: tolgee.t("footer.sections.product.title"),
      links: [
        {
          title: tolgee.t("footer.sections.product.links.features"),
          href: "/features",
        },
        {
          title: tolgee.t("footer.sections.product.links.pricing"),
          href: "/pricing",
        },
        {
          title: tolgee.t("footer.sections.product.links.testimonials"),
          href: "/testimonials",
        },
        { title: tolgee.t("footer.sections.product.links.faq"), href: "/faq" },
      ],
    },
    {
      title: tolgee.t("footer.sections.company.title"),
      links: [
        {
          title: tolgee.t("footer.sections.company.links.about"),
          href: "/about",
        },
        {
          title: tolgee.t("footer.sections.company.links.blog"),
          href: "/blog",
        },
        {
          title: tolgee.t("footer.sections.company.links.careers"),
          href: "/careers",
        },
        {
          title: tolgee.t("footer.sections.company.links.contact"),
          href: "/contact",
        },
      ],
    },
    {
      title: tolgee.t("footer.sections.resources.title"),
      links: [
        {
          title: tolgee.t("footer.sections.resources.links.documentation"),
          href: "/docs",
        },
        {
          title: tolgee.t("footer.sections.resources.links.api"),
          href: "/api",
        },
        {
          title: tolgee.t("footer.sections.resources.links.community"),
          href: "/community",
        },
        {
          title: tolgee.t("footer.sections.resources.links.support"),
          href: "/support",
        },
      ],
    },
    {
      title: tolgee.t("footer.sections.legal.title"),
      links: [
        {
          title: tolgee.t("footer.sections.legal.links.privacy"),
          href: "/privacy",
        },
        {
          title: tolgee.t("footer.sections.legal.links.terms"),
          href: "/terms",
        },
        {
          title: tolgee.t("footer.sections.legal.links.cookies"),
          href: "/cookies",
        },
        {
          title: tolgee.t("footer.sections.legal.links.licenses"),
          href: "/licenses",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/nextmarketplace",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/your-org/next-marketplace",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/next-marketplace",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            {tolgee.t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
