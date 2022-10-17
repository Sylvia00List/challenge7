'use strict';
const { Model } = require('sequelize');
const { users } = require('./index');
module.exports = (sequelize, DataTypes) => {
	class userdata extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.users);
		}
	}
	userdata.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'userdata',
		}
	);

	return userdata;
};
