import express from "express"
import dotenv from "dotenv"
import path from "path"
import { router } from "./routes/url.js"
import { connectMongoDB } from "./connection.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

// View engine
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// Static files
app.use("/public", express.static(path.resolve("./public")))

// Middleware
app.use(express.json())

// Routes
app.use("/", router)

// Connect DB then start server
connectMongoDB("mongodb://localhost:27017/shortURL")
    .then(() => {
        console.log("MongoDB connection status: CONNECTED")
        app.listen(port, () => console.log(`Server status: RUNNING on PORT ${port}`))
    })
    .catch(err => {
        console.error("MongoDB connection failed:", err)
        process.exit(1)
    })
