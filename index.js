//index.js
require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const methodOverride = require("method-override")
const productRoutes = require("./routes/productRoutes")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(methodOverride("_method"))

connectDB()

app.use("/", productRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.lo("Servidor escuchando en http://localhost:" + PORT)
})




