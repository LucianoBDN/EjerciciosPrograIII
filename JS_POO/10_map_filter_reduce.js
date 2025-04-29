

const nombresDeTrabajos = usuarios.map(function (usuario) {
    return usuario.trabajo;
}) 

// console.log(nombresDeTrabajos)


const paisesUsuarios = usuarios.map(function (usuario) {
    return usuario.pais;
}) 

// console.log(paisesUsuarios)


const usuariosChinos = usuarios.filter(function (usuario) {
    return usuario.pais === "China";
});
//console.log(usuariosChinos);

const menoresDeVeintiuno = usuarios.filter(function (usuario) {
    return usuario.edad < 21 ;
});

//console.log(menoresDeVeintiuno)

const usuariosMale = usuarios.filter(function (usuario) {
    return usuario.sexo === "Male" ;
});

//console.log(usuariosMale.length)

const usuariosFemale = usuarios.filter(function (usuario) {
    return usuario.sexo === "Female" ;
});

//console.log(usuariosFemale.length)

const cantidadUsuariosMale = usuarios.reduce(function (contador, usuario) {
    return usuario.sexo === "Male" ? contador + 1 : contador;
}, 0);

//console.log(cantidadUsuariosMale);

const cantidadUsuariosFemale = usuarios.reduce(function (contador, usuario) {
    return usuario.sexo === "Female" ? contador + 1 : contador;
}, 0);

//console.log(cantidadUsuariosFemale);


const nombresFemale = usuarios.reduce(function (arrayNombres, usuario){
    if(usuario.sexo === "Female"){
        arrayNombres.push(usuario.nombre);
    }
    return arrayNombres;
}, []);

//console.log(nombresFemale);

const emailMale = usuarios.reduce(function (arrayNombres, usuario){
    if(usuario.sexo === "Male"){
        arrayNombres.push(usuario.email);
    }
    return arrayNombres;
},[]);

//console.log(emailMale);

const arrNAC = usuarios.reduce(function (arrayANC, usuario){
    arrayANC.push({
        "nombre" : usuario.nombre,
        "apellido" : usuario.apellido,
        "ciudad": usuario.ciudad
    })
    return arrayANC;
},[]);

//console.log(arrNAC)

const arrNACMale = usuarios.reduce(function (arrayANC, usuario){
    if(usuario.sexo === "Male" && usuario.edad > 35){ 
        arrayANC.push({
            "nombre" : usuario.nombre,
            "apellido" : usuario.apellido,
            "ciudad": usuario.ciudad,
        })}
    return arrayANC;
},[]);

//console.log(arrNACMale)

function promediarEdad(){
    const sumaEdades = usuarios.reduce(function(total, usuario){
        return total + usuario.edad;
    },0);

    const promedioEdades = sumaEdades / usuarios.length;

    return promedioEdades;
}

    console.log(promediarEdad());