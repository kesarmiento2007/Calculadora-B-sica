document.addEventListener("DOMContentLoaded", function(){
    
    const barra = document.querySelector(".barra");
    const botones = this.getElementsByClassName("boton");

    const boton = Array.from(botones);

    boton.forEach( b =>{
        b.addEventListener("click", function(){
            switch(b.innerHTML){
                case "C": reiniciar(barra); break;
                case "-------": retroceso(barra); break
                case "=": resultado(barra); break;
                default: actualizar(b, barra); break
            }
        });
    });
});

function resultado(barra){

    // Evalua las "x"
    const evaluar = barra.innerHTML;
    let newResult = "";
    for(let i = 0; i < evaluar.length; i++){
        if(evaluar[i] == "x") newResult += "*";
        else newResult += evaluar[i];
    }

    // Evalua la longitud
    newResult = eval(newResult);
    newResult = newResult.toString();
    let newResult2 = "";

    if(newResult.includes(".")) evaluar2(14);
    else evaluar2(13);

    function evaluar2(cant){
        if(newResult.length > cant){
            for(let i = 0; i < cant; i++){
                newResult2 += newResult[i];
            }
        } else{
            for(let i = 0; i < newResult.length; i++){
                newResult2 += newResult[i];
            }
        }
    }

    barra.innerHTML = newResult2;
}

function reiniciar(barra){
    barra.innerHTML = "0";
}

function retroceso(barra){
    const original = barra.innerHTML;
    let nueva = "";
    for(let i = 0; i < original.length - 1; i++){
        nueva += original[i];
    }

    if(nueva.length >= 1) barra.innerHTML = nueva;
    else barra.innerHTML = "0";
}

function actualizar(b, barra){
    if(barra.innerHTML == "0"){
        barra.innerHTML = "";
    }

    if(barra.innerHTML.length < 13){
        barra.innerHTML += b.innerHTML;
    } else{
        barra.innerHTML = "Llegó a su límite";
    }
}

