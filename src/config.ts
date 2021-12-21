import { Error_Config } from "./errores";
import { Etcd3 } from "etcd3";
require('dotenv').config({ path:'./config/configuration.env'})

const client = new Etcd3();

class Config {
    private log_file: any;
    private log_folder: any;
    private fastify_port: any;

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

        (async () => {
            this.fastify_port = await client.get('FASTIFY_PORT').number().catch(err =>{});
        })();
        if(this.fastify_port == null && process.env.FASTIFY_PORT != undefined){
            this.fastify_port = Number(process.env.FASTIFY_PORT);
        }
        else{
            this.fastify_port = 4444;
        }

    }

    public getLog_file():string{
        return this.log_file;
    }

    public getLog_folder():string{
        return this.log_folder
    }

    public getFastify_port():number{
        return this.fastify_port;
    }
}

export const configuration = new Config()