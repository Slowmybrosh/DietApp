import { Etcd3 } from "etcd3";
import { Error_Config } from "./errores";
require('dotenv').config({ path:'./config/enviroment.env'})

const client = new Etcd3();

export class Config {
    private log_dir:string; 
    constructor(){
        if(process.env.LOG_DIR != undefined)
            this.log_dir = process.env.LOG_DIR;
        else
            throw new Error_Config("LOG_DIR no existe en el fichero variables")
    }

    public getLog_dir():string{
        return this.log_dir;
    }
}