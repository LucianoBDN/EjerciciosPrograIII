function repetirPalabra(numero, texto){
    if(texto){
        for(i = 0; i < numero; i++){
            console.log(texto)
        }
    }else{
        console.log(-numero)
    }
}

repetirPalabra(4, "lucho");