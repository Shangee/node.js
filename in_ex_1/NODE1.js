var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thuvarakanp96@gmail.com',
    pass: 'thuvarakan20'
  }
});

var mailOptions = {
  from: 'thuvarakanp96@gmail.com',
  to: 'shangeeran@gmail.com',
  subject: 'mail',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
