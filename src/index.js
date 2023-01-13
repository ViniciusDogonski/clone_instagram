const express = require("express")
const router = require("./Utils/router")
const mongoose = require("mongoose")
require("dotenv").config()

const mongoConnection = process.env.MONGO_URI


const app = express()

mongoose.connect(mongoConnection,{},()=>console.log("connected DB"))

app.use(express.json())
app.use(router)



app.listen(3333, () => console.log("server rodando porta: 3333"))