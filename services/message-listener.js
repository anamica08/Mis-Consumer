require("dotenv").config();
const amqp = require('amqplib');
const messageConsumer = require('./consume-message');
const messageQueueConnectionString = process.env.CLOUDAMQP_URL;

exports.listenForMessage = async function (){
let connection = await amqp.connect(messageQueueConnectionString);
//create channel and prefetch 1 message at a time 
let channel = await connection.createChannel();
await channel.prefetch(1);

await messageConsumer.consume({ connection, channel })
.catch((err)=>{
    console.error(err);
});
}