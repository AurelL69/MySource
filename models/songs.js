'use strict';

module.exports = function(sequelize, DataTypes) {
	
	var Song = sequelize.define('Song',

		{
			
			title: 	{
						type: DataTypes.STRING
					},
			year:   {
						type: DataTypes.INTEGER
					},		
			genre:  {
						type: DataTypes.STRING
					}

		},
		{

			tablename: "song",

			classMethods: 
			{
			  associate: function( models ) {
			    // associations can be defined here
			    this.belongsTo( models.Author );
			  }
			}
		}

	);

	return Song;

};