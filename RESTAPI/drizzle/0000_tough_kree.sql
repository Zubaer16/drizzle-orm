CREATE TABLE IF NOT EXISTS "user_information" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"address" varchar,
	"department" varchar,
	"cgpa" numeric(3, 2)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" PRIMARY KEY NOT NULL,
	"email" varchar,
	"password" varchar,
	"status" varchar
);
