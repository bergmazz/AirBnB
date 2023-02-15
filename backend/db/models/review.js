'use strict';
const {
  Model
} = require( 'sequelize' );

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
          Review.belongsTo( models.User, {
                foreignKey: "userId"
          } );
          Review.belongsTo( models.Spot, {
                foreignKey: "spotId", onDelete: "CASCADE"
          } );
      //  Review.hasMany(models.ReviewImage, {
      //    foreignKey: "reviewId",
      //    onDelete: "cascade",
      //    hooks: true,
      //  });
    }
  }
  Review.init(
    {
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      review: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
              max: 5,
              min: 1,
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    }
  );
  return Review;
};
