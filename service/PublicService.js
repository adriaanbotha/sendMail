'use strict';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * send an email
 * Sends an email with Mailgun or Sendgrid
 *
 * Email body to send (optional)
 * no response value expected for this operation
 **/
exports.sendMail = async function (emailBody)  {
  try {
    await sendGridMail(emailBody)
  }
  catch (e) {
    console.error(e)
  }
}

const sendGridMail = async (emailBody) => {
  return await sgMail.send(emailBody)
}

