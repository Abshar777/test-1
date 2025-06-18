import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

const transporter = nodemailer.createTransport({
  host: "p3plzcpnl508185.prod.phx3.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@carltonedu.com",
    pass: "123#Carlton_",
  },
});

const mailOptions = {
  from: '"Carlton Edu" <no-reply@carltonedu.com>',
  to: "absharameen625@gmail.com",
  // bcc: 'no-reply@carltonedu.com',
  cc: 'absharameen625@gmail.com',
  subject: "Test Email with PDF",
  text: "This is a plain text email",
  html: "<b>This is an HTML email with a PDF attachment</b>",
  attachments: [
    {
      filename: "sample.pdf",
      path: './sample.pdf', 
      contentType: "application/pdf",
    },
  ],
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info);
});
