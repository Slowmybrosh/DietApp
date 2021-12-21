import { Dieta } from "./model/dieta";
import { ValorNutricional } from "./model/ValorNutricional";
import { Tipo_dieta } from "./model/tipo_dieta";
import { Tipo_actividad } from "./model/tipo_actividad";
import { logger } from "./logger"
import { Error_Dieta, Error_manejador } from "./errores";
import { Error_VN } from "./errores";

class Manejador {
    private msg: string

    /**
     * Constructor de clase
     */
    constructor(){
        this.msg = ""
    }

    /**
     * Crear una nueva dieta
     * 
     * @param edad Edad del usuario
     * @param altura Altura del usuario
     * @param peso Peso del usuario
     * @param sexo Género del usuario
     * @param actividad Tipo de actividad que realiza el usuario
     * @param objetivo Tipo de dieta que busca el usuario
     */

    public crear_dieta(username:string,edad:number, altura:number, peso:number,sexo:string, actividad:Tipo_actividad, objetivo:Tipo_dieta):Dieta {
        try{
            let dieta = new Dieta(username,edad,altura,peso,sexo,actividad,objetivo)
            logger.info(`Se ha creado una nueva dieta con ID: ${dieta.getID()}`)
            return dieta
        }catch(err){
            logger.error(err)
            if(err instanceof Error_Dieta)
                this.msg = err.message
            throw new Error_manejador(this.msg)
        }
    }

    public crear_valorNutricional(kilocalorias:number, grasa:number, proteinas:number, fibra:number, carbohidratos:number):ValorNutricional {
        try{
            let valorNutricional = new ValorNutricional(kilocalorias,grasa,proteinas,fibra,carbohidratos);
            logger.info(`Se ha creado un nuevo valor nutricional`);
            return valorNutricional
        }
        catch(err){
            logger.error(err)
            if(err instanceof Error_VN)
                this.msg = err.message
            throw new Error_manejador(this.msg)
        }
    }
}

export const manejador = new Manejador()