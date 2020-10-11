# image we build from
FROM node:12

#directory to hold the application code inside the image
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

RUN npm install 

COPY . . 

# RUN mkdir /db
# RUN /usr/bin/sqlite3 /db/test.db

EXPOSE 3000

CMD [ "node", "server.js" ]

