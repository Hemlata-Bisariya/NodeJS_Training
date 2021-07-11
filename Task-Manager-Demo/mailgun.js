const DOMAIN = "sandbox46dccfbda7184e7ab91d586af77f41f1.mailgun.org";
const apiKey = "e7ad7b938186952dffdbeb17368ac63c-aff8aa95-a0f498d4" ;
const mailgun = require("mailgun").Mailgun({apiKey , DOMAIN});
const data = {
	from: "I am <bisariyahemlata@gmail.com>",
	to: "hemlata18oct@gmail.com",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
}

mailgun.messages().send( data, function(error,body){console.log(body)}

);

   