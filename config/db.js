//db.js
const mongoose = require("mongoose")

const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB se ha conectado con éxito")
    } catch (error){
        console.error("Error al conectarse MongoDB", error)
        process.exit(1)

    }
}

module.exports = connectDB