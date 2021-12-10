import { Error_Config } from "./errores";
import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration.env'})

const client = new Etcd3();

export class Config {
    private log_dir: any;
    private log_folder: any; 
    constructor(){
        (async () => {
            this.log_dir = await client.get('LOG_DIR').string().catch(err =>{});
        })();
        if(this.log_dir == null && process.env.LOG_DIR != undefined){
            this.log_dir = String(process.env.LOG_DIR);
        }
        else{
            this.log_dir = 'logs.json';
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

    public getLog_dir():string{
        return this.log_dir;
    }

    public getLog_folder():string{
        return this.log_folder
    }
}