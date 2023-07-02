var mongoose = require('mongoose');

var StreamerSchema = mongoose.Schema({
  name: String,
  platform: String,
  description: String,
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Streamer', StreamerSchema);
