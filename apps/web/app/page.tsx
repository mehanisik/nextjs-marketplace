import { ModeToggle } from "@next-marketplace/ui/components/mode-toggle";
import { Button } from "@next-marketplace/ui/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Hello World</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
