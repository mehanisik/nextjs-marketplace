interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: "create-account",
    number: 1,
    title: "Create an Account",
    description: "Sign up and complete your profile in minutes",
  },
  {
    id: "list-browse",
    number: 2,
    title: "List or Browse",
    description: "Start selling your items or explore listings",
  },
  {
    id: "start-trading",
    number: 3,
    title: "Start Trading",
    description: "Make secure transactions and grow your business",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get started in three simple steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
