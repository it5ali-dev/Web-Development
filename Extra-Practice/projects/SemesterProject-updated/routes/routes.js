
const express = require("express");
const router = express.Router();
const path = require("path");


// router.get('/', (req, res) => {
//     res.render("home");
// });

// router.use('/api', require(path.join(__dirname, './api/student')));
// // Error handling middleware
// router.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

// Define your routes
router.get('/', (req, res) => {
    res.render("home", { authenticated: req.session.authenticated || false });
});

router.get('/login', (req, res) => {
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