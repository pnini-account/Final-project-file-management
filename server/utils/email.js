var nodemailer = require('nodemailer');

// https://support.google.com/mail/answer/185833?hl=iw
//
const sendEmail = (to, subject, massege, filename, path, typeOfFile) => {
  var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: '36326036654@mby.co.il',
      pass: 'Student@264'
    }
  });


console.log(typeOfFile);
  var mailOptions = {
    from: '36326036654@mby.co.il',
    to: to,
    subject: subject,
    text: massege,
    attachments: [          // use URL as an attachment
      {   // file on disk as an attachment
        filename: filename +"."+typeOfFile,
        path: path
      }
    ]

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

//sendEmail('36213259948@mby.co.il', "I love you", "How are you?")
module.exports = sendEmail;
// https://support.google.com/mail/answer/185833?hl=iw
