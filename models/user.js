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
      User.hasOne(models.roleUser , {
        foreignKey : 'user_id',
        as: 'roleUser',
        sourceKey: 'id'
      });

      User.hasMany(models.tripUser , {
        foreignKey : 'user_id'
      })

      User.hasMany(models.requestUser , {
        foreignKey : 'user_id'
      })

      User.hasMany(models.tripDriver , {
        foreignKey : 'driver_id'
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password : {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  });
  return User;
};