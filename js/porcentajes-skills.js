const barras = document.getElementsByClassName("barra-skill");
const porcentajes = document.getElementsByClassName("porcentaje-skill");

const valores = [];
for(porcentaje of porcentajes){
    let dato = porcentaje.textContent;
    dato = dato.substring(0, dato.length-1);
    valores.push(dato);
}

for(let i=0; i<valores.length; i++){
    barras[i].style.background = `linear-gradient(90deg, var(--secundario) ${valores[i]}%, var(--fondo1) ${parseInt(valores[i])+7}%)`;
}