// Animacion para el "h3" sobre mi
const h3SobreMi = document.getElementById("h3-sobre-mi");
let h3SobreMiActivo = false;

async function H3SobreMi(){
    if(!h3SobreMiActivo) {

        h3SobreMiActivo = true;
        let velocidad = 30;
        let cantidad = 10;
        let simbolo = "-";
        let aux = "";
        
        for(let i=0; i<cantidad; i++){
            aux+=simbolo;
            h3SobreMi.innerText= `Sobre ${aux} mi`;
            await Esperar(velocidad);
        }
        while(aux!="-"){
            aux=aux.substring(0, aux.length-1);
            h3SobreMi.innerText= `Sobre ${aux} mi`;
            await Esperar(velocidad);
        }

        h3SobreMi.innerText= `Sobre mi`;
        h3SobreMiActivo = false;
    }
    
}

h3SobreMi.addEventListener('click', H3SobreMi);






// Animacion para el "h3" mis skills
const h3MisSkills = document.getElementById("h3-mis-skills");
let h3MisSkillsActivo = false;

async function H3MisSkills(){
    if(!h3MisSkillsActivo) {
        h3MisSkillsActivo = true;
        let velocidad = 70;
    
        let textoOriginal = h3MisSkills.innerText;
        let texto = textoOriginal.split("");
    
        for(let i=1; i<texto.length; i++){
            if(texto[i]!=" "){
                texto[i] = texto[i].toUpperCase();
            }
            h3MisSkills.innerText= texto.join("");
            await Esperar(velocidad);
        }
    
        for(let i=0; i<texto.length; i++){
            if(texto[i]!=" "){
                texto[i] = texto[i].toLowerCase();
            }
            h3MisSkills.innerText= texto.join("");
            await Esperar(velocidad);
        }
    
        h3MisSkills.innerText= textoOriginal;
        h3MisSkillsActivo = false;
    }
}

h3MisSkills.addEventListener('click',H3MisSkills);




// Animacion para el "h3" mis proyectos
const h3MisProyectos = document.getElementById("h3-mis-proyectos");
let h3MisProyectosActivo = false;

async function H3MisProyectos() {
    if(!h3MisProyectosActivo) {
        h3MisProyectosActivo = true;

        h3MisProyectos.style.transitionProperty = "transform:scale";
        h3MisProyectos.style.transitionDuration = ".5s"
        h3MisProyectos.style.transform = "scale(1.5) translateX(5rem";
        await Esperar(500);
        h3MisProyectos.style.transform = "scale(1) translateX(0)";
        await Esperar(500);
        h3MisProyectosActivo = false;
    }
}

h3MisProyectos.addEventListener('click',H3MisProyectos);