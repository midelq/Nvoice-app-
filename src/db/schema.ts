import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

// Enum для статусів інвойсу
export const statusEnum = pgEnum("status", [
  "draft",
  "open",
  "paid",
  "void",
  "uncollectible",
]);

// Таблиця інвойсів
export const invoices = pgTable("invoices", {
  id: serial("id").primaryKey(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
  value: integer("value").notNull(), // в центах (1500 = $15.00)
  description: text("description").notNull(),
  status: statusEnum("status").default("draft").notNull(),

  // Дані клієнта (поки без окремої таблиці customers)
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
});

// TypeScript типи — автоматично генеруються зі схеми
export type Invoice = typeof invoices.$inferSelect;
export type NewInvoice = typeof invoices.$inferInsert;
