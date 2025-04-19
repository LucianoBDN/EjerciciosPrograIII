let nombre = "luciano";
let apellido = "bordon";

function mostrarNombreApellido(nombre, apellido){
    if(nombre && apellido){
        let apellidoMayus = apellido.toUpperCase();
        let nombrePMayus = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
        console.log(`${apellidoMayus},${nombrePMayus}`)
    }
}


mostrarNombreApellido(nombre,apellido)