FROM node:16.13-alpine

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

# EXPOSE 8080
 CMD [ "npm", "run", "dev" ]
