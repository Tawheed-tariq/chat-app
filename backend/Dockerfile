FROM node:current-slim

WORKDIR /server

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["nodemon", "index.js"]