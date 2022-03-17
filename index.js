import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import PostRouter from "./routes/PostRouter.js"
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000
// const CONNECTION_URL = "mongodb+srv://phuthien007:Thienphu1@cluster0.mhggu.mongodb.net/memories"

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
// connect database
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`)))
    .catch(err => console.log(err.message))


// setup routes
app.use('/api/v1/posts', PostRouter)

