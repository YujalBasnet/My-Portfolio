const Contact = require("../models/Contact");

const transporter = require("../config/mail");



exports.createContact = (req,res)=>{


const data={

name:req.body.name,

email:req.body.email,

message:req.body.message

};



Contact.create(data,(err,result)=>{


if(err){

return res.status(500).json(err);

}



const mailOptions={


from:process.env.EMAIL_USER,


to:process.env.EMAIL_USER,


subject:"New Portfolio Contact Message",


text:

`
You received a new message.

Name:
${data.name}


Email:
${data.email}


Message:
${data.message}

`

};



transporter.sendMail(mailOptions,(error,info)=>{


if(error){

console.log(error);

}

else{

console.log("Email sent");

}


});




res.json({

message:"Message saved and email sent"

});



});


};