const numCirculos = 5;
const velocidadMS = 80;
const desplazamientoPixeles = 4;

let anchoFondo = screen.width;
let altoFondo = screen.height;

const fondo = document.getElementById("fondo-animado");

const cajaTempora = document.createDocumentFragment();
let circulos = [];


function CrearCirculos(){
    for(let i=0; i<numCirculos; i++) {

        const div = document.createElement("DIV");

        //Posicionamiento
        let posX = Math.trunc((Math.random()*anchoFondo));
        let posY = Math.trunc((Math.random()*altoFondo));
        div.style.transform = `translateX(${posX}px) translateY(${posY}px)`;

        circulos.push([
            posX, 
            posY,
            Math.trunc((Math.random()*anchoFondo)), 
            Math.trunc((Math.random()*altoFondo)),
            div
        ]);

        cajaTempora.appendChild(div);
    }
}





function MoverDivs(){
    for(let i=0; i<numCirculos; i++) {
        let camino=0;
        if(circulos[i][0]!=circulos[i][2]){
            if(circulos[i][0]>circulos[i][2]){
                if(circulos[i][0]+desplazamientoPixeles>circulos[i][2]){
                    circulos[i][0]-=desplazamientoPixeles;
                }else{
                    circulos[i][0]=circulos[i][2];
                }
                
            }else{
                if(circulos[i][0]+desplazamientoPixeles<circulos[i][2]){
                    circulos[i][0]+=desplazamientoPixeles;
                }else{
                    circulos[i][0]=circulos[i][2];
                }
                
            }
        }else{
            camino++;
        }

        if(circulos[i][1]!=circulos[i][3]){
            if(circulos[i][1]>circulos[i][3]){
                if(circulos[i][1]+desplazamientoPixeles>circulos[i][3]){
                    circulos[i][1]-=desplazamientoPixeles;
                }else{
                    circulos[i][1]=circulos[i][3];
                }

            }else{
                if(circulos[i][1]+desplazamientoPixeles<circulos[i][3]){
                    circulos[i][1]+=desplazamientoPixeles;
                }else{
                    circulos[i][1]=circulos[i][3];
                }
            }
        }else{
            camino++;
        }

        if(camino==2){
            circulos[i][2] = Math.trunc((Math.random()*anchoFondo));
            circulos[i][3] = Math.trunc((Math.random()*altoFondo));
        }

        circulos[i][4].style.transform = `translateX(${circulos[i][0]}px) translateY(${circulos[i][1]}px)`;
    }
}


CrearCirculos();
fondo.appendChild(cajaTempora);

setInterval(()=>{
    MoverDivs();
},velocidadMS);

window.addEventListener('resize', ()=>{
    fondo.style.width= `100vw`;
    fondo.style.height = `100vh`;
    anchoFondo = screen.width;
    altoFondo = screen.height;
});