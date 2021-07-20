const PublicService = require('./PublicService');
const sgMail = require('@sendgrid/mail');

describe('PublicService test', () => {

  describe('sendMail Unit tests', () => {
    test('sendGridMail should be called', async () => {
      sgMail.send = jest.fn()
      const spy = jest.spyOn(sgMail, 'send');
      const result = await PublicService.sendGridMail({})
      expect(spy).toHaveBeenCalled();
      spy.mockClear()
    })
  //  TODO: Add more tests for mocking Mailgun
  })
})
