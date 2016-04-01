"use strict";

var router = require('express').Router();
var path   = require('path');
var models = require( path.join(__dirname, '..', 'models') );


router.get( '/', function( request, response ) {
	response.json( { message: "Welcome to the API!" } );
})

router.route( '/songs' )

	.post( function( req, res ) {

		var song = models.Song.build();

		song.title    = req.body.title;
		song.year     = req.body.year;
		song.genre    = req.body.genre;
		song.AuthorId = req.body.AuthorId;

		song.save()
		.then( function( ) {
			res.json( { message: 'Song inserted into the db!', song: song })
		})
		.catch( function( err ) {
			console.err( err );
			res.json( { message: err.toString() })
		});

	})

	.get( function( req, res ) {

		models.Song.findAll()
		.then( function( result ) {
			res.json( result );
		})
		.catch( function( err ) {
			res.json( { message: err.toString() })
		})

	});


router.route( '/songs/:song_id' )

	.get( function( req, res ) {

		models.Song.findById( req.params.song_id )
		.then( function( result ) {
			res.json( result );
		})
		.catch( function( err ) {
			res.json( { message: err.toString() })
		})

	})

	.put( function( req, res ) {

		models.Song.findById( req.params.song_id )
		.then( function( song ) {
			
			song.title    = req.body.title;
			song.year     = req.body.year;
			song.genre    = req.body.genre;
			song.AuthorId = req.body.AuthorId;

			console.log( req.body );
			
			song.save()
			.then( function() {
				res.json( { message: 'Song updated!' });
			})
			.catch( function( err ) {
				res.json( { message: err.toString() } );
			});

		})
		.catch( function( err ) {
			console.log( err );
			res.json( { message: err.toString() })
		})

	})

	.delete( function( req, res ) {

		models.Song.findById( req.params.song_id )
		.then( function( song ) {
			
			song.destroy()
			.then( function() {
				res.json( { message: 'Song deleted!' })
			})
			.catch( function( err ) {
				console.log( err );
				res.json( { message: err.toString() })
			})

		})
		.catch( function( err ) {
			console.log( err );
			//res.status(500).end();
			res.json( { message: err.toString() })
		})

	})


router.route( '/authors' )

	.post( function( req, res ) {

		var author = models.Author.build();

		author.name = req.body.name;

		author.save()
		.then( function( ) {
			res.json( { message: 'Author inserted into the db!', author: author })
		})
		.catch( function(err) {
			console.err( err );
			res.json( { message: err.toString() })
		});

	})

	.get( function( req, res ) {

		models.Author.findAll()
		.then( function( result ) {
			res.json( result );
		})
		.catch( function( err ) {
			res.json( { message: err.toString() })
		})

	});


router.route( '/authors/:author_id' )

	.get( function( req, res ) {

		models.Author.findById( req.params.author_id )
		.then( function( result ) {
			res.json( result );
		})
		.catch( function( err ) {
			res.json( { message: err.toString() })
		})

	})

	.put( function( req, res ) {

		console.log( req );

		models.Author.findById( req.params.author_id )
		.then( function( author ) {
			
			author.name = req.body.name;
			
			author.save()
			.then( function() {
				res.json( { message: 'Author updated!' });
			})
			.catch( function( err ) {
				res.json( { message: err.toString() } );
			});

		})
		.catch( function( err ) {
			console.log( err );
			res.json( { message: err.toString() })
		})

	})

	.delete( function( req, res ) {

		models.Author.findById( req.params.author_id )
		.then( function( author ) {
			
			author.destroy()
			.then( function() {
				res.json( { message: 'Author deleted!' })
			})
			.catch( function( err ) {
				console.log( err );
				res.json( { message: err.toString() })
			})

		})
		.catch( function( err ) {
			console.log( err );
			//res.status(500).end();
			res.json( { message: err.toString() })
		})

	})


module.exports = router;