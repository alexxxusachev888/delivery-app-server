const { Order } = require('../models/order');
const { controlWrapper, HttpError } = require('../helpers');

const getAllOrdersByPhoneOrEmail = async (req, res) => {
    const { searchQuery } = req.query;

    if (!searchQuery) {
        throw HttpError(400, 'Phone or email is required');
    }
    
    const orders = await Order.find({
        $or: [
            { email: searchQuery },
            { phone: searchQuery },
        ]
    });

    if (orders.length === 0) {
        return res.json([]);
    }
    console.log(orders)
    res.json({ orders });
}

const addNewOrder = async (req, res) => {
    const newOrder = await Order.create(req.body);
    res.status(201).json({newOrder});
}

module.exports = {
    getAllOrdersByPhoneOrEmail: controlWrapper(getAllOrdersByPhoneOrEmail),
    addNewOrder: controlWrapper(addNewOrder)
}