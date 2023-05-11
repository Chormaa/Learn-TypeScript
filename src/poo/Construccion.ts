export abstract class Construccion {

    public static cantidad_edificios: number = 0; // Se inicializa en class ya que pertenece a la clase y no a los obj. Por lo que
                                                  // sobrevive. Si se inicializa en constructor, siempre daría 1 y no los pisos ya que
                                                  // pertenecería al obj.

    constructor(private _pisos: number) { //Siempre al indicar private, escribir un _ al comienzo del atributo.
        Construccion.cantidad_edificios += 1;  
    }

    public impuestos(): number {
        return this._pisos * 3000000;
    }

    get pisos(): number {  //El get le da acceso a cualquiera sobre una propiedad privada.
        return this._pisos;
    }

    set pisos( pisos ) {
        this._pisos = pisos;
    }

    static edificios_contador(): number {
        return Construccion.cantidad_edificios;
    }

}