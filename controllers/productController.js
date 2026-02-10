const Product =require("../models/Product")

//Mostrar todos los productos
const showProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

//crear producto
const createProduct = async (req,res) => {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
}

module.exports = {
    showProducts,
    createProduct,
}



