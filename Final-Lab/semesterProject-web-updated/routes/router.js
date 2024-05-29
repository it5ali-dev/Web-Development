
const express = require("express");
const router = express.Router();
const path = require("path");
const Profile = require('../models/Profile');
const Product = require('../models/Products');

const isAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect('/signin');
    }
    next();
  };

// middleware/trackVisitedProducts.js
const trackVisitedProducts = (req, res, next) => {
  // Check if the request URL matches the product route pattern
  if (req.url.startsWith('/products/') && req.url.split('/').length === 3) {
    // Extract product ID from the URL
    const productId = req.url.split('/')[2];
    // Initialize visitedProducts array in session if not exists
    req.session.visitedProducts = req.session.visitedProducts || [];
    // Add product ID to visitedProducts array
    req.session.visitedProducts.push(productId);
  }
  next();
};

router.use(trackVisitedProducts)

// router.get('/',async (req, res) => {
//     try {
//       let profiles = await Profile.find();
//       // Pagination settings
//       let page = parseInt(req.query.page) || 1;
//       let limit = 10; // Number of profiles per page
//       let totalPages = Math.ceil(profiles.length / limit);
      
//       // Slice profiles array for pagination
//       profiles = profiles.slice((page - 1) * limit, page * limit);
      
//       res.render('home', { profiles, page, totalPages });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Server Error');
//     }
//   });

router.get('/', async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).limit(5);
    res.render('./partials/featured', { products: featuredProducts });
  } catch (err) {
    console.error('Error fetching featured products:', err);
    res.status(500).send('Server error');
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('./partials/productDetail', { product });
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).send('Server error');
  }
});

// Route to display visited products
router.get('/visited-products', (req, res) => {
  // Get visited products from session
  const visitedProducts = req.session.visitedProducts || [];
  // Render the EJS template with visited products
  res.render('visited-products', { visitedProducts });
});

// router.use('/api', require(path.join(__dirname, './api/student')));
// Error handling middleware
// router.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

//Define your routes
// router.get('/', (req, res) => {
//     res.render("home", { authenticated: req.session.authenticated || false });
// });
router.use('/user/register',require(path.join(__dirname,'./auth/auth')))

router.use('/user/profile',require(path.join(__dirname,'./profile')))

router.use('/product',require(path.join(__dirname,'./product')))

router.get('/profiles', (req, res) => {
    // res.render("signin",{layout:false});
    res.render("profiles");
});

router.get('/createProfile', (req, res) => {
    // res.render("signin",{layout:false});
    res.render("create");
});

router.get('/login', (req, res) => {
    // res.render("signin",{layout:false});
    res.render("signin");
});
router.get('/register', (req, res) => {
    res.render("signup");
});
router.get('/logout', (req, res) => {
    req.session.authenticated = null;
    res.redirect("/")
  });



module.exports = router;