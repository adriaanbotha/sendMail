'use strict';

var utils = require('../utils/writer.js');
var Public = require('../service/PublicService');

module.exports.sendMail = function sendMail (req, res) {
  var emailBody = req.swagger.params['emailBody'].value;
  Public.sendMail(emailBody)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


