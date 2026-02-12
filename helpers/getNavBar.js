const getNavBar = (isDashboard = false) => {
    return `
        <nav style="margin-bottom:20px;">
            <a href="/products">Tienda</a>
            <a href="/dashboard">Dashboard</a>
             ${
                isDashboard
                    ? ' | <a href="/dashboard/new">Nuevo producto</a>
                    : ""
    }
</nav>
<hr>

    `
}


module.exports = getNavBar