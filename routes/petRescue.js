const express = require("express");
const petRescueController = require("../controllers/petRescueController");
const router = express.Router();

router.get("/listings", petRescueController.fetchPetListings);
router.get("/pet/:id", petRescueController.fetchPetById);

module.exports = router;
