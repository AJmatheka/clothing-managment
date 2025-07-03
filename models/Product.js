const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  sizes: [String], // e.g., ["S", "M", "L"]
  imageUrl: String,
  category: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
