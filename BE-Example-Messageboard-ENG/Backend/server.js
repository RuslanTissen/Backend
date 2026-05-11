import express from "express"
import cors from "cors"
import requestLogger from "./middleware/requestLogger.js"

// Initialize express app
const app =express()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

// TODO: Add Password Checking

// Add endpoints
app.use("/messages", ????)

// Start listening
app.listen(4000, () => console.log("Up at: http://localhost:4000"))