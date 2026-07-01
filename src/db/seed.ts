import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { invoices } from "./schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function seed() {
  console.log("🌱 Seeding database...");

  // Очистити існуючі дані
  await db.delete(invoices);

  // Вставити тестові інвойси
  await db.insert(invoices).values([
    {
      value: 150000,
      description: "Website Development",
      status: "paid",
      customerName: "John Doe",
      customerEmail: "john@example.com",
    },
    {
      value: 75000,
      description: "Logo Design",
      status: "open",
      customerName: "Jane Smith",
      customerEmail: "jane@example.com",
    },
    {
      value: 320000,
      description: "Mobile App MVP",
      status: "draft",
      customerName: "Bob Johnson",
      customerEmail: "bob@example.com",
    },
    {
      value: 50000,
      description: "SEO Audit",
      status: "void",
      customerName: "Alice Brown",
      customerEmail: "alice@example.com",
    },
    {
      value: 210000,
      description: "E-commerce Integration",
      status: "open",
      customerName: "Charlie Wilson",
      customerEmail: "charlie@example.com",
    },
  ]);

  console.log("✅ Seed complete! 5 invoices added.");
}

seed().catch(console.error);
