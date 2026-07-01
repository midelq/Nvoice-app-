import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          Nvoice 🧾
        </Link>

        <nav className="flex items-center gap-4">
          <Show when="signed-in">
            <Button variant="ghost" render={<Link href="/dashboard" />}>
              Dashboard
            </Button>
            <UserButton />
          </Show>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </Show>
        </nav>
      </div>
    </header>
  );
}

