const express = require('express')
const listener = require('./services/message-listener')
const app = express()
const { db } = require('./db/applicant')

db.sync()
.then(()=>{
    var port = process.env.PORT ;
    app.listen(port, ()=>{
        console.log(`Server listening on port ${port}...`);
        listener.listenForMessage();
        console.log("Listener started listening....................");
     });
})
.catch((err)=>{
    console.error(err);
})



module.exports = app;