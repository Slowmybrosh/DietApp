import { Error_VN } from "./errores";
import { Error_Dieta } from "./errores";
import { ValorNutricional } from "./model/ValorNutricional";
import { Dieta } from "./model/dieta";
import { Tipo_actividad} from "./model/tipo_actividad";
import { Tipo_dieta} from "./model/tipo_dieta";
import { Config } from "./config";
import { manejador } from "./manejador"
import { Error_manejador } from "./errores";
require('dotenv').config({ path:'../config/configuration.env'})

describe('Clase ValorNutricional', () => {
    it('Comprobar creación de ValorNutricional', () =>{
        const negativeKilocalorias = () => {
            manejador.crear_valorNutricional(-5,0,0,0,0)
        };
        expect(negativeKilocalorias).toThrow(Error_manejador)

        const negativeGrasa = () => {
            manejador.crear_valorNutricional(0,-5,0,0,0)
        };
        expect(negativeGrasa).toThrow(Error_manejador)

        const negativeProteina = () => {
            manejador.crear_valorNutricional(0,0,-5,0,0)
        };
        expect(negativeProteina).toThrow(Error_manejador)

        const negativefibra = () => {
            manejador.crear_valorNutricional(0,0,0,-5,0)
        };
        expect(negativefibra).toThrow(Error_manejador)

        const negativeCarbohidratos = () => {
            manejador.crear_valorNutricional(0,0,0,0,-5)
        };
        expect(negativeCarbohidratos).toThrow(Error_manejador)
    })

    let valor: ValorNutricional
    valor = manejador.crear_valorNutricional(2500,168,657,34,300)

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
            manejador.crear_dieta("Slowmybrosh",-5,180,78,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(negativeEdad).toThrow(Error_manejador)

        const negativeAltura = () =>{
            manejador.crear_dieta("Slowmybrosh",32,-5,78,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(negativeAltura).toThrow(Error_manejador)

        const negativePeso = () =>{
            manejador.crear_dieta("Slowmybrosh",32,180,-5,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(negativePeso).toThrow(Error_manejador)

        const wrongSexo = () =>{
            manejador.crear_dieta("Slowmybrosh",32,180,75,"B",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
        };
        expect(wrongSexo).toThrow(Error_manejador)
    })

    let sedentarioReducir = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.REDUCIR)
    let sedentarioAumentar = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.AUMENTAR)
    let sedentarioEquilibrada = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.SEDENTARIO,Tipo_dieta.EQUILIBRADA)
    let ligeroReducir = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.LIGERO,Tipo_dieta.REDUCIR)
    let ligeroAumentar = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.LIGERO,Tipo_dieta.AUMENTAR)
    let ligeroEquilibrada = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.LIGERO,Tipo_dieta.EQUILIBRADA)
    let moderadoReducir = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.MODERADO,Tipo_dieta.REDUCIR)
    let moderadoAumentar = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.MODERADO,Tipo_dieta.AUMENTAR)
    let moderadoEquilibrada = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.MODERADO,Tipo_dieta.EQUILIBRADA)
    let regularReducir = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.REGULAR,Tipo_dieta.REDUCIR)
    let regularAumentar = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.REGULAR,Tipo_dieta.AUMENTAR)
    let regularEquilibrada = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.REGULAR,Tipo_dieta.EQUILIBRADA)
    let eliteReducir = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.ELITE,Tipo_dieta.REDUCIR)
    let eliteAumentar = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.ELITE,Tipo_dieta.AUMENTAR)
    let eliteEquilibrada = manejador.crear_dieta("Slowmybrosh",21,190,75,"M",Tipo_actividad.ELITE,Tipo_dieta.EQUILIBRADA)

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
        if(process.env.LOG_FILE != undefined)
            expect(configuracion.getLog_file()).toBe(process.env.LOG_FILE)
        else
            expect(configuracion.getLog_file()).toBe('logs.json')
        
        if(process.env.LOG_FOLDER != undefined)
            expect(configuracion.getLog_folder()).toBe(process.env.LOG_FOLDER)
        else
            expect(configuracion.getLog_folder()).toBe('/tmp/dietapp/')
    })    
});