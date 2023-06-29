import { PrismaClient } from "@prisma/client";
import { app } from "./app";

const port: number = 3000;

const prisma = new PrismaClient({ log: ["info", "query", "warn", "error"] });

app.listen(port, () =>
  console.log(`Server is running in: http://localhost:${port}`)
);

export { prisma };
