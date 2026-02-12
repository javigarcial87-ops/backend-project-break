const Product = require("../models/Product")
const template = require("../helpers/template")

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

    res.send(template(content))
}

//Dashboard
const showDashboard = async(req,res)=>{
    const products = await Product.find()

    let content = `
         <h1>Dashboard</h1>
         <a href="/dashboard/new">Crear producto</a>
         <hr>
    `;

    products.forEach((p)=>{
        content+= `
            <div class="productCard">
                <h2>${p.name}</h2>
                <img src="${p.image}" width="100" alt="imagen_producto">
                <p>${p.price}</p>
                <a href="/dashboard/${p._id}/edit">Editar</a>

                <form action="/dashboard/${p._id}/delete?_method=DELETE" method="POST">
                    <button type="submit">Eliminar</button>
                </form>
            </div>
        `;
    });
    res.send(template(content, true))
};

//editar productos
const showEditProduct = async (req,res)=>{
    const product = await Product.findById(req.params.id)

    const form = `
        <h1>Editar producto</h1>

        <form action="/dashboard/${product._id}?_method=PUT">
            <input name="name" value="${product.name}" required />
            <input name="description" value="${product.description}"/>
            <input name="image" value="${product.image}"/>
            <input name="category" value="${product.category}"/>
            <input name="size" value="${product.size}"/>
            <input name="price" value="${product.price}"/>
            <button type="submit">Actualizar</button>
        </form>
    `
    res.send(template(form, true))
}

//Actualizar producto

const updateProduct = async(req,res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body)
        res.redirect("/dashboard")
    } catch(error) {
        res.status(500).send(error.message)
    }
}


//Eliminar producto
const deleteProduct = async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.redirect("/dashboard")
    } catch (error) {
        res.status(500).send(error.message)
    }
}


//formulario de productos
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
    res.send(template(form, true))
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
    showDashboard,
    showEditProduct,
    updateProduct,
    deleteProduct,
}



