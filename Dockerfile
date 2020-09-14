FROM node:14.10.1
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install && mv /usr/src/app/node_modules /node_modules
COPY . /usr/src/app
EXPOSE 5090
CMD ["nodemon"]