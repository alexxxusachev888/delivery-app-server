const {Schema, model} = require('mongoose');
const Joi = require('joi');
const {handleMongooseError} = require('../helpers');

const burgerSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  shop: {
    type: String,
  },
  quantity: {
    type: Number,
  }
}, {versionKey: false, timestamps: true})

const Burger = model('burger', burgerSchema);

const burgerSchemaJoi = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  shop: Joi.string().required(),
  quantity: Joi.number().required(),
}).options({ abortEarly: false });

module.exports = {
    Burger,
    burgerSchemaJoi
}