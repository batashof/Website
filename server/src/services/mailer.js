const nodemailer = require("nodemailer");
require("dotenv").load();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

let setMessage = (action, sender, addressee, content, file) => {
  let message;

  switch (action) {
    case "job-application":
      message = {
        from: `"GT-Website" <${sender}>`,
        to: addressee,
        subject: `GT-Website Job Application for ${content.position}`,
        text: `Name: ${content.name} ${content.lastName}`,
        html:
          `<p><b>Name:</b> ${content.name}</p>` +
          `<p><b>Last name:</b> ${content.lastName}</p>` +
          `<p><b>Email:</b> ${content.email}</p>` +
          `<p><b>Phone:</b> ${content.tel}</p>` +
          `<p><b>Message:</b> ${content.message}</p>`
      };
      if (file) {
        message.attachments = [
          {
            path: `uploads/${file.filename}`
          }
        ];
      }
      break;
    case "contact-us":
      message = {
        from: `"GT-Website" <${sender}>`,
        to: addressee,
        subject: `GT-Website Message`,
        text: `Name: ${content.name}`,
        html:
          `<p><b>Name:</b> ${content.name}</p>` +
          `<p><b>Email:</b> ${content.email}</p>` +
          `<p><b>Phone:</b> ${content.tel}</p>` +
          `<p><b>Message:</b> ${content.message}</p>`
      };
  }

  return message;
};

module.exports = {
  sendMail: (action, sender, addressee, content, attachment) => {
    transporter.sendMail(
      setMessage(action, sender, addressee, content, attachment),
      (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("message was sent!");
        console.log(info);
      }
    );
  }
};