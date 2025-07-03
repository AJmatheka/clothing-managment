
const express = require('express');
const router = express.Router(); // ✅ Define router first
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// POST with image upload
router.post('/upload', auth, upload.single('image'), async (req, res) => {
  try {
    const imageUrl = req.file.path;
    const { name, description, price, stock, sizes, category } = req.body;

    const product = new Product({
      name,
      description,
      price,
      stock,
      sizes: sizes.split(','), // e.g. "S,M,L"
      category,
      imageUrl,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading product' });
  }
});

module.exports = router;
