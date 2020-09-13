FROM node:12

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN ls

COPY . .

EXPOSE 5090

CMD ["node", "src/index.js"]