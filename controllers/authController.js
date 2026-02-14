//authController.js
const template = require("../helpers/template")

const showLogin = (req,res) => {
    const form = `
        <h1>Login Administrador</h1>
        <form action="/login" method="POST">

            <input name="username" placeholder="Introduce el usuario"/>
            <input name="password"  type="password" placeholder="Introduce tu contraaseña"/>
            <button type="submit">Entra</button>

        </form>
    `
    res.send(template(form))
}


const login = (req,res) => {
    const { username, password} = req.body


    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASSWORD
    ) {
        req.session.user = username
        return res.redirect("/dashboard")
    }
    res.send("Datos incorrectos")
}


const logout = (req,res) => {
    req.session.destroy(()=>{
        res.redirect("/login")
    })
}


module.exports = {
    showLogin,
    login,
    logout,
}












