const PublicService = require('./PublicService');
const sgMail = require('@sendgrid/mail');
const mgMail = require('mailgun-js')

const sendGridSandBoxMode = {
  mail_settings: {
    sandbox_mode: {
      enable: true
    }
  }
};
const testArray = [
  {
    "to": "Adriaan <hichrist@protonmail.com>",
    "from": "bosotter@protonmail.com",
    "subject": "Test Email",
    "html": "<p>This is a test email from Sendgrid or MailGun</p>",
    "text": "This is a test email from Sendgrid or MailGun"
  },
  {
    "to": "Your name <adriaan.botha@gmail.com>",
    "from": "bosotter@protonmail.com",
    "subject": "Test Email",
    "html": "<p>This is a test email from Sendgrid or MailGun</p>",
    "text": "This is a test email from Sendgrid or MailGun"
  },
  {
    "to": "Your name <adriaan.botha@gmail.com>",
    "from": "bosotter@protonmail.com",
    "cc": "Adriaan <hichrist@protonmail.com>",
    "bcc": "Adriaan <a.d.riaan.botha@gmail.com>",
    "subject": "Test Email",
    "html": "<p>This is a test email from Sendgrid or MailGun</p>",
    "text": "This is a test email from Sendgrid or MailGun"
  },
  {
    "to": "Your name <adriaan.botha@gmail.com>",
    "from": "bosotter@protonmail.com",
    "cc": "Adriaan <hichrist@protonmail.com>",
    "bcc": "Adriaan <a.d.riaan.botha@gmail.com>",
    "subject": "Test Email",
    "html": "<p>This is a test email from Sendgrid or MailGun</p>",
    "text": "This is a test email from Sendgrid or MailGun"
  }]

describe('PublicService test', () => {
  describe('sendMail Unit tests', () => {
    test('sendGridMail should be called', async () => {
      sgMail.send = jest.fn()
      const spy = jest.spyOn(sgMail, 'send');
      const result = await PublicService.sendGridMail({...sendGridSandBoxMode})
      expect(spy).toHaveBeenCalled();
      spy.mockClear()
    })
    // TODO Mock mailgun email below before we remove skip
    test.skip('sendMailgunEmail should be called', async () => {
      jest.mock('mailgun-js')
      const spy = jest.spyOn(mgMail, 'send');
      const result = await PublicService.sendMailgunEmail({...sendGridSandBoxMode})
      expect(spy).toHaveBeenCalled();
      spy.mockClear()
    })
  })
  describe('sendGridMail', () => {
    test('should be called with all types of email formats', async () => {
      testArray.forEach(async (item) => {
        let result = await PublicService.sendGridMail({...item, sendGridSandBoxMode})
      })
    })
  })
  describe('sendMailgunEmail', () => {
    // TODO although the below test runs through email scenarios it is flaky since we get credential problems, let's replace this
    test('should be called with all types of email formats', async () => {
      testArray.forEach(async (item) => {
        try {
          let result = await PublicService.sendMailgunEmail({...item})
        }
        catch (e) {
          expect(new Error(e).message).toContain('Error: exposed account credentials')
        }

      })
    })
  })
})
