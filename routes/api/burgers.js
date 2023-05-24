const express = require('express');
const router = express.Router();
const { getAllBurgers } = require('../../controllers/burgers');


router.get('/', getAllBurgers);

module.exports = router;