class DietaSemanal{

    private valores_lunes: ValorNutricional;
    private list: ValorNutricional[];

    constructor(valores_lunes: ValorNutricional){
        this.valores_lunes = valores_lunes;

        this.list = [this.valores_lunes, this.valores_martes];
    }

    
    valores_martes = new ValorNutricional(); //Ejemplo de como podría almacenar más días a parte del anterior en casi de que se quisiese

    public getValoresLunes(): ValorNutricional{
        return this.list[0];
    }
    
}