import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Nvoice App 🧾</h1>
      <p className="text-lg text-muted-foreground">
        Invoice management app
      </p>
      <Button render={<Link href="/dashboard" />}>
        Go to Dashboard
      </Button>
    </main>
  );
}
