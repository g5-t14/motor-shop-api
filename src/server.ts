import { PrismaClient } from '@prisma/client'
import app from './app';

const prisma = new PrismaClient({ log: ["info", "query", "warn", "error"] })

app.listen(3000, () => console.log("server is running"))


export { prisma }