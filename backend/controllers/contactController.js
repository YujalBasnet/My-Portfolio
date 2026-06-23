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




const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "onboarding@resend.dev",
  to: process.env.EMAIL_USER, // your Gmail
  subject: "New Portfolio Message",
  text: `
New message from portfolio

Name: ${name}
Email: ${email}

Message:
${message}
`,
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