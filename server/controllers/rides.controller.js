const Joi = require('joi');
const Rides = require('../models/rides.model');

const ridesSchema = Joi.object({
  date: Joi.string().required(),
  miles: Joi.string().required(),
})

module.exports = {
  insert
}

async function insert(ride) {
  ride = await Joi.validate(ride, ridesSchema, { abortEarly: false });
  return await new Rides(ride).save();
}
