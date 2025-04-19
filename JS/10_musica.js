let estilos = ["Jazz", "Blues" ] 

console.log(estilos)

estilos.push("Rock-n-Roll")

console.log(estilos)

if(estilos.length % 2 !==0){
    let medio = Math.floor(estilos.length /2 );
    estilos[medio] = "Heavy Metal"
}

console.log(estilos)

estilos.shift();

console.log(estilos)

estilos.unshift("Rap", "Reggae")

console.log(estilos)