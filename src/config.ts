import { Error_Config } from "./errores";
import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/enviroment.env'})

const client = new Etcd3();

export class Config {
    private log_dir: any; 
    constructor(){
        (async () => {
            this.log_dir = await client.get('LOG_DIR').string().catch(err =>{});
        })();
        if(this.log_dir == null && process.env.LOG_DIR != undefined){
            this.log_dir = String(process.env.LOG_DIR);
        }
        else{
            throw new Error_Config("Hay un problema con el fichero de configuración")
        }
    }

    public getLog_dir():string{
        return this.log_dir;
    }
}