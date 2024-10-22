const knex = require("../db/knex");
const petRescueService = require("../services/petRescueService");

const fetchPetListings = async (req, res) => {
  try {
    const listings = await petRescueService.getPetListings();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pet listings" });
  }
};

const fetchPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await knex("pets").where("id", id).first();
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching pet details" });
  }
};

module.exports = {
  fetchPetListings,
  fetchPetById,
};
