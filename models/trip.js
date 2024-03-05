'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trip.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    source: {
      allowNull: false,
      type: DataTypes.STRING
    },
    destination: {
      allowNull: false,
      type: DataTypes.STRING
    },
    timeSlot: {
      allowNull: false,
      type: DataTypes.TIME
    },
    date : {
      allowNull: false,
      type: DataTypes.DATE
    },
    price :{
      allowNull: false,
      type: DataTypes.DOUBLE
    }
  }, {
    sequelize,
    modelName: 'Trip',
    tableName: 'trips',
    timestamps: true
  });
  return Trip;
};