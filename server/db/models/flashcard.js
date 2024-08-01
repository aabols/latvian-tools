const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model { };

  Flashcard.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUIDV4,
      defaultValue: sequelize.UUIDV4,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Flashcard',
    defaultScope: {
      attributes: ['id', 'caption']
    }
  })

  return Flashcard;
};
