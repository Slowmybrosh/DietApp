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
                throw new Error('Los kilojulios no pueden estar vacíos');
            }
    
            if(grasa >= 0){
                this.grasa = grasa;
            }
            else{
                throw new Error('La grasa no puede estar vacía');
            }
    
            if(proteinas >= 0){
                this.proteinas = proteinas;
            }
            else{
                throw new Error('Las proteinas no pueden estar vacías');
            }
    
            if(fibra >= 0){
                this.fibra = fibra;
            }
            else{
                throw new Error('La fibra no puede estar vacía');
            }

            if(carbohidratos >=0){
                this.carbohidratos = carbohidratos;
            }
            else{
                throw new Error('Los carbohidratos no pueden ser de tipo "undefined"')
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