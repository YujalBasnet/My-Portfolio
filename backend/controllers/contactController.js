const transporter = require("../config/mail");

exports.createContact = (req, res) => {

  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Portfolio's Message",
    text: `
New message received:

Name:
${data.name}

Email:
${data.email}

Message:
${data.message}
`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Email error:", error);
      return res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent successfully");
      return res.json({ message: "Message sent successfully" });
    }
  });

};
