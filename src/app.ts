import "express-async-errors"
import "reflect-metadata"
import cors from "cors"
import express, { Application } from "express"
import { userRoutes } from "./routes/user.routes"


const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRoutes)




export default app