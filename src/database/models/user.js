'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_name: DataTypes.STRING,
    pass_word: DataTypes.STRING,
    gender: DataTypes.ENUM('female', 'male'),
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};