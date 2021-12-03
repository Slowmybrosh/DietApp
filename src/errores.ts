/**
 * Clase para gestionar los errores en ValorNutricional.ts
 * @public
 */
export class Error_VN extends Error{
    /**
     * Constructor de clase
     * @param message
     */

    constructor(message: string){
        super(message);
    }

}

/**
 * Clase para gestionar los errores en la clase Dieta
 * @public
 */
export class Error_Dieta extends Error{
    /**
     * Constructor de clase
     * @param message
     */

    constructor(message: string){
        super(message);
    }

}

/**
 * Clase para gestionar los errores en la clase config
 *  @public
 */
export class Error_Config extends Error{
    /**
     * Constructor de clase
     */
    constructor(message: string){
        super(message);
    }
}