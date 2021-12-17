import { Config } from "./config";
import * as fs from 'fs';


const Configuration = new Config()

if(!fs.existsSync(Configuration.getLog_folder())){
    fs.mkdirSync(Configuration.getLog_folder());
}

const pino = require('pino')
const dest = pino.destination(Configuration.getLog_folder()+Configuration.getLog_file())
export const logger = pino(dest)