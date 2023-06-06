// import app from "./app";
// import "dotenv/config"
// import { AppDataSource } from "./data-source";


// AppDataSource.initialize()
//     .then(() => {
//         console.log("Database running");
        // const PORT = process.env.PORT || 3000
        // app.listen(PORT, () => {
        //     console.log(`Server is running on PORT ${PORT}`);
        // })
//     })
//     .catch(error => console.log(error))

import { PrismaClient } from '@prisma/client'
import app from './app';

const prisma = new PrismaClient({ log: ["info", "query", "warn", "error"] })

prisma.$connect()
    .then(() => {
        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        })
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
  })


export { prisma }