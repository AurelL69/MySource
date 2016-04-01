"use strict";

var router = require('express').Router();


router.get( '/', function( request, response ) {
	response.render( 'index.ejs', { 'titre': 'Budapest Festival'} );
})


module.exports = router;