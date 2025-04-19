function queEs(cadena){
    let cadenaMayus = cadena.toUpperCase()
    let cadenaMinus = cadena.toLowerCase()
    let msj = "";
    if(cadena == cadenaMayus){
        msj = "El texto esta en MAYÚSCULAS"
    }else if(cadena == cadenaMinus){
        msj = "El texto esta en MINÚSCULAS"
    }else{
        msj = "El texto esta ES una MeZclA"
    }

    return msj;
}




console.log(queEs("LUCHO"))