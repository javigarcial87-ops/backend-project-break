const getNavBar = (isDashboard = false) => {
    return `
        <nav class="navbar">
            <a href="/products">Home</a>
            | <a href="/dashboard">Login</a>
    | <a href="/logout">Logout</a>
</nav>
<hr>

    `
}


module.exports = getNavBar