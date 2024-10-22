const knex = require("../db/knex");

const getPetListings = async () => {
  return knex("pets").select("*");
};

module.exports = {
  getPetListings,
};
