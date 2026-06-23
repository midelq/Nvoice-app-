import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          Nvoice 🧾
        </Link>

        <nav className="flex items-center gap-4">
          <Button variant="ghost" render={<Link href="/dashboard" />}>
            Dashboard
          </Button>
        </nav>
      </div>
    </header>
  );
}
