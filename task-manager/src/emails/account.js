const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    from : "hemlata18oct@gmail.com",
    to : "bisariyahemlata@gmail.com",
    subject : "This is my first creation ",
    text : "I hope you get this email"
})
