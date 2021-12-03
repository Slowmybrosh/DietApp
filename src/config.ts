import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/enviroment.env'})

const client = new Etcd3();

export class Config {
    private log_dir:string; 
    constructor(){
        if(process.env.LOG_DIR != undefined)
            this.log_dir = process.env.LOG_DIR;
        else
            throw new Error("LOG_DIR no existe en el fichero variables")
        // this.log_dir = String(client.get('LOG_DIR').string())
        // if(this.log_dir == undefined)
        //     if(process.env.LOG_DIR != undefined){
        //         this.log_dir = process.env.LOG_DIR;
        //     }
        //     //Else throw error en configuración
    }

    public getLog_dir():string{
        return this.log_dir;
    }
}