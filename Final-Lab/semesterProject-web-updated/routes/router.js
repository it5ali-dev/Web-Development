
const express = require("express");
const router = express.Router();
const path = require("path");
const Profile = require('../models/Profile');

const isAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect('/signin');
    }
    next();
  };
router.get('/',async (req, res) => {
    try {
      let profiles = await Profile.find();
      // Pagination settings
      let page = parseInt(req.query.page) || 1;
      let limit = 10; // Number of profiles per page
      let totalPages = Math.ceil(profiles.length / limit);
      
      // Slice profiles array for pagination
      profiles = profiles.slice((page - 1) * limit, page * limit);
      
      res.render('home', { profiles, page, totalPages });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
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