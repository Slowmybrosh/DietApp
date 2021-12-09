FROM node:17-alpine

WORKDIR /app
RUN chown -R node . && chmod 777 -R .
USER node
COPY package*.json ./
COPY config/* ./config/
RUN npm ci

WORKDIR /app/test
ENTRYPOINT ["npm", "run", "test"]