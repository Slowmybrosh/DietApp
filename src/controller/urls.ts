import fastify from "fastify";

const {logger} = require('../logger.ts')
const server = require('fastify')({
    logger: logger
});
