import { Error_VN } from "./errores";

/**
 * Clase que contiene los valores nutricionales para las dietas
 * @public
 */
export class ValorNutricional { 

    private kilocalorias:number;
    private grasa:number;
    private proteinas:number;
    private fibra:number;
    private carbohidratos:number;

    constructor(kilocalorias = 0, grasa = 0, proteinas = 0, fibra = 0, carbohidratos = 0) {
        
            if(kilocalorias >= 0){
                this.kilocalorias = kilocalorias;
            }
            else{
                throw new Error_VN('El valor de kilojulios no ser negativo');
            }
    
            if(grasa >= 0){
                this.grasa = grasa;
            }
            else{
                throw new Error_VN('El valor de grasa no ser negativo');
            }
    
            if(proteinas >= 0){
                this.proteinas = proteinas;
            }
            else{
                throw new Error_VN('El valor de proteinas no puede ser negativo');
            }
    
            if(fibra >= 0){
                this.fibra = fibra;
            }
            else{
                throw new Error_VN('El valor de fibra no ser negativo');
            }

            if(carbohidratos >=0){
                this.carbohidratos = carbohidratos;
            }
            else{
                throw new Error_VN('El valor de carbohidratos no ser negativo');
            }
    }

    public getKilocalorias():number{
        return this.kilocalorias;
    }

    public getGrasa():number{
        return this.grasa;
    }

    public getProteinas():number{
        return this.proteinas;
    }

    public getFibra():number{
        return this.fibra;
    }

    public getCarbohidratos():number{
        return this.carbohidratos;
    }

}