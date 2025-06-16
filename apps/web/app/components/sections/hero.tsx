"use client";

import { ModeToggle } from "@next-marketplace/ui/components/mode-toggle";
import { Button } from "@next-marketplace/ui/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  description?: string;
}

export function Hero({
  title = "Your Ultimate Marketplace Platform",
  description = "Buy, sell, and discover unique items in a secure and user-friendly environment. Join our growing community today.",
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </section>
  );
}
