'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    get formatedDate(){
      return this.createdAt.toLocaleDateString('id-ID',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    }
   
    static associate(models) {
     
      Category.hasMany(models.Course, {foreignKey: 'CategoryId'})
    }
  }
  Category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};