'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
up: async (queryInterface, Sequelize) => {
options.tableName = "Users";
return queryInterface.bulkInsert(
  options,
  [
    {
      id: 1,
      ownerId: 1,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      createdAt: "2021-11-19 20:39:36",
      updatedAt: "2021-11-19 20:39:36",
      avgRating: 4.5,
      previewImage: "image url",
    },
  ],
  {}
);
  },

down: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: { [Op.in]: ["App Academy"] },
      },
      {}
    );
  }
};