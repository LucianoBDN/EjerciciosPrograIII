var jotasones = [
    {"id":1, "valor_1":1, "valor_2":1},
    {"id":2, "valor_1":2, "valor_2":2},
    {"id":3, "valor_1":3, "valor_2":3},
    {"id":4, "valor_1":4, "valor_2":4},
    {"id":5, "valor_1":5, "valor_2":5}
];


function guardarJotasones (jotas, texto){   
    let jotaString= JSON.stringify(jotas);
    localStorage.setItem(texto, jotaString);
    console.log(jotasones)
    alert("jotas gaurdados");
  
}


jotasones = guardarJotasones(jotasones, "jotasones")

function recuperarJotasones (textoGetItem){
    let jotasones = [];
    let jotaRecuperados = localStorage.getItem(textoGetItem);
    if(jotaRecuperados){
        jotasones = JSON.parse(jotaRecuperados);
        alert("jotas recuperados")
    }else{
        alert("no hay jotas guardados")
    }
    console.log(jotasones)
    return jotasones   
}



jotasones = recuperarJotasones("jotasones")

console.log(jotasones)


function mostrarTabla (){
    const container = document.getElementById("tabla-container");
    

   
    if(!jotasones || jotasones.length === 0){
        container.innerHTML = "<p>No hay datos para mostrar.</p>";
        return;
    }

     let tabla = "<table border='1'><thead><tr><th>Valor 1</th><th>Valor 2</th><th>ID</th></tr></thead><tbody>";

    jotasones.forEach(jota => {
        tabla += `<tr><td>${jota.valor_1}</td><td>${jota.valor_2}</td><td>${jota.id}</td></tr>`;
    });

    tabla += "</tbody></table>";

    container.innerHTML = tabla;

}

