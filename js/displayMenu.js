function displayMenu(isDisplay) {
    const menu = document.getElementById("menu")
    if(isDisplay) {
        menu.style.right = "0px"
    } else {
        menu.style.right = "-100%"
    }
}