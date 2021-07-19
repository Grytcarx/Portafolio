//Datos que se pueden cambiar
const numCirculos = 20;
const radioCirculos = 10;
const velocidadMS = 20;
const desplazamientoPixeles = 5;
const anchoLinea = 2;
const colorLinea = "#00E5AE";
const colorRelleno = "#8186F1";



const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext('2d');

anchoCanvas = screen.width;
altoCanvas = screen.height;
canvas.width = anchoCanvas;
canvas.height = altoCanvas;

let circulos = [];

function CrearCirculos(){
    for(let i=0; i<numCirculos; i++){
        circulos.push([
            Math.trunc(Math.random()*anchoCanvas), //Posicion Actual X
            Math.trunc(Math.random()*altoCanvas), //Posicion Actual Y
            Math.trunc(Math.random()*anchoCanvas), //Posicion Fin X
            Math.trunc(Math.random()*altoCanvas)//Posicion Fin Y)
        ]);
    }
}

function DibujarCirculos(){
    ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
    for(let i=0; i<numCirculos; i++) {
        ctx.beginPath();
        ctx.arc(circulos[i][0],circulos[i][1],radioCirculos,0,Math.PI*2,true);
        ctx.lineWidth = anchoLinea;
        ctx.fillStyle = colorRelleno;
        ctx.fill();
        ctx.strokeStyle = colorLinea,
        ctx.stroke();
    }
}

function MoverCirculos(){
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
            circulos[i][2] = Math.trunc(Math.random()*anchoCanvas);
            circulos[i][3] = Math.trunc(Math.random()*altoCanvas);
        }
    }
}


CrearCirculos();

setInterval(()=>{
    DibujarCirculos();
    MoverCirculos();
},velocidadMS);