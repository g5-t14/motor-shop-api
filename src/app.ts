import "express-async-errors"
import "reflect-metadata"
import cors from "cors"
import express, { Application } from "express"
import { userRoutes } from "./routes/user.routes"
import { adRoutes } from "./routes/ad.routes"
import { handleErrors } from "./errors/errors"

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRoutes)
app.use("/ads", adRoutes)

app.use(handleErrors)

export default app
