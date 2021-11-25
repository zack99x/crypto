FROM node:16.13-alpine

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]