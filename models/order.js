const {Schema, model} = require('mongoose');
const Joi = require('joi');
const {handleMongooseError} = require('../helpers');

const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
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
    required: [true, 'TotalSum is required'],
  },
  order: [{
    _id: { type: Schema.Types.ObjectId },
    name: { type: String},
    price: { type: Number},
    quantity: { type: Number},
    shop: { type: String }
  }]
}, {versionKey: false, timestamps: true})

const Order = model('order', orderSchema);
orderSchema.post('save', handleMongooseError);

const orderSchemaJoi = Joi.object({
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

const searchOrdersSchemaJoi = Joi.object({
  email: Joi.string(),
  phone: Joi.string(),
}).options({ abortEarly: false });

module.exports = {
  Order,
  orderSchemaJoi,
  searchOrdersSchemaJoi
}