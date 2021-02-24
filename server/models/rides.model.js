const mongoose = require('mongoose');

const RidesSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  miles: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('Rides', RidesSchema);
