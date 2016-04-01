"use strict";

// importation des dépendences
var express    = require('express');
var http       = require('http');
var path       = require('path');
var logger     = require('morgan');
var bodyParser = require('body-parser');

// instantiation de l'application Express
var app = express();
// configuration de l'application Express
app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'ejs' );

// app.listen(process.env.PORT || 5000)

// middleware
app.use( logger('dev') );
app.use( express.static( path.join(__dirname, 'public') ) );
app.use( express.static( path.join(__dirname, 'bower_components') ) );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );


// routes
app.use( '/', require( path.join(__dirname, 'routes', 'routes.js') ) );
// app.use( '/api', require( path.join(__dirname, 'routes', 'api.js') ) );



// instantiation du serveur web
var server = http.createServer( app ).listen(5000);

 console.log('Server running at http://127.0.0.1:5000/');


// démarrage du serveur web
// server.listen(port);
// server.on('listening', function() {
//   console.log( 'Web server listening on port ' + port + '...' );
// } )