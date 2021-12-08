FROM node:17-alpine

WORKDIR /app
RUN chown -R ubuntu:ubuntu . && chmod 777 -R .
USER node
COPY package*.json ./
RUN npm ci

WORKDIR /app/test
ENTRYPOINT ["npm", "run", "test"]