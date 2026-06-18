const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "laxmikhulalbasnet@gmail.com",
      subject: "New Portfolio Message",
      text: `
New message received

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("Email sent:", response);

    return res.json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Resend Error:", error);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};