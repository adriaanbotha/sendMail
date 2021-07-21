const PublicService = require('./PublicService');

describe('PublicService test', () => {

  // TODO: For the below to continually working we need to update our license with Sendgrid and Mailgun for
  //       now it works since we have enabled sandbox mode for Sendgrid and have test tries left on Mailgun
  //       but this can stop working any moment
  describe('sendMail integration tests', () => {
    jest.setTimeout(30000);
    test('emailBody should have the required fields', async () => {
      const res = await PublicService.sendMail({
        mail_settings: {
          sandbox_mode: {
            enable: true
          }
        }})
      expect(new Error(res).message).toContain('Error: Provide at least one of to, cc or bcc')
    })
    test('should call Mailgun email with minimum basic email details', async () => {
      const emailBody = {
        "to": "Your name <adriaan.botha@gmail.com>",
        "from": "bosotter@protonmail.com",
        "subject": "Test Email",
        "html": "<p>This is a test email from Sendgrid or MailGun</p>",
        "text": "This is a test email from Sendgrid or MailGun"
      }
      const res = await PublicService.sendMail(emailBody)
      expect(res.id).not.toBeUndefined()
    })
    test('should call Sendgrid email with minimum basic email details', async () => {
      const emailBody = {
        "to": "Your name <adriaan.botha@gmail.com>",
        "from": "bosotter@protonmail.com",
        "cc": ["Adriaan <hichrist@protonmail.com>"],
        "bcc": ["Adriaan <a.d.riaan.botha@gmail.com>"],
        "subject": "Test Email",
        "html": "<p>This is a test email from Sendgrid or MailGun</p>",
        "text": "This is a test email from Sendgrid or MailGun",
        mail_settings: {
          sandbox_mode: {
            enable: true
          }
        }
      }
      const res = await PublicService.sendMail(emailBody)
      expect(res.id).toBeUndefined()
    })
  })

})
