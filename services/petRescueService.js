const axios = require("axios");

const API_URL = "https://www.petrescue.com.au/api/listings";

const getPetListings = async (filters = {}) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching PetRescue listings:", error);
    throw error;
  }
};

module.exports = {
  getPetListings,
};
