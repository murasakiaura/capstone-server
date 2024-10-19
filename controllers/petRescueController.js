const petRescueService = require("../services/petRescueService");

const fetchPetListings = async (req, res) => {
  try {
    const filters = req.query;
    const listings = await petRescueService.getPetListings(filters);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch PetRescue listings" });
  }
};

module.exports = {
  fetchPetListings,
};
