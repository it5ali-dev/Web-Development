const express = require('express');
const { check, validationResult } = require('express-validator');
const Profile = require('../models/Profile');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/signin');
  }
  next();
};

router.get('/createProfile', isAuthenticated, (req, res) => res.render('createProfile'));

router.post('/create', isAuthenticated, [
  check('firstName').notEmpty().withMessage('First Name is required'),
  // Add other validators
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('createProfile', { errors: errors.array() });
  }

  const profileData = { ...req.body, userId: req.session.userId };
  const profile = new Profile(profileData);

  profile.save().then(() => {
    res.redirect('/profile');
  }).catch(err => res.status(500).send('Server error'));
});

router.get('/', isAuthenticated, async (req, res) => {
  const profiles = await Profile.find({ userId: { $ne: req.session.userId } });
  res.render('profiles', { profiles });
});

module.exports = router;
