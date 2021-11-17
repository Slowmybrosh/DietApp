class ValorNutricional { 
    
    private id:string;
    private kilojulios:number;
    private grasa:number;
    private proteinas:number;
    private fibra:number;
    private sal:number;
    private azucar:number;
    private sodio:number;
    private calcio:number;
    private hierro:number;
    private fosforo:number;
    private potasio:number;

    constructor(id: string, kilojulios?: number, grasa?: number, proteinas?: number,
        fibra?: number, sal?: number, azucar?: number, sodio?: number, calcio?: number, hierro?: number,
        fosforo?: number,potasio?: number) {

            this.id = id;
        
            if(kilojulios !== undefined){
                this.kilojulios = kilojulios;
            }
            else{
                throw new Error('Los kilojulios no pueden estar vacíos');
            }
    
            if(grasa !== undefined){
                this.grasa = grasa;
            }
            else{
                throw new Error('La grasa no puede estar vacía');
            }
    
            if(proteinas !== undefined){
                this.proteinas = proteinas;
            }
            else{
                throw new Error('Las proteinas no pueden estar vacías');
            }
    
            if(fibra !== undefined){
                this.fibra = fibra;
            }
            else{
                throw new Error('La fibra no puede estar vacía');
            }
    
            if(sal !== undefined){
                this.sal = sal;
            }
            else{
                throw new Error('La sal no puede estar vacía');
            }
    
            if(azucar !== undefined){
                this.azucar = azucar;
            }
            else{
                throw new Error('El azucar no puede estar vacío');
            }
    
            if(sodio !== undefined){
                this.sodio = sodio;
            }
            else{
                throw new Error('El sodio no puede estar vacío');
            }
    
            if(calcio !== undefined){
                this.calcio = calcio;
            }
            else{
                throw new Error('El calcio no puede estar vacío');
            }
    
            if(hierro !== undefined){
                this.hierro = hierro;
            }
            else{
                throw new Error('El hierro no puede estar vacío');
            }
    
            if(potasio !== undefined){
                this.potasio = potasio;
            }
            else{
                throw new Error('El potasio no puede estar vacío');
            }
    
            if(fosforo !== undefined){
                this.fosforo = fosforo;
            }
            else{
                throw new Error('El fosforo no puede estar vacío');
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

    public getSal():number{
        return this.sal;
    }

    public getAzucar():number{
        return this.azucar;
    }
    
    public getSodio():number{
        return this.sodio;
    }

    public getCalcio():number{
        return this.calcio;
    }

    public getHierro():number{
        return this.hierro;
    }

    public getFosforo():number{
        return this.fosforo;
    }

    public getPotasio():number{
        return this.potasio;
    }

}