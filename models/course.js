'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    
    get formatedDate(){
      return this.createdAt.toLocaleDateString('id-ID',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    }
   

    static associate(models) {
      // define association here
      Course.belongsTo(models.Category, {foreignKey: 'CategoryId'})
      Course.belongsToMany(models.User, {through: models.UserCourse,foreignKey: 'CourseId'})
    }
  }
  Course.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};