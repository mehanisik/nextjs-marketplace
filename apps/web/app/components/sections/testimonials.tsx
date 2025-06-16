"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@next-marketplace/ui/components/ui/avatar";
import { Card, CardContent } from "@next-marketplace/ui/components/ui/card";

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    content:
      "Next Marketplace has transformed how we sell our digital products. The platform is intuitive, secure, and has helped us reach new customers worldwide.",
    author: {
      name: "Sarah Chen",
      role: "Digital Artist",
      company: "Creative Studio",
      avatar: "/avatars/sarah.jpg",
    },
  },
  {
    id: "testimonial-2",
    content:
      "As a buyer, I love the seamless experience and the quality of products available. The platform makes it easy to find exactly what I need.",
    author: {
      name: "Michael Rodriguez",
      role: "Designer",
      company: "Tech Solutions",
      avatar: "/avatars/michael.jpg",
    },
  },
  {
    id: "testimonial-3",
    content:
      "The analytics and tools provided by Next Marketplace have helped us optimize our sales and understand our customers better.",
    author: {
      name: "Emma Thompson",
      role: "Product Manager",
      company: "Digital Goods Co",
      avatar: "/avatars/emma.jpg",
    },
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied creators and buyers on our platform
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <blockquote className="text-lg font-medium">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                    />
                    <AvatarFallback>
                      {testimonial.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.author.role} at {testimonial.author.company}
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
