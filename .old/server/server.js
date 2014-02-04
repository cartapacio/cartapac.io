// DEPENDENCIES
// ============

var Config =  global.Config = require('./config/config.js').config;
    express = require("express"),
    http =    require("http"),
    port =    ( process.env.PORT || Config.listenPort ),
    server =  module.exports = express(),
    API =     require('./API');

// SERVER CONFIGURATION
// ====================

server.configure(function() {

  server.use(express["static"](__dirname + "/../public"));

  server.use(express.errorHandler({

    dumpExceptions: true,

    showStack: true

  }));

  server.use(express.bodyParser());

  server.use(express.cookieParser());

  server.use(express.session({ secret: Config.sessionSecret }));

  server.use(server.router);

});

// API
// ===

API.api(server);

// Start Node.js Server
http.createServer(server).listen(port);

console.log('\n\nWelcome to Stacked!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Backbone.js\n\n');
