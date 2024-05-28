const express = require('express');
const { check, validationResult } = require('express-validator');
const Profile = require('../models/Profile');
const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/signin');
  }
  next();
};

// Route to render the create profile page
router.get('/createProfile', isAuthenticated, async (req, res) => {
  let profiles = await Profile.find();
  res.render('createProfile');
});
// POST method to handle profile creation
router.post('/createProfile', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.redirect('/'); // Redirect to a page displaying all profiles
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).send('Server error');
  }
});

// // Route to handle profile creation
// router.post('/createProfile', isAuthenticated, [
//   check('firstName').notEmpty().withMessage('First Name is required'),
//   check('lastName').notEmpty().withMessage('Last Name is required'),
//   check('profile').notEmpty().withMessage('Profile type is required'),
//   check('dateOfBirth').isDate().withMessage('Valid Date of Birth is required'),
//   check('height').isNumeric().withMessage('Height must be a number'),
//   check('status').notEmpty().withMessage('Marital Status is required'),
//   check('language').notEmpty().withMessage('Language is required'),
//   check('religion').notEmpty().withMessage('Religion is required'),
//   check('occupation').notEmpty().withMessage('Occupation is required'),
//   check('pinCode').notEmpty().withMessage('Pin Code is required'),
//   check('age').isNumeric().withMessage('Age must be a number'),
//   check('phoneNumber').notEmpty().withMessage('Phone Number is required'),
//   check('address').notEmpty().withMessage('Address is required')
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.render('createProfile', { errors: errors.array() });
//   }

//   const profileData = { ...req.body, userId: req.session.userId };
//   const profile = new Profile(profileData);

//   try {
//     await profile.save();
//     res.redirect('/profiles');
//   } catch (err) {
//     console.error('Error saving profile:', err);
//     res.status(500).send('Server error');
//   }
// });

// Route to fetch and display profiles
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const profiles = await Profile.find({ userId: { $ne: req.session.userId } });
    res.render('./.partials/profiles', { profiles });
  } catch (err) {
    console.error('Error fetching profiles:', err);
    res.status(500).send('Server error');
  }
});

// Get profiles with pagination
router.get('/home', async (req, res) => {
  try {
      const perPage = 5;
      const page = parseInt(req.query.page) || 1;

      const profiles = await Profile.find()
          .skip((perPage * page) - perPage)
          .limit(perPage)
          .exec();

      const count = await Profile.countDocuments();

      res.render('showProfile', {
          profiles,
          currentPage: page,
          totalPages: Math.ceil(count / perPage)
      });
  } catch (err) {
      res.status(500).send(err.message);
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
      const profile = await Profile.findById(req.params.id);
      res.render('profileDetails', { profile });
  } catch (err) {
      res.status(500).send(err.message);
  }
});

// router.get('/profile', async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) {
//       return res.status(404).send('Profile not found');
//     }
//     res.render('profileDetails', { profile });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

module.exports = router;
