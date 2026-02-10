
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();


connectDB();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


app.use("/", productRoutes);

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

