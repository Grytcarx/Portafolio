const btnMenu = document.getElementById("btn-menu");
const menuDesplegable = document.getElementById("menu-desplegable");
const textosMenu = document.getElementsByClassName("texto-menu");

btnMenu.addEventListener('click',() => {
    btnMenu.classList.toggle("menu-activo");
    menuDesplegable.classList.toggle("nav-activo");
    for(texto of textosMenu){
        texto.classList.toggle("texto-menu-activo");
    }
})

for(texto of textosMenu){
    texto.addEventListener('click',() => {
        btnMenu.classList.toggle("menu-activo");
        menuDesplegable.classList.toggle("nav-activo");
        for(texto of textosMenu){
            texto.classList.toggle("texto-menu-activo");
        }
    })
}