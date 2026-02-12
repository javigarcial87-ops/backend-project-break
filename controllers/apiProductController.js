const Product = require("../models/Product")

//mostrar productos
const getProducts = async (req,res) => {
    try {
        const products = await Product.find()
        res.json(products)
    }   catch (error) {
        res.status(500).json({error: error.message})
    }
}
//buscar producto por id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


//crear productos
const createProductApi = async (req,res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    }   catch (error) {
        res.status(500).json({error: error.message})
    }
}



//actualizar producto
const updateProductApi = async(req,res)=> {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(updated)
    }   catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//borrar producto
const deleteProductApi = async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({message: "el producto ha sido eliminado con éxito"})
    }   catch (error) {
    res.status(500).json({ error: error.message });
  }
}


 module.exports = {
    getProducts,
  getProductById,
  createProductApi,
  updateProductApi,
  deleteProductApi,
 }





