const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bet extends Model {}

Bet.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    terms: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Not accepted'
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    challenger_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },

    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bet',
    timestamps: false
}
)

module.exports = Bet;
