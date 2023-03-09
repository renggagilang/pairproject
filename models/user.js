'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {foreignKey: 'UserId'})
      User.belongsToMany(models.Course, {through: models.UserCourse,foreignKey: 'UserId'})
    }
  }
  User.init({
    username:{
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: 'Please input username'
          }
      }
  },
    email: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: 'Please input email'
          }
      }
  },
    password: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: 'Please input pasword'
          }
      }
  },
    role: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: 'Please input role'
          }
      }
  },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
      }
    }
  });
  return User;
};