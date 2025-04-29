const producto = {"codigoBarras" : "31441312", "nombre" : "Leche", "precio": 3, "fechaVencimiento": "20-05-2026"};

let productoCadena = `Producto Codigo de barras: ${producto.codigoBarras}
Nombre: ${producto.nombre} 
Precio: ${producto.precio}
Fecha de vencimiento: ${producto.fechaVencimiento}`;

console.log(productoCadena);