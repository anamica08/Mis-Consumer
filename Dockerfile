# image we build from
FROM node:12

#directory to hold the application code inside the image
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3000

CMD [ "node", "server.js" ]

