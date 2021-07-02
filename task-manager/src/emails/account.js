const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email,name) => {
  sgMail.send({
    to: email,
    from: "hemlata18oct@gmail.com",
    subject: "Thanks for joining in !",
    text: `Welcome to the app , ${name}. Let me know how you get along with the app `,
  });
};
 
module.exports = { sendWelcomeEmail }