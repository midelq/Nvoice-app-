export default function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Nvoice App. All rights reserved.
      </div>
    </footer>
  );
}
