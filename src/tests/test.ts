import { Error_VN } from "../errores";
import { ValorNutricional } from "../ValorNutricional";

describe('Clase ValorNutricional', () => {
    it('Comprobar creación de ValorNutricional', () =>{
        const negativeKilocalorias = () => {
            new ValorNutricional('aaa', -5)
        };
        expect(negativeKilocalorias).toThrow(Error_VN)

        const negativeGrasa = () => {
            new ValorNutricional('aaa',0,-5)
        };
        expect(negativeGrasa).toThrow(Error_VN)

        const negativeProteina = () => {
            new ValorNutricional('aaa',0,0,-5)
        };
        expect(negativeProteina).toThrow(Error_VN)

        const negativefibra = () => {
            new ValorNutricional('aaa',0,0,-5)
        };
        expect(negativefibra).toThrow(Error_VN)

        const negativeCarbohidratos = () => {
            new ValorNutricional('aaa',0,0,0,0,-5)
        };
        expect(negativeCarbohidratos).toThrow(Error_VN)
    })

    let valor: ValorNutricional
    valor = new ValorNutricional('aaa',2500,168,657,34,300)

    it('Comprobar getters', () =>{
        expect(valor.getKilocalorias()).toBe(2500)
        expect(valor.getGrasa()).toBe(168)
        expect(valor.getProteinas()).toBe(657)
        expect(valor.getFibra()).toBe(34)
        expect(valor.getCarbohidratos()).toBe(300)
    });
});