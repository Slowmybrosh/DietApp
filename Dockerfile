FROM node:17-alpine

WORKDIR /app
RUN chown -R node . && chmod 777 -R .
USER node
COPY package*.json ./
RUN npm ci

WORKDIR /app/test
VOLUME /app/logs
ENTRYPOINT ["npm", "run", "test"]