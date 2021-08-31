FROM node:12.2.0-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY ./package*.json /app/
RUN npm install 
COPY . .
EXPOSE 3000
CMD [ "nodemon", "server.js" ]
