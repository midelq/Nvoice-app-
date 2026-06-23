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

// Mock data — пізніше замінимо на дані з БД
const invoices = [
  {
    id: 1,
    createTs: "2024-01-15",
    name: "John Doe",
    email: "john@example.com",
    value: 1500,
    description: "Website Development",
    status: "paid",
  },
  {
    id: 2,
    createTs: "2024-02-01",
    name: "Jane Smith",
    email: "jane@example.com",
    value: 750,
    description: "Logo Design",
    status: "open",
  },
  {
    id: 3,
    createTs: "2024-02-10",
    name: "Bob Johnson",
    email: "bob@example.com",
    value: 3200,
    description: "Mobile App MVP",
    status: "draft",
  },
  {
    id: 4,
    createTs: "2024-03-05",
    name: "Alice Brown",
    email: "alice@example.com",
    value: 500,
    description: "SEO Audit",
    status: "void",
  },
  {
    id: 5,
    createTs: "2024-03-12",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    value: 2100,
    description: "E-commerce Integration",
    status: "open",
  },
];

function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "paid"
      ? "default"
      : status === "open"
        ? "secondary"
        : status === "void"
          ? "destructive"
          : "outline";

  return <Badge variant={variant}>{status}</Badge>;
}

export default function DashboardPage() {
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
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {invoice.createTs}
              </TableCell>
              <TableCell>
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {invoice.name}
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.email}
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
