const getNavBar = (isDashboard = false) => {
    return `
        <nav style="margin-bottom:20px;">
            <a href="/products">Tienda</a>
            | <a href="/dashboard">Login</a>
             ${
                isDashboard
                    ? ' | <a href="/dashboard/new">Nuevo producto</a> '
                    : ""
    }
    | <a href="/logout">Logout</a>
</nav>
<hr>

    `
}


module.exports = getNavBar