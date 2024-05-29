const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const router = express.Router();

router.get('/signin', (req, res) => res.render('signin'));
router.get('/signup', (req, res) => res.render('signup'));

router.post('/signup', [
  check('email').isEmail().withMessage('Enter a valid email'),
  check('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters'),
  check('confirm').custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.redirect('/user/register/signin');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.render('signin', { error: 'Invalid email or password' });
    }
    req.session.userId = user._id;
    req.session.authenticated = true;
    res.redirect('/');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
