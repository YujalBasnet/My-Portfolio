exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate empty fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    // Send email
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

    return res.status(200).json({
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Resend Error:", error);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};