'use strict';

const sgMail = require('@sendgrid/mail');
// const mailgun = require("mailgun-js");

const API_KEY = '7e1e06fb21aa4553e60ff32e50f75ea8-c485922e-49118b18';
const DOMAIN = 'sandbox9fd50e4ed6d64dff99aa02eb76b5c9a1.mailgun.org';

// const API_KEY = process.env.MAILGUN_API_KEY;
// const DOMAIN = process.env.MAILGUN_DOMAIN;
const mgMail = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

/**
 * send an email
 * Sends an email with Mailgun or Sendgrid as backup
 *
 * Email body to send (optional)
 * no response value expected for this operation
 **/
const sendMail = async function (emailBody)  {

  let result = {};
  try {
    try {
      // Only try to send once according to specifications
      // TODO: refactor try catch pyramid to better pattern but since it is being used once
      //       through out the code this is considered not to be an anti pattern
      result = await sendMailgunEmail(emailBody)
    }
    catch (err) {
      console.log('running SendgridMail now................');
      console.log('inside first catch-----');
      // When Mailgun email fails use Sendgrid as a backup
      result = await sendGridMail(emailBody)
    }
  }
  catch (error) {
    console.error('Inside second catch-----------------', error);
    return error
  }
  console.log('-.....----....----.....', result);
  return result
}

const sendGridMail = async (emailBody) => {
  return await sgMail.send(emailBody)
}

const sendMailgunEmail = async (emailBody) => {
  return await mgMail.messages().send(emailBody);
}

module.exports = { sendMail, sendGridMail, sendMailgunEmail };
