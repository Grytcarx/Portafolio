const header = document.getElementById("inicio");
let esEscritorio = false;


// Detecta el tamaño de pantalla al iniciar la página y actualiza la variable que controla si es escritorio o no
let anchoPantalla = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(anchoPantalla>=1024){
    esEscritorio = true;
}


//Detecta cuando hay un cambio del tamaño de pantalla para actualizar la variable que controla si es escritorio o no
window.addEventListener('resize', function evaluarSize(){
    anchoPantalla = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(anchoPantalla>=1024){
        esEscritorio = true;
    }else{
        esEscritorio = false;
    }
});



// Declaración dle obervador
const opcionesMenu = {
    rootMargin: "-60px"
}
const observadorMenu = new IntersectionObserver(function(entrada){
    entrada.forEach(item =>{
        if(esEscritorio){
            if(!item.isIntersecting){
                menuDesplegable.classList.add("nav-movible");
            }else{
                menuDesplegable.classList.remove("nav-movible");
            }
        }
    })
}, opcionesMenu);

observadorMenu.observe(header);