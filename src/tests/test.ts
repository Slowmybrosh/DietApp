import { Error_VN } from "../errores";
import { Error_Dieta } from "../errores";
import { ValorNutricional } from "../ValorNutricional";
import { Dieta } from "../dieta";
import { Tipo_actividad} from "../tipo_actividad";
import { Tipo_dieta} from "../tipo_dieta";
import { Config } from "../config";
require('dotenv').config({ path:'../config/configuration.env'})

describe('Clase ValorNutricional', () => {
    it('Comprobar creación de ValorNutricional', () =>{
        const negativeKilocalorias = () => {
            new ValorNutricional(-5)
        };
        expect(negativeKilocalorias).toThrow(Error_VN)

        const negativeGrasa = () => {
            new ValorNutricional(0,-5)
        };
        expect(negativeGrasa).toThrow(Error_VN)

        const negativeProteina = () => {
            new ValorNutricional(0,0,-5)
        };
        expect(negativeProteina).toThrow(Error_VN)

        const negativefibra = () => {
            new ValorNutricional(0,0,-5)
        };
        expect(negativefibra).toThrow(Error_VN)

        const negativeCarbohidratos = () => {
            new ValorNutricional(0,0,0,0,-5)
        };
        expect(negativeCarbohidratos).toThrow(Error_VN)
    })

    let valor: ValorNutricional
    valor = new ValorNutricional(2500,168,657,34,300)

    it('Comprobar getters', () =>{
        expect(valor.getKilocalorias()).toBe(2500)
        expect(valor.getGrasa()).toBe(168)
        expect(valor.getProteinas()).toBe(657)
        expect(valor.getFibra()).toBe(34)
        expect(valor.getCarbohidratos()).toBe(300)
    });
});

describe('Clase Dieta', () =>{
    it('Comprobar creacion de Dieta', () =>{
        const negativeEdad = () =>{
            new Dieta(-5,180,78,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(negativeEdad).toThrow(Error_Dieta)

        const negativeAltura = () =>{
            new Dieta(32,-5,78,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(negativeAltura).toThrow(Error_Dieta)

        const negativePeso = () =>{
            new Dieta(32,180,-5,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(negativePeso).toThrow(Error_Dieta)

        const wrongSexo = () =>{
            new Dieta(32,180,75,"B",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(wrongSexo).toThrow(Error_Dieta)
    })

    let sedentarioReducir = new Dieta(21,190,75,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.REDUCIR)
    let sedentarioAumentar = new Dieta(21,190,75,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.AUMENTAR)
    let sedentarioEquilibrada = new Dieta(21,190,75,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
    let ligeroReducir = new Dieta(21,190,75,"M",Tipo_actividad.LIGERO,Tipo_dieta.REDUCIR)
    let ligeroAumentar = new Dieta(21,190,75,"M",Tipo_actividad.LIGERO,Tipo_dieta.AUMENTAR)
    let ligeroEquilibrada = new Dieta(21,190,75,"M",Tipo_actividad.LIGERO,Tipo_dieta.EQUILIBRADA)
    let moderadoReducir = new Dieta(21,190,75,"M",Tipo_actividad.MODERADO,Tipo_dieta.REDUCIR)
    let moderadoAumentar = new Dieta(21,190,75,"M",Tipo_actividad.MODERADO,Tipo_dieta.AUMENTAR)
    let moderadoEquilibrada = new Dieta(21,190,75,"M",Tipo_actividad.MODERADO,Tipo_dieta.EQUILIBRADA)
    let regularReducir = new Dieta(21,190,75,"M",Tipo_actividad.REGULAR,Tipo_dieta.REDUCIR)
    let regularAumentar = new Dieta(21,190,75,"M",Tipo_actividad.REGULAR,Tipo_dieta.AUMENTAR)
    let regularEquilibrada = new Dieta(21,190,75,"M",Tipo_actividad.REGULAR,Tipo_dieta.EQUILIBRADA)
    let eliteReducir = new Dieta(21,190,75,"M",Tipo_actividad.ELITE,Tipo_dieta.REDUCIR)
    let eliteAumentar = new Dieta(21,190,75,"M",Tipo_actividad.ELITE,Tipo_dieta.AUMENTAR)
    let eliteEquilibrada = new Dieta(21,190,75,"M",Tipo_actividad.ELITE,Tipo_dieta.EQUILIBRADA)

    it('Comprobar calculo de calorias', () =>{
        let TMB = (10*75)+(6.25*190)- (5*21) + 5
        let expected: number

        expected = (TMB*1.2)-(TMB*1.2*(15/100))
        expect(sedentarioReducir.getRecomendadas()).toBe(expected)

        expected = (TMB*1.2)+(TMB*1.2*(15/100))
        expect(sedentarioAumentar.getRecomendadas()).toBe(expected)

        expected = TMB*1.2
        expect(sedentarioEquilibrada.getRecomendadas()).toBe(expected)

        expected = (TMB*1.375)-(TMB*1.375*(15/100))
        expect(ligeroReducir.getRecomendadas()).toBe(expected)

        expected = (TMB*1.375)+(TMB*1.375*(15/100))
        expect(ligeroAumentar.getRecomendadas()).toBe(expected)

        expected = (TMB*1.375)
        expect(ligeroEquilibrada.getRecomendadas()).toBe(expected)

        expected = (TMB*1.55)-(TMB*1.55*(15/100))
        expect(moderadoReducir.getRecomendadas()).toBe(expected)

        expected = (TMB*1.55)+(TMB*1.55*(15/100))
        expect(moderadoAumentar.getRecomendadas()).toBe(expected)

        expected = (TMB*1.55)
        expect(moderadoEquilibrada.getRecomendadas()).toBe(expected)

        expected = (TMB*1.725)-(TMB*1.725*(15/100))
        expect(regularReducir.getRecomendadas()).toBe(expected)

        expected = (TMB*1.725)+(TMB*1.725*(15/100))
        expect(regularAumentar.getRecomendadas()).toBe(expected)

        expected = TMB*1.725
        expect(regularEquilibrada.getRecomendadas()).toBe(expected)

        expected = (TMB*1.9)-(TMB*1.9*(15/100))
        expect(eliteReducir.getRecomendadas()).toBe(expected)

        expected = (TMB*1.9)+(TMB*1.9*(15/100))
        expect(eliteAumentar.getRecomendadas()).toBe(expected)

        expected = TMB*1.9
        expect(eliteEquilibrada.getRecomendadas()).toBe(expected)
    })

    it('Comprobar getters', () =>{
        let expected = (10*75)+(6.25*190)- (5*21) + 5
        expect(eliteEquilibrada.getActividad()).toBe(Tipo_actividad.ELITE)
        expect(eliteEquilibrada.getObjetivo()).toBe(Tipo_dieta.EQUILIBRADA)
        expect(eliteEquilibrada.getRecomendadas()).toBe(expected*1.9)
    })
});

describe('Clase configuracion', () =>{
    it('Comprobar getters enviroment', () =>{
        let configuracion = new Config();
        if(process.env.LOG_DIR != undefined)
            expect(configuracion.getLog_dir()).toBe(process.env.LOG_DIR)
        else
            expect(configuracion.getLog_dir()).toBe('logs.json')
        
        if(process.env.LOG_FOLDER != undefined)
            expect(configuracion.getLog_folder()).toBe(process.env.LOG_FOLDER)
        else
            expect(configuracion.getLog_folder()).toBe('/tmp/dietapp/')
    })    
});