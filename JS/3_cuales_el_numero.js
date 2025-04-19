
function meses(){
    let mesesDelAño = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    for(i = 0; i < mesesDelAño.length; i++){
        console.log(`${mesesDelAño[i]} numero del mes: ${i +1}`)
    }
}


meses();

