const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
