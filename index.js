//index.js
require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")

const productRoutes = require("./routes/productRoutes")

const app = express()

