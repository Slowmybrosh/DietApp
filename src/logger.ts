import { Config } from "./config";
import * as fs from 'fs';

const Configuration = new Config()
const pino = require('pino')
const dest = pino.destination(Configuration.getLog_dir())
export const logger = pino(dest)