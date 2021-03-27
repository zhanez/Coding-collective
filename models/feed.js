const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const feedSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Feed =mongoose.model("Feed", feedSchema);

module.exports = Feed;
