const express = require("express");
const petRescueController = require("../controllers/petRescueController");
const router = express.Router();
const app = express();

router.get("/listings", petRescueController.fetchPetListings);

module.exports = router;
