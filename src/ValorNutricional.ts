import { Error_VN } from "./errores";

export class ValorNutricional { 
    
    private id:string;
    private kilojulios:number;
    private grasa:number;
    private proteinas:number;
    private fibra:number;
    private carbohidratos:number;

    constructor(id: string, kilojulios = 0, grasa = 0, proteinas = 0, fibra = 0, carbohidratos = 0) {

            this.id = id;
        
            if(kilojulios >= 0){
                this.kilojulios = kilojulios;
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

    public getKilojulios():number{
        return this.kilojulios;
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