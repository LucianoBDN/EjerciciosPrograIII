var jotasones = [
    {"id":1, "valor_1":1, "valor_2":1},
    {"id":2, "valor_1":2, "valor_2":2},
    {"id":3, "valor_1":3, "valor_2":3},
    {"id":4, "valor_1":4, "valor_2":4},
];

//Cambiarlo luego para hacerlo mas generico

function guardarJotasones (jotas){   
    if(localStorage.getItem("jotasones")){
        reiniciarJotasones();
    }else{
        let jotaString= JSON.stringify(jotas);
        localStorage.setItem("jotasones", jotaString);
        alert("jotas gaurdados");
    }
}

function recuperarJotasones (){
    let jotasones = [];
    let jotaRecuperados = localStorage.getItem("jotasones");
    if(jotaRecuperados){
        jotasones = JSON.parse(jotaRecuperados);
        alert("jotas recuperados")
    }else{
        alert("no hay jotas guardados")
    }
    console.log(jotasones)
    return jotasones   
}


function aumentarValorJotaNuevo (jotas){
    let idMax = 0;
    for(let i = 0; i < jotas.length; i++){
        if(jotas[i].id > idMax){
            idMax = jotas[i].id;

        }
    }
    let nuevoJota = {"id": idMax + 1, "valor_1": idMax + 1, "valor_2": idMax + 1,};
    jotas.push(nuevoJota);
    return jotas;
}


function agregarNuevoJota (){
    let jotasones = recuperarJotasones();
    
    jotasones =  aumentarValorJotaNuevo(jotasones);
    

    guardarJotasones(jotasones);

    alert("nuevo jota cargado");
}

function reiniciarJotasones () { 

    if(localStorage.getItem("jotasones")){
        if(confirm("Quieres borrar los jotasones?")){
            localStorage.removeItem("jotasones");
        }
    }else{
        alert("Local storage vacio");
    }
}


//logica botones

document.getElementById("guardarJotas").addEventListener("click", function(){
    guardarJotasones(jotasones);
});

document.getElementById("agregarNuevoJota").addEventListener("click", function(){
    agregarNuevoJota();
});

document.getElementById("cargarJotas").addEventListener("click", function(){
    recuperarJotasones();
});

document.getElementById("reiniciar").addEventListener("click", function(){
    reiniciarJotasones();
});