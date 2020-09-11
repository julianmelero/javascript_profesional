// Get y Set

var persona = {
    nombre:'Juan',
    get cogeNombre() {
        return this.nombre;
    },
    set ponNombre(nom) {
        this.nombre = nom;
        console.log(`He puesto el nombre a ${nom}`);
    }
};

const nom = persona.cogeNombre;
console.log(nom);

persona.ponNombre = 'Pepe';


class Persona {    
    set ponNombre(nombre) {
        this.nombre = nombre;
        return console.log(`Nombre puesto a ${nombre}`);
    }
}

personita = new Persona;
personita.ponNombre = 'Pepe';

// ¿Set y Get en prototype?
const Persona = function () {}

Persona.prototype.set = function (nombre) {
    this.nombre = nombre;
    return console.log(`Nombre puesto a ${nombre}`);
}


personita = new Persona;
personita.set('Pepe');
