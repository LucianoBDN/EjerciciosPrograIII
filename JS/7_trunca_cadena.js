

function truncate(cadena, longitud) {
    if (cadena.length > longitud) {
      return cadena.slice(0, longitud - 1) + "…";
    }
    return cadena;
  }




console.log(truncate())