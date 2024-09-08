import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  decimal,
} from 'drizzle-orm/pg-core'
import { numeric } from 'drizzle-orm/sqlite-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email'),
  password: varchar('password'),
  status: varchar('status'),
})

export const user_information = pgTable('user_information', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  address: varchar('address'),
  department: varchar('department'),
  cgpa: decimal('cgpa', { precision: 3, scale: 2 }),
})
