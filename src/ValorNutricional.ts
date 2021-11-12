class ValorNutricional { 
    
    private id:string;
    private kilojulios:number;
    private kilocalorias:number;
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

    constructor(id: string, kilojulios?: number, kilocalorias?: number, grasa?: number, proteinas?: number,
        fibra?: number, sal?: number, azucar?: number, sodio?: number, calcio?: number, hierro?: number,
        fosforo?: number,potasio?: number) {

        this.id = id;
        this.kilojulios = kilojulios;
        this.kilocalorias = kilocalorias;
        this.grasa = grasa;
        this.proteinas = proteinas;
        this.fibra = fibra;
        this.sal = sal;
        this.azucar = azucar;
        this.sodio = sodio;
        this.calcio = calcio;
        this.hierro = hierro;
        this.fosforo = fosforo;
        this.potasio = potasio;
    }

    public getKilojulios():number{
        return this.kilojulios;
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