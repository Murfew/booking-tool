import "dotenv/config";
import { defineConfig } from "prisma/config";
import { env } from "./src/env";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: `tsx prisma/seed.ts`,
  },
  datasource: {
    url: env.POSTGRES_URL_NON_POOLING,
  },
});
