// server.ts or server.js
import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // optional, if you want to receive JSON body

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "p3plzcpnl508185.prod.phx3.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@carltonedu.com",
    pass: "123#Carlton_",
  },
});

// Email sending endpoint
app.get("/", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Carlton Edu" <no-reply@carltonedu.com>',
      to: "absharameen625@gmail.com",
      cc: "absharameen625@gmail.com",
      subject: "Test Email with PDF",
      text: "This is a plain text email",
      html: "<b>This is an HTML email with a PDF attachment</b>",
      attachments: [
        {
          filename: "sample.pdf",
          path: "./sample.pdf",
          contentType: "application/pdf",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return res.status(200).json({ message: "Email sent", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email", error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
