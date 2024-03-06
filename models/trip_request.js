'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tripRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tripRequest.hasMany(models.requestUser , {
        foreignKey: 'request_trip_id'
      })
    }
  }
  tripRequest.init({
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
    }
  }, {
    sequelize,
    modelName: 'tripRequest',
    tableName: 'trip_requests',
    timestamps:true
  });
  return tripRequest;
};