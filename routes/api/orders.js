const express = require('express');
const router = express.Router();
const { getAllOrdersByPhoneOrEmail, addNewOrder } = require('../../controllers/orders');


router.get('/', getAllOrdersByPhoneOrEmail);
router.post('/', addNewOrder);

module.exports = router;