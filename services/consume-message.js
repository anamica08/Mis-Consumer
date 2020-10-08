const Model = require("../db/applicant");
//listen for message 
exports.consume = function({connection,channel}){
    return new Promise((resolve,reject)=>{
        channel.consume("processing.datareq",async function(msg,err){
            if(err){
                return reject("OOPS!!"+err);
            }
            //parsing 
            let msgBody  = msg.content.toString();
            let data = JSON.parse(msgBody);
            console.log("Received data req from service_one [data]: ",data);
            
            saveToDB(data);
            resolve();
            //ack message if received 
            await channel.ack(msg);
        });

        
    })
}

async function saveToDB(data){
   const application = await Model.Applicant.create({
       name:data.name,
       gender:data.gender,
       dob:data.dob,
       currAddress:data.curr_address,
       email:data.email,
       phoneNumber:data.phonenumber,
       position:data.position
   })
   return;
}