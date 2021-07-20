const main = document.querySelector("main");
const secciones = main.children;


// Declaración dle obervador
let opcionesSecciones = {
    root: null,
    threshold: 0,
    rootMargin: "-100px"
}

const observadorSecciones = new IntersectionObserver(function(entradas,observadorSecciones){
    entradas.forEach(entrada => {
        if(!entrada.isIntersecting){
            entrada.target.classList.remove("seccionVista");
        }else{
            entrada.target.classList.add("seccionVista");
        }
        
    })
}, opcionesSecciones);


for(seccion of secciones){
    observadorSecciones.observe(seccion);
}