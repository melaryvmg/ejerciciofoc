
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }

    cumplirAños() {
        this.edad++;
        console.log(`Ahora tengo ${this.edad} años.`);
    }

}

console.log("Hola mundo")
console.log("Adios bebe")
