const texto = document.getElementById("texto2-header");

let posicionTexto2Header = 0;
const textoTexto2Header = ["Desarrollador Web Junior.","Creador de soluciones."];

// let cambiarTexto = setInterval(()=>{
//     texto.innerHTML = textoTexto2Header[posicionTexto2Header];
//     posicionTexto2Header++;
//     if(posicionTexto2Header==textoTexto2Header.length){
//         posicionTexto2Header=0;
//     }
// },2000);



function Esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function CambiarMensaje() {
    let textoAux =  "";
    let textoActual = textoTexto2Header[posicionTexto2Header];

    for(letra of textoActual){
        textoAux+=letra;
        texto.innerHTML = textoAux;
        await Esperar(40);
    }

    await Esperar(2500);
    while(textoActual!="."){
        textoActual=textoActual.substring(0,textoActual.length-1);
        if(textoActual==""){
            textoActual = ".";
        }
        texto.innerHTML = textoActual;
        await Esperar(40);
    }
    posicionTexto2Header++;
    if(posicionTexto2Header==textoTexto2Header.length){
        posicionTexto2Header=0;
    }

    CambiarMensaje();

}

CambiarMensaje();