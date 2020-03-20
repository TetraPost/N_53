/* Mongoose */
const mongoose = require('mongoose');

const userSchemeList = {
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
};

const { Schema } = mongoose;
const userScheme = new Schema(userSchemeList);

module.exports = mongoose.model('User', userScheme);
