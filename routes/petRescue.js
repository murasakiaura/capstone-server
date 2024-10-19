const express = require('express');
const petRescueController = require('../controllers/petRescueController');
const router = express.Router();

router.get('/listings', petRescueController.fetchPetListings);

module.exports = router;