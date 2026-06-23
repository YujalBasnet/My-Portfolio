const transporter= require("../config/mail");


exports.createContact = async (req,res)=>{


try{


const {name,email,message}=req.body;



if(
!name?.trim() ||
!email?.trim() ||
!message?.trim()
){

return res.status(400).json({

message:"All fields are required"

});

}




const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(!emailRegex.test(email.trim())){


return res.status(400).json({

message:"Invalid email"

});

}




await transporter.sendMail({


from: process.env.EMAIL_USER,


to: process.env.EMAIL_USER,


subject:"New Portfolio Message",


text:`

New message from portfolio


Name:
${name}


Email:
${email}


Message:
${message}


`


});




console.log("Email sent successfully");



res.status(200).json({

message:"Message sent successfully"

});



}

catch(error){


console.log("Email Error:",error);


res.status(500).json({

message:"Failed to send email"

});


}


};