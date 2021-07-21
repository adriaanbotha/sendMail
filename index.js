'use strict';

var fs = require('fs'),
  path = require('path'),
  http = require('http');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.PORT || 80;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('\nWhen running on blooming-fjord-80542.herokuapp.com..........')
    console.log('Your server is listening on port %d (http://blooming-fjord-80542.herokuapp.com)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://blooming-fjord-80542.herokuapp.com/docs', serverPort);
    console.log('\nWhen running on localhost..........')
    console.log('Locally Your server is listening on port %d (http://localhost:80)', serverPort, serverPort);
    console.log('Locally Swagger-ui is available on http://localhost:80/docs', serverPort);
  });

});
