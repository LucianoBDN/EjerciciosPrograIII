const productos = [{"codigoBarras" : "31441312", "nombre" : "Leche", "precio": 3, "fechaVencimiento": "20-05-2026"},
    {"codigoBarras" : "43134245", "nombre" : "Paty", "precio": 6, "fechaVencimiento": "10-04-2029"},
    {"codigoBarras" : "32443526", "nombre" : "Jamoncito", "precio": 2, "fechaVencimiento": "25-01-2022"},
];


for (let i = 0; i < productos.length; i++){
    console.log(`Producto Codigo de barras: ${productos[i].codigoBarras}
Nombre: ${productos[i].nombre} 
 Precio: ${productos[i].precio}
 Fecha de vencimiento: ${productos[i].fechaVencimiento}`);
 }

productosMostrados = productos.map(function(producto){
    let productoCadena = `Producto Codigo de barras: ${producto.codigoBarras}
Nombre: ${producto.nombre} 
Precio: ${producto.precio}
Fecha de vencimiento: ${producto.fechaVencimiento}`;

    return productoCadena;
})


console.log(productosMostrados);
console.log(productos)
