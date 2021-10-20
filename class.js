class Producto{

    constructor (nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    leerProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio(){
        console.log(this.precio);
    }
}


//Herencia

class libro extends Producto {
    constructor(nombre, precio, disponible, codigo){
        super(nombre,precio,disponible);
        this.codigo = codigo;
    }

    leerProducto(){
        return `${super.leerProducto()} y su codigo: ${this.codigo}`;
    }

    obtenerPrecio(){
        super.obtenerPrecio();
        console.log("Y si hay en existencia");
    }
}

//Instancias del objeto producto
const libro1 = new libro("baldor",5000,false,"44995959595");
console.log(libro1.leerProducto());
console.log(libro1.obtenerPrecio());