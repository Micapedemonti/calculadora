const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent;

        if(boton.id == "ac"){
            pantalla.textContent = "0"
            return;
        }
        
        if (boton.id === "negativo") {
            let contenidoNumerico = parseFloat(pantalla.textContent);
        
            if (!isNaN(contenidoNumerico)) {
                pantalla.textContent = -contenidoNumerico;
            }
            return;
        }
        
    

        if (boton.id == 'igual') {
            try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Error!";
        }
        return;
    }


        if(pantalla.textContent == '0'){
            pantalla.textContent = botonApretado
        } else {
        pantalla.textContent += botonApretado
        }
    })
})