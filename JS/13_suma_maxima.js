function obtenerSumaMaxima(arr) {
    let maximo = arr[0];
    let sumaTotal = 0;

    for(let i = 0; i < arr.length; i++){
        sumaTotal += arr[i];

        if(sumaTotal > maximo){
            maximo = sumaTotal;
        }

        if (sumaTotal < 0){
            sumaTotal = 0;
        }
    }

    return maximo;
}





console.log(obtenerSumaMaxima([-1, 2, 3, -9])) //5
console.log(obtenerSumaMaxima([2, -1, 2, 3, -9])) //6
console.log(obtenerSumaMaxima([-1, 2, 3, -9, 11])) //11
console.log(obtenerSumaMaxima([-2, -1, 1, 2])) //3
console.log(obtenerSumaMaxima([100, -9, 2, -3, 5])) //100

