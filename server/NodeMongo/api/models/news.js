const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String
  },
  url: {
    type: String
  },
  urlToImage: {
    type: String
  }
});
module.exports = mongoose.model("News", newsSchema);
