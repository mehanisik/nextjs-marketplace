import { Shield, ShoppingBag, Sparkles, Users } from "lucide-react";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "easy-buying-selling",
    icon: <ShoppingBag className="h-12 w-12 text-primary" />,
    title: "Easy Buying & Selling",
    description:
      "Simple and intuitive interface for listing items and making purchases.",
  },
  {
    id: "secure-transactions",
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Secure Transactions",
    description: "Protected payments and verified sellers for peace of mind.",
  },
  {
    id: "growing-community",
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Growing Community",
    description:
      "Join thousands of active buyers and sellers in our marketplace.",
  },
  {
    id: "premium-features",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    title: "Premium Features",
    description:
      "Advanced tools and analytics for power sellers and businesses.",
  },
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why Choose Our Marketplace?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the best marketplace platform with features designed
              for both buyers and sellers.
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
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
