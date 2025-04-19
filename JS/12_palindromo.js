function esPalindromo(cadena){
    let cadenaLimpia = cadena.toLowerCase().replace(/\s/g, '');
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    let mensaje = "no es palindromo"
    if (cadenaLimpia === cadenaInvertida) {
        mensaje = "es palíndromo";
    }

    return `La cadena "${cadena}" ${mensaje}`;
}


console.log(esPalindromo("neuquen"))


