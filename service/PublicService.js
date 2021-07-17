'use strict';

/**
 * send an email
 * Sends an email with Mailgun or Sendgird
 *
 * Email body to send (optional)
 * no response value expected for this operation
 **/
exports.sendMail = function(emailBody) {
  return new Promise(function(resolve, reject) {
    console.log('sendMail->sendMail')

    resolve();
  });
}

