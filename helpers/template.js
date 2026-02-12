const baseHtml = require("./baseHtml")
const getNavBar = require("./getNavBar")

const template = (content, isDashboard= false) => {
    const nav = getNavBar(isDashboard)
    return baseHtml(nav + content)

}


module.exports = template