import { Error_Config } from "./errores";
require('dotenv').config({ path:'./config/enviroment.env'})


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