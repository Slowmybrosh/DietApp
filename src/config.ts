import { Error_Config } from "./errores";
import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration.env'})

const client = new Etcd3();

export class Config {
    private log_file: any;
    private log_folder: any; 
    constructor(){
        (async () => {
            this.log_file = await client.get('LOG_FILE').string().catch(err =>{});
        })();
        if(this.log_file == null && process.env.LOG_FILE != undefined){
            this.log_file = String(process.env.LOG_FILE);
        }
        else{
            this.log_file = 'logs.json';
        }

        (async () => {
            this.log_folder = await client.get('LOG_FOLDER').string().catch(err =>{});
        })();
        if(this.log_folder == null && process.env.LOG_FOLDER != undefined){
            this.log_folder = String(process.env.LOG_FOLDER);
        }
        else{
            this.log_folder = "/tmp/dietapp/";
        }

    }

    public getLog_file():string{
        return this.log_file;
    }

    public getLog_folder():string{
        return this.log_folder
    }
}