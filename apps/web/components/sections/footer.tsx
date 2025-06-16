"use client";

import { useI18n, useScopedI18n } from "@repo/localization/src/client";
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
  const t = useI18n();
  const footerT = useScopedI18n("footer");

  const footerSections: FooterSection[] = [
    {
      title: footerT("sections.product.title"),
      links: [
        {
          title: footerT("sections.product.links.features"),
          href: "/features",
        },
        {
          title: footerT("sections.product.links.pricing"),
          href: "/pricing",
        },
        {
          title: footerT("sections.product.links.testimonials"),
          href: "/testimonials",
        },
        {
          title: footerT("sections.product.links.faq"),
          href: "/faq",
        },
      ],
    },
    {
      title: footerT("sections.company.title"),
      links: [
        {
          title: footerT("sections.company.links.about"),
          href: "/about",
        },
        {
          title: footerT("sections.company.links.blog"),
          href: "/blog",
        },
        {
          title: footerT("sections.company.links.careers"),
          href: "/careers",
        },
        {
          title: footerT("sections.company.links.contact"),
          href: "/contact",
        },
      ],
    },
    {
      title: footerT("sections.resources.title"),
      links: [
        {
          title: footerT("sections.resources.links.documentation"),
          href: "/docs",
        },
        {
          title: footerT("sections.resources.links.api"),
          href: "/api",
        },
        {
          title: footerT("sections.resources.links.community"),
          href: "/community",
        },
        {
          title: footerT("sections.resources.links.support"),
          href: "/support",
        },
      ],
    },
    {
      title: footerT("sections.legal.title"),
      links: [
        {
          title: footerT("sections.legal.links.privacy"),
          href: "/privacy",
        },
        {
          title: footerT("sections.legal.links.terms"),
          href: "/terms",
        },
        {
          title: footerT("sections.legal.links.cookies"),
          href: "/cookies",
        },
        {
          title: footerT("sections.legal.links.licenses"),
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
            © {new Date().getFullYear()} Next Marketplace. All rights reserved.
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
