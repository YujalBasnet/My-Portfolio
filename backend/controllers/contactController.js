const Contact = require("../models/Contact");



exports.createContact = (req,res)=>{


const data = {

name:req.body.name,

email:req.body.email,

message:req.body.message

};



Contact.create(data,(err,result)=>{


if(err){

return res.status(500).json({

message:"Error saving message"

});

}



res.json({

message:"Message sent successfully"

});


});


};




exports.getContacts = (req,res)=>{


Contact.getAll((err,result)=>{


if(err){

return res.status(500).json(err);

}


res.json(result);


});


};