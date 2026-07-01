import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { invoices, type Invoice } from "@/db/schema";

function StatusBadge({ status }: { status: Invoice["status"] }) {
  const variant =
    status === "paid"
      ? "default"
      : status === "open"
        ? "secondary"
        : status === "void" || status === "uncollectible"
          ? "destructive"
          : "outline";

  return <Badge variant={variant}>{status}</Badge>;
}

// async! — можливо тільки в Server Components
export default async function DashboardPage() {
  // Запит до БД — виконується на сервері, НЕ в браузері
  const results = await db.select().from(invoices);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <Button render={<Link href="/invoices/new" />}>
          Create Invoice
        </Button>
      </div>

      {/* Invoices table */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {invoice.createTs.toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {invoice.customerName}
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.customerEmail}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.description}
              </TableCell>
              <TableCell>
                <StatusBadge status={invoice.status} />
              </TableCell>
              <TableCell className="text-right font-medium">
                ${(invoice.value / 100).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

