import { Error_Dieta } from "./errores";
import { Tipo_actividad } from "./tipo_actividad";
import { Tipo_dieta } from "./tipo_dieta";

/**
 * Clase para guardar el plan de la dieta del usuario
 * @public
 */
export class Dieta{
    private caloriasRecomendadas: number;
    private objetivo: Tipo_dieta;
    private actividad: Tipo_actividad;
    private ActivityMap: Record<Tipo_actividad,number> = {
        [Tipo_actividad.SEDENTARIO]: 1.2,
        [Tipo_actividad.LIGERO]: 1.375,
        [Tipo_actividad.MODERADO]: 1.55,
        [Tipo_actividad.REGULAR]: 1.725,
        [Tipo_actividad.ELITE]: 1.9,
    };

    constructor(edad:number, altura:number, peso:number,sexo:string, actividad:Tipo_actividad, objetivo:Tipo_dieta){
        this.objetivo = objetivo;
        this.actividad = actividad;
        if(edad <= 0)
            throw new Error_Dieta("La edad no puede ser negativa o 0");
        if(altura <= 0)
            throw new Error_Dieta("La altura no puede ser negativa o 0");
        if(peso <= 0)
            throw new Error_Dieta("El peso no puede ser negativo o 0");
        if(sexo.toUpperCase() != "M" && sexo.toUpperCase() != "F")
            throw new Error_Dieta("El sexo del usuario debe ser M(hombre) o F(Mujer)");

        this.caloriasRecomendadas =  this.calcularRecomendadas(edad,altura,peso,sexo,actividad,objetivo)
    }

    private calcularRecomendadas(edad:number, altura:number, peso:number,sexo:string, actividad:Tipo_actividad, objetivo:Tipo_dieta):number{
        let TMB: number;
        if(sexo.toUpperCase() == "M"){
            TMB = (10*peso)+(6.25*altura)-(5*edad)+5;
        }
        else{
            TMB = (10*peso)+(6.25*altura)-(5*edad)-161;
        }

        // if(actividad == Tipo_actividad.SEDENTARIO){
        //     TMB *= 1.2;
        // }
        // else if (actividad == Tipo_actividad.LIGERO){
        //     TMB *= 1.375;
        // }
        // else if (actividad == Tipo_actividad.MODERADO){
        //     TMB *= 1.55;
        // }
        // else if (actividad == Tipo_actividad.REGULAR){
        //     TMB *= 1.725;
        // }
        // else if (actividad == Tipo_actividad.ELITE){
        //     TMB *= 1.9;
        // }

        TMB *= this.ActivityMap[actividad];

        if(objetivo == Tipo_dieta.REDUCIR){
            TMB -= (TMB * (15/100));
        }
        else if (objetivo == Tipo_dieta.AUMENTAR){
            TMB += (TMB * (15/100));
        }

        return TMB
    }

    public getRecomendadas():number{
        return this.caloriasRecomendadas;
    }
    public getActividad():Tipo_actividad{
        return this.actividad;
    }
    public getObjetivo():Tipo_dieta{
        return this.objetivo;
    }
}