import "express-async-errors"
import "reflect-metadata"
import cors from "cors"
import express, { Application } from "express"


const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/", (req, res) => res.json("Application Running!"))




export default app