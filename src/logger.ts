import { configuration } from "./config";
import * as fs from 'fs';




if(!fs.existsSync(configuration.getLog_folder())){
    fs.mkdirSync(configuration.getLog_folder());
}

const pino = require('pino')
const dest = pino.destination(configuration.getLog_folder()+configuration.getLog_file())
export const logger = pino(dest)