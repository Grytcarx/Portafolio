const sizeCirculo = 20; //pixeles
const numCirculos = 10;
const velocidadMS = 30;
const desplazamientoPixeles = 4;
const anchoLinea = 3;
const colorLinea = "#00E5AE";
const colorRelleno = "#8186F1";



const fondo = document.getElementById("fondo-animado");
anchoFondo = screen.width;
altoFondo = screen.height;
fondo.style.position = "fixed";
fondo.style.top = "0";
fondo.style.left = "0";
fondo.style.width= `${anchoFondo}px`;
fondo.style.height = `${altoFondo}px`;
fondo.style.zIndex = "-1";


const cajaTempora = document.createDocumentFragment();
let circulos = [];


function CrearCirculos(){
    for(let i=0; i<numCirculos; i++) {

        const div = document.createElement("DIV");

        //Diseño
        div.style.position = "absolute";
        div.style.width = `${sizeCirculo}px`;
        div.style.height = `${sizeCirculo}px`;
        div.style.backgroundColor = `${colorRelleno}`;
        div.style.border = `${anchoLinea}px solid ${colorLinea}`;
        div.style.borderRadius = "0%";


        //Posicionamiento
        let posX = Math.trunc((Math.random()*anchoFondo)-sizeCirculo/2);
        let posY = Math.trunc((Math.random()*altoFondo)-sizeCirculo/2);
        div.style.left = `${posX}px`;
        div.style.top = `${posY}px`;

        circulos.push([
            posX, 
            posY,
            Math.trunc((Math.random()*anchoFondo)-sizeCirculo/2), 
            Math.trunc((Math.random()*altoFondo)-sizeCirculo/2),
            div
        ]);

        cajaTempora.appendChild(div);
    }
}





function MoverDivs(){
    for(let i=0; i<numCirculos; i++) {
        console.log(i);
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
            circulos[i][2] = Math.trunc((Math.random()*anchoFondo)-sizeCirculo/2);
            circulos[i][3] = Math.trunc((Math.random()*altoFondo)-sizeCirculo/2);
        }

        circulos[i][4].style.left = `${circulos[i][0]}px`;
        circulos[i][4].style.top = `${circulos[i][1]}px`;
    }
}


CrearCirculos();
fondo.appendChild(cajaTempora);
setInterval(()=>{
    MoverDivs();
    // Mover();
},velocidadMS);