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

const showNewProduct = (req, res) => {
    const form =`
         <h1>Introduce un producto nuevo</h1>
            <form action="/dashboard" method="POST">
                <input name="name" placeholder="Nombre del producto" required/>
                <input name="description" placeholder="Descripción"/>
                <input name="image" placeholder="URL de la imagen del producto"/>
                <input name="category" placeholder="Categoría"/>
                <input name="size" placeholder="Talla"/>
                <input name="price" placeholder="Precio"/>
                <button type="submit">Crear producto</button>
            </form>
    `
    res.send(baseHtml(form))
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
    showNewProduct,
    createProduct,
}



