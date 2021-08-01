const padres = document.querySelectorAll('.article-container');

const distanciaRotacionX = 20;
const distanciaRotacionY = 20;

padres.forEach(padre => {
    padre.addEventListener('mousemove', (e)=>{
        const rect = e.target.getBoundingClientRect(); //Obtenemos la posicion X y Y del contenedor respecto a su padre
        let x = e.clientX - rect.left; //Posicion en X respecto al contenedor
    
        let mitadX = padre.clientWidth/2;
        let rangoDesplazamientoX = distanciaRotacionX / mitadX;
        let rotacionX;
        if(x>mitadX){
            let rotacion = (x-mitadX)*rangoDesplazamientoX;
            rotacionX = `rotateY(${rotacion}deg)`;
        }else{
            let rotacion = (mitadX-x)*rangoDesplazamientoX;
            rotacionX = `rotateY(${-rotacion}deg)`;
        }
    

        let y = (e.clientY - rect.bottom)*-1;
        let mitadY = padre.clientHeight/2;
        let rangoDesplazamientoY = distanciaRotacionY / mitadY;
        let rotacionY;

        if(y<mitadY){
            let rotacion = (y-mitadY)*rangoDesplazamientoY;
            rotacionY = `rotateX(${rotacion}deg)`;
        }else{
            let rotacion = (mitadY-y)*rangoDesplazamientoY;
            rotacionY = `rotateX(${-rotacion}deg)`;
        }

        padre.firstElementChild.style.transition = "none";
        padre.firstElementChild.style.transform = `${rotacionX} ${rotacionY}`;
    
    })
    
    padre.addEventListener('mouseleave', function(){
        padre.firstElementChild.style.transitionProperty = "transform"
        padre.firstElementChild.style.transitionDuration = "1s";
        padre.firstElementChild.style.transform = `rotateY(0deg)`;
    })

});
