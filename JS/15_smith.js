function comparar(numero){
    let terminosSuma = sumaTerminos(numero);
    let arrFactores = descomponer(numero);
    
    if(arrFactores.length === 1){
        return false;
    }
    
    let sumaFactores = sumarFactores(arrFactores);
    
    return sumaFactores === terminosSuma;
}

function descomponer(numero){
    let divisor = 2;
    let factores = [];

    while(numero > 1){
        if(numero % divisor == 0){
            factores.push(divisor);
            numero = numero / divisor;
        }else{
            divisor++;
        }
    }
    return factores;
}

function sumarFactores(arr){
    let sumaTotal = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toString();
       
        for(let j = 0; j < arr[i].length; j++){
            sumaTotal += parseInt(arr[i][j]);
        }
 
    }
    return sumaTotal;
}


function sumaTerminos(numero){
    let numeroTXT = numero.toString();
    let sumaTotal = 0;

    for(let i = 0; i < numeroTXT.length; i++){
        let aux = parseInt(numeroTXT[i])
        sumaTotal += aux;
    }
    return sumaTotal;
}



console.log(comparar(378))
console.log(comparar(22))