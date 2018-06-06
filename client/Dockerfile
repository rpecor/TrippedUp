FROM node:carbon
WORKDIR /usr/src/trippedup
COPY package*.json ./

RUN npm install

copy . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
