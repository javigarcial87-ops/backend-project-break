const Product = require("../models/Product")
const baseHtml =require("../helpers/baseHtml")

//Mostrar todos los productos
const showProducts = async (req, res) => {
    const products = await Product.find()

    let content = "<h1>Productos</h1>"
    products.forEach((p)=>{
        content +=`
            <div class="card">
                <h2>${p.name}</h2>
                <img src="${p.image}" width="100"/>
                <p>${p.category}</p>
                <p>${p.size}</p>
                <p>${p.price}</p>
            </div>
        `
    })

    res.send(baseHtml(content))
}


//crear producto
const createProduct = async (req,res) => {

    try{const newProduct = await Product.create(req.body)
    res.json(newProduct)
    } catch(error) {
        res.status(500).json({error: error.message})
    }
    
}

module.exports = {
    showProducts,
    createProduct,
}



