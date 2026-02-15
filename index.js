require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
const apiProductRoutes = require("./routes/apiProductRoutes")

const app = express()
const authRoutes = require("./routes/authRoutes")

connectDB();


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

const session = require("express-session")
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
     saveUninitialized : false,
  })
)

app.use("/api", apiProductRoutes)
app.use("/", productRoutes)
app.use("/", authRoutes)
 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

