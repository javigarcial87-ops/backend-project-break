//Product.js
const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type:String,required: true},
    description: String,
    image:String,
    category: {
        type: String,
        enum: ["Camisetas", "Pantalones","Zapatos","Complementos"],
        required: true,
    },
    size: {
        type: String,
        enum: ["XS","S","M","L","XL"],
        required: true,
    },
    price: {type: Number, required: true},
    
})

module.exports = mongoose.model("Product", productSchema);