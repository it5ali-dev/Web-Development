const express = require('express');
const { check, validationResult } = require('express-validator');
const Product = require('../models/Products'); // Adjust the path if needed
const router = express.Router();

// Route to handle product creation
router.post('/create', [
    check('name').notEmpty().withMessage('Name is required'),
    check('description').notEmpty().withMessage('Description is required'),
    check('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    check('category').notEmpty().withMessage('Category is required')
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { name, description, price, category, isFeatured } = req.body;
  
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      isFeatured: isFeatured || false
    });
  
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error('Error saving product:', err);
      res.status(500).send('Server error');
    }
  });

  // router.get('/:id', async (req, res) => {
  //   try {
  //     const product = await Product.findById(req.params.id);
  //     if (!product) {
  //       return res.status(404).send('Product not found');
  //     }
  //     res.render('productDetail', { product });
  //   } catch (err) {
  //     console.error('Error fetching product:', err);
  //     res.status(500).send('Server error');
  //   }
  // });

module.exports = router;
