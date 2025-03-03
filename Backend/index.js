import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import router from "./route/userRoute.js";
import cors from "cors";
// const express = require('express')
// const dotenv = require("dotenv");
const app = express()
dotenv.config();
app.use(cors());
app.use(express.json())


const port = process.env.PORT || 4000;
const URl = process.env.Mongodb;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//connect Mongodb
try{
    mongoose.connect(URl);
    console.log('Connected to MongoDB')

} catch(error) {
    console.log("Error:", error);
}

app.use("/book",bookRoute)
app.use("/user",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
