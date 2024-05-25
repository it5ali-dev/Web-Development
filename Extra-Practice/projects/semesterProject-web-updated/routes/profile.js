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
router.get('/createProfile', isAuthenticated, (req, res) => {
  res.render('createProfile');
});

// Route to handle profile creation
router.post('/createProfile', isAuthenticated, [
  check('firstName').notEmpty().withMessage('First Name is required'),
  check('lastName').notEmpty().withMessage('Last Name is required'),
  check('profile').notEmpty().withMessage('Profile type is required'),
  check('dateOfBirth').isDate().withMessage('Valid Date of Birth is required'),
  check('height').isNumeric().withMessage('Height must be a number'),
  check('status').notEmpty().withMessage('Marital Status is required'),
  check('language').notEmpty().withMessage('Language is required'),
  check('religion').notEmpty().withMessage('Religion is required'),
  check('occupation').notEmpty().withMessage('Occupation is required'),
  check('pinCode').notEmpty().withMessage('Pin Code is required'),
  check('age').isNumeric().withMessage('Age must be a number'),
  check('phoneNumber').notEmpty().withMessage('Phone Number is required'),
  check('address').notEmpty().withMessage('Address is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.render('createProfile', { errors: errors.array(), formData: req.body });
  }

  const profileData = { ...req.body, userId: req.session.userId };
  const profile = new Profile(profileData);

  try {
    await profile.save();
    console.log('Profile saved:', profile);
    res.redirect('/profiles');
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).send('Server error');
  }
});

// Route to fetch and display profiles
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const profiles = await Profile.find({ userId: { $ne: req.session.userId } });
    res.render('profiles', { profiles });
  } catch (err) {
    console.error('Error fetching profiles:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
