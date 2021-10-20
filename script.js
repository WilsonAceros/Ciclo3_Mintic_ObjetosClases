// console.log('Conexión.....');

//OBJETO LITERAL
const reserva = {
    nombre: "Ivan",
    castro: "Castro",
    total: 5000,
    pagado: false,

    informacion: function(){
        //Template string
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

//Cambia el valor de la propiedad apellido
reserva.apellido = "perez";

//Sino existe la propiedad, la crea como nueva
reserva.imagen = "imagen.jpg";

//imprimir el consola
// console.log(reserva);

//Llama a la función para imprmir datos del objeto
// reserva.informacion();

// Seal es que el permite modificar valores de propiedades pero no añadir
// Freeze es que el no permite ninguna de las dos cosas


//OBJETO CONSTRUCTOR
function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

//Instancias del objeto producto
const producto1 = new Producto ("Tv", "5000", false);
const producto2 = new Producto ("PlayStation", "10000", true);

// console.log(producto1);
// console.log(producto2);

//PROTOTYPE - Sirve para crear metodos a los objetos
//nombreObjeto.prototype.nombremetodo = function()
Producto.prototype.leerProducto = function(){
    //Template string
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

//Ejecutamos la funcion prototype
// console.log(producto1.leerProducto());
// console.log(producto2.leerProducto());



const productoObj = {
    nombreProducto: "Televisor HD",
    precio: 300,
    disponible: true,
}

productoObj.imagen = "imagen.jpg";
console.log(productoObj);

//Destructuring asignar atributos a variables (en un solo paso)
const {precio,nombreProducto} = productoObj;
// console.log(precio);
// console.log(nombreProducto);

delete productoObj.imagen;
console.log(productoObj);


Object.seal(productoObj);
productoObj.precio = 500;
console.log(Object.isSealed(productoObj));
console.log(productoObj);
