'use strict';

module.exports = function(sequelize, DataTypes) {
	
	var Author = sequelize.define('Author',

		{
		
			name: 	{
						type: DataTypes.STRING
					}

		},
		{
			tablename: "author",

			classMethods: 
			{
			  associate: function( models ) {
			    // associations can be defined here
			    this.hasMany( models.Song );
			  }
			}
		}

	);

	return Author;

};