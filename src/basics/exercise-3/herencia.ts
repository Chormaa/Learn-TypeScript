class Animal {

    // Este símbolo: ! , evita la verificación de null o undefined
    private color!: string;
    especie!: string;
    peso!: number;
    protected tamanio!: string; // Solo puede ser accedido por otra clase ya que es protegido

    constructor() {
        console.log('Creando un animal');
    }

    // El void solo cuándo no hay retorno (return)
    alimentarse(): void {
        console.log('Alimentándome');
    }

}

// La herencia se da gracias a la palabra reservada: extends
class Acuatico extends Animal {

    nadar() {
        console.log('Nadando');
    }

}

// La herencia se da gracias a la palabra reservada extends
class Gato extends Animal {

    constructor() {
        super();
        console.log('Creando un gato a partir de animal');
    }

    private molestar() { // Signifca que es único de la clase Gato.
        console.log('Pasando por el teclado');
    }

}

class Perro extends Animal {

    constructor() {
        super();
        console.log('Creando un perro a partir de animal');
    }

    public jugando() {
        console.log('Estoy jugando');
    }

}

// Solo heredar de una sola clase
class Pato extends Acuatico {
}

const cualquierAnimal: Animal = new Animal();

const firulais = new Perro();

const michi = new Gato();

const paticoJuan = new Pato();
paticoJuan.alimentarse();


const animales = [ cualquierAnimal, firulais, michi, paticoJuan ];