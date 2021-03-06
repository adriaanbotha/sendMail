# sendMail
A repository for sending email using mailgun and sendgrid email

## Cloud Deployment
Heroku cloud is used to deploy the node.js REST API with Swagger UI

_NB: The GIT repository used for deployment on Heroku is hosted on Heroku_

_The reason for this is to deploy the Mailgun and Sendgrid API keys and keep it safe_

*The repository for viewing the code is hosted on Github without the Mailgun and Sendgrid keys* [https://github.com/adriaanbotha/sendMail](https://github.com/adriaanbotha/sendMail)




#### Calling the API through Swagger UI

[https://blooming-fjord-80542.herokuapp.com/docs](https://blooming-fjord-80542.herokuapp.com/docs)

**Follow these steps to run the API inside Swagger**

1. Expand the Swagger UI to look like this

![Expand the Swagger UI to look like this](/assets/img/swag1 "Swagger UI")
&nbsp;
&nbsp;

2. Push the Try It Button
![Push the Try It Button](/assets/img/pushTryIt.png "Try it")
&nbsp;
&nbsp;

3. Change the object inside the email box
![Change the object inside the email box](/assets/img/changeEmailText.png "Try it")
&nbsp;
&nbsp;

4. Push Execute
![Push Execute](/assets/img/pushExecute.png "Try it")
&nbsp;
&nbsp;


#### Calling the API with a Curl example (Please exchange with your details)

```
curl -X POST "http://blooming-fjord-80542.herokuapp.com/v1/sendmail" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"to\": \"Adriaan <hichrist@protonmail.com>\", \"from\": \"bosotter@protonmail.com\", \"subject\": \"Test Email\", \"html\": \"<p>This is a test email from Sendgrid or MailGun</p>\", \"text\": \"This is a test email from Sendgrid or MailGun\"}"
```

# Swagger generated server

## Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.

### Running the server
To run the server locally, run:

```
npm run dev
```

To run tests:
```
npm run test
```


To view the Swagger UI interface:

```
open https://blooming-fjord-80542.herokuapp.com/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.

