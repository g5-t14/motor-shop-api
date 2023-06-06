import "express-async-errors"
import "reflect-metadata"
import cors from "cors"
import express, { Application } from "express"
import { userRoutes } from "./routes/user.routes"
import { adRoutes } from "./routes/ad.routes"

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRoutes)
app.use("/ads", adRoutes)

export default app
