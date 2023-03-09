'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  UserCourse.init({
    CourseId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};