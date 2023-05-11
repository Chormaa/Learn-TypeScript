// Abstracción: Es el proceso de definir los atributos y los métodos de una clase.
// Es coger un objeto de la vida real y abstraerlo. Por ejem: zapato (obj vida real), tiene métodos, ejem: amarrar, y tiene atributos, ejem: color, tamaño. Es tomar algo de la
// vida real y transformarlo en un objeto con sus respectivos métodos y atributos.
// Encapsulamiento: Protege la información de manipulaciones no autorizadas. Protege unos atributos y métodos solo de ese objeto a través de 3 formas: público, privado y protegido.
// Público: lo que cualquiera puede ver al crear la instancia de una clase. Protegido: Lo que solo puede ver la clase y quién herede de esa clase. Privado: Lo que una clase no expone
// y única y exclusivamente solo puede ser visto por la clase, ni siquiera el que hereda (la herencia). Ejem cotidiano: Lo que muestras a todos (público), lo que muestras a tu familia
// y amigos (protegido), lo que solamente te muestras a ti mismo (privado).
// Protege la "esencia" de los atributos y métodos de una clase en específico (objeto). Ejem: el zapato (es un objeto) con métodos (amarrarlo, acomodarlo..) y atributos (diseño, color..).
// Polimorfismo: Da la misma orden a varios objetos que responden de diferentes maneras. Una misma clase puede tomar diferentes formas. Tiene propiedades similares pero tienen
// funciones únicas. Por ejem , un tenedor y una cuchara, tienen similitudes pero cada una funciona de una forma única y diferente de la otra.
// Herencia: Las clases hijos heredan atributos y métodos de las clases padre. Básicamente es lo que se hereda de una clase en específico, pero con sus propias características.
// Ejem: La pc(padre), tiene hijos , pc gamer, pc empresarial y pc del hogar.

class Auto {

    // Atributos de la clase o propiedades
    color: string = "Negro"; // Se puede indicar directamente dentro de la clase el valor (pero es mejor en un constructor). Evitar realizar esto.
    puertas: number; // Se pueden inicializar en el constructor
    marca?: string; // Se pueden marcar como opcionales (?).

    // Es el primer método que se ejecuta al iniciar una clase. Se deben inicializar los valores de una clase dentro de un constructor. Es buena práctica inicializar los valores
    // dentro de un constructor. Inicializar propiedades de la clase - Método que se ejecuta al realizar una instancia de la clase.
    constructor(marca?: string) {

        this.puertas = 4; // Con this, accedo a todas las propiedades y métodos de la clase
        this.marca = marca;

    }

 // Métodos de la clase
 acelerar() {
    console.log("Acelerando");
}

frenar() {
    console.log("Frenando");
}

prender() {
    console.log("Prendiendo");
}
}

let ferrari: Auto = new Auto(); //Instancia de la clase Auto - Objeto. //Cuándo se ponen esos () significa que estamos llamando al constructor.  Acá la marca ya es opcional.
console.log(ferrari);
console.log(ferrari.marca);
ferrari.marca = "Ferrari";
console.log(ferrari.marca);
console.log(ferrari);
ferrari.color = "Blanco";
console.log(ferrari);

let lambo = new Auto("Lamborghini"); //Significa que acá la marca si o si es lambo
console.log(lambo);
lambo.puertas = 2;
lambo.color = "Exotico";
console.log(lambo);

class Auto2 {

color: string = "Negro"; // Implícita: Por defecto es público
public puertas: number; // Explícita: O se puede indicar directamente que es público. Es buena práctica ser explícito e indicarlo.

// En el constructor yo puedo crear propiedades de la clase
// si y solo si tienen el modificador de acceso (public, private, protected)

// Los parámetros que son opcionales siempre deben ir al final de cualquier método o función
// en este caso el constructor es un método
constructor(public peso: number, public marca?: string) { //Se indica que la marca y el peso es público implícitamente
    this.puertas = 4;
    this.encender();
}

apagar() {
    console.log("Apagando");
}

private encender() {  // Es privado, lo que significa que fuera del constructor, no se puede acceder. Solo se puede ver dentro del constructor de la clase
    console.log(` Bienvenido ${this.marca}, tu color es ${this.color}, tu peso es ${this.peso} y tienes ${this.puertas} puertas.`);
}
}

let ford = new Auto2(500, "Ford"); // 500 toma el primer valor (que vendría siendo el peso del Auto2), y ford el segundo valor (que vendría siendo ford del Auto2)
console.log(ford);
ford.apagar(); //Llamamos un método por fuera del constructor
// Si se quisiera indicar el encender aquí: ford.encender(); , no existiría ya que solamente se puede acceder dentro del constructor (lo que significa que es privado).

//Extensión para identificar errores: error lens.