const { Order } = require('../models/order');
const { controlWrapper, HttpError } = require('../helpers');

const getAllOrdersByPhoneOrEmail = async (req, res) => {
    const { phone, email } = req.query;
    let orders;

    if (!phone && !email) {
        throw HttpError(400, 'Phone or email is required');
    }
    if (phone && email) {
        throw HttpError(400, 'Phone or email is required, not both');
    }
    
    if (phone) {
        orders = await Order.find({ phone });
        if (orders.length === 0) {
            throw HttpError(404, 'Order not found');
        }
    }
    
    if (email) {
        orders = await Order.find({ email });
        if (orders.length === 0) {
            throw HttpError(404, 'Order not found');
        }
    }
    
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