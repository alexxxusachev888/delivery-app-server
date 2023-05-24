const {Schema, model} = require('mongoose');
const Joi = require('joi');
const {handleMangooseError} = require('../helpers');

const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name password for user'],
  },
  phone: {
    type: String,
    required: [true, 'Phone password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  totalSum: { 
    type: Number,
    required: [true, 'TotlaSum is required'],
  }
})

const Order = model('order', orderSchema);

const contactSchemaJoi = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  totalSum: Joi.number().required(),
  order: Joi.array().items(
    Joi.object({
      _id: Joi.string().required(),
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
      shop: Joi.string().required()
    })
  )
}).options({ abortEarly: false });

module.exports = {
  Order,
  contactSchemaJoi
}