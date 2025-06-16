import { CTA } from "./sections/cta";
import { Features } from "./sections/features";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { HowItWorks } from "./sections/how-it-works";
import { Testimonials } from "./sections/testimonials";

export function StartPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
