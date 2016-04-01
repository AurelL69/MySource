"use strict";

var app = angular.module('ngApp', ["ngFlash"]);

app.controller('SongController', ['$rootScope', '$scope', '$http', 'Flash', function ($rootScope, $scope, $http, Flash){

	// Afficher tous les titres //
	$http.get('/api/songs')
		.then(function(response) {

		    $scope.songs = response.data;

		})
	    .catch(function(err){

	        console.log(err);

	    });

	
	// var refreshSong = function () {
	//     $http.get('/api/songs')
	// 		.then(function( response ) {
		    	
	// 	    	$scope.songs = response.data;
			
	// 		})
	//     	.catch(function( err ){
	        
	//         	console.log( err );
	    	
	//     	});
	// };

	// $scope.$watchCollection('songs', function() {
	// 	console.log('watch here');
	// 	//refreshSong();
	// });
	
	var flash = function(message) {
		Flash.create('success', message);
	}

	// Ajouter un titre //
	$scope.addSong = function(response) {
		
		$http.post('/api/songs', $scope.song)
			.then(function(response) {
			    
			    $scope.songs.push( response.data.song );
			    console.log(response.data);
			    flash(response.data.message);
			
			})
			.catch(function(err){
			
				console.log(err);
			
			});
	};

	// Editer un titre //
	$scope.editSong = function(id) {
    	
    	console.log(id);
    	
    	$http.get('/api/songs/' + id)
    		.then(function(response) {
    			
    			$scope.song = response.data;
    			
    		
    		})
    		.catch(function(err) {
			
				console.log(err);
			
			});
    };

    // Modifier un titre //
    $scope.updateSong = function() {

    	console.log($scope.song.id);

    	$http.put('/api/songs/' + $scope.song.id, $scope.song)
    		.then(function(response){
    			//$scope.song = response.data;
    			flash(response.data.message);	
    			for ( var i in $scope.songs ) {
    				
    				if ( $scope.songs[i].id == $scope.song.id ) {
    					
    					angular.copy( $scope.song, $scope.songs[i] );
    					break;

    				}
    			
    			}

    			console.log(response.data);
    			
    		})
    		.catch(function(err) {
			
			    console.log(err);
			
			});
    };

    
    $scope.deselectSong = function() {

    	$scope.song = "";
    };

    
    $scope.removeSong = function(id) {
    	
    	console.log(id);
    	
    	$http.delete('/api/songs/' + id)
    		.then(function(response){
    			
    			console.log(response.data);
    			flash(response.data.message);
    			for ( var i in $scope.songs ) {

    				if ( $scope.songs[i].id == id ) {
    					
    					$scope.songs.splice(i, 1);
    					
    					break;
    				
    				}
    			
    			}


    		})
    		.catch(function(err) {
			    
			    console.log(err);

			});
    };


 //    $scopeAlert1 = function () {

	//     var message = '<strong>Le titre a bien été ajouté</strong>';
	//     var id = Flash.create('then', message);
	// };

	// $scope.thenAlert2 = function () {

	//     var message = '<strongLe titre a bien été modifié</strong>';
	//     var id = Flash.create('then', message);
	// };

	// $scope.thenAlert3 = function () {

	//     var message = '<strong>Le titre a bien été supprimé !</strong>';
	//     var id = Flash.create('then', message);
	// };

	
}]);



app.controller('AuthorController', ['$rootScope','$scope', '$http','Flash', function ($rootScope, $scope, $http, Flash){

	// Afficher tous les auteurs //	

		$http.get('/api/authors')
			.then(function(response) {
			    
			    $rootScope.authors = response.data;
			    // console.log("Liste des auteurs",$rootScope.authors);
			
			})
		    .catch(function(err){
		        
		        console.log(err);

		    });

	// $scope.refreshAuthor = function () {

	//     $http.get('/api/authors')
	// 		.then(function(response) {
		    	
	// 	    	$scope.authors = response.data;
			
	// 		})
	//     	.catch(function(err){
	        	
	//         	console.log(err);
	    	
	//     	});
	// };
	

	var flash = function(message) {
		Flash.create('success', message);
	}


	// Ajouter un auteur //
	$scope.addAuthor = function(response) {
		
		$http.post('/api/authors', $scope.author)
			.then(function(response) {
			    
			    $rootScope.authors.push(response.data.author);
			    console.log(response.data.author);
			    flash(response.data.message);        	
			
			})
			.catch(function(err){
			    
			    console.log(err);
			
			});
	};

	// Editer un titre //
	$scope.editAuthor = function(id) {
    	
    	console.log(id);
    	
    	$http.get('/api/authors/' + id)
    		.then(function(response){

    			$scope.author = response.data;

    		})
    		.catch(function(err) {
				
				console.log(err);

			});
    };

    // Modifier un titre //
    $scope.updateAuthor = function() {

    	console.log($scope.author.id);

    	$http.put('/api/authors/' + $scope.author.id, $scope.author)
    		.then(function(response){

    			console.log(response.data);
    			flash(response.data.message);

    			for ( var i in $rootScope.authors ) {

    				if ( $rootScope.authors[i].id == $scope.author.id ) {

    					angular.copy( $scope.author, $rootScope.authors[i] );
    					break;

    				}

    			}

    			
    		})
    		.catch(function(err) {
	
			    console.log(err);
	
			});
    };


    $scope.deselectAuthor = function() {

    	$scope.author = "";
    };


    $scope.removeAuthor = function(id) {
    	
    	console.log(id);
    	
    	$http.delete('/api/authors/' + id)
    		.then(function(response){
    			
    			console.log(response.data);
    			flash(response.data.message);

    			for ( var i in $rootScope.authors ) {

    				if ( $rootScope.authors[i].id == id ) {

    					$rootScope.authors.splice(i, 1);

    				}

    			}
    		
    		})
    		.catch(function(err) {
			    
			    console.log(err);
			
			});
    };

 //    $scope.thenAlert4 = function () {

	//     var message = '<strong>Le chanteur a bien été ajouté</strong>';
	//     var id = Flash.create('then', message);
	// };

	// $scope.thenAlert5 = function () {

	//     var message = '<strongLe chanteur a bien été modifié</strong>';
	//     var id = Flash.create('then', message);
	// };

	// $scope.thenAlert6 = function () {

	//     var message = '<strong>Le chanteur a bien été supprimé !</strong>';
	//     var id = Flash.create('then', message);
	// };

	
}]);