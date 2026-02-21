require("dotenv").config()

const express = require("express")
const methodOverride = require("method-override")
const session = require("express-session")

const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
const apiProductRoutes = require("./routes/apiProductRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()


connectDB()
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
)


app.use(methodOverride("_method"))



app.use("/api", apiProductRoutes)
app.use("/", authRoutes)
app.use("/", productRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// if (process.env.NODE_ENV !== "test") {
//   app.listen(prototype, ()=>{
//     console.log(`Servidor corriendo en http://localhost:${PORT}`)
//   })
// }
// module.exports = app



