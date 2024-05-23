const express = require("express");
let router = express.Router();
let Userinfo = require("../../models/students");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const jwtSecret = "mynameisalinicetomeetyou";

router.get("/list", async function(req, res) {
    try {
        let student = await Userinfo.find();
        res.render("student", { student: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 

// Route for signing up a new user
router.post('/signup', [
    // Validate user input
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 2 }).withMessage('Password must be at least 2 characters long'),
    body('confirmPassword').isLength({ min: 2 }).withMessage('Confirm password must be at least 2 characters long')
    .custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const user = await Userinfo.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // Generate hash for password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create user in database
        await Userinfo.create({
            email: req.body.email,
            password: hashedPassword,  // Use the hashed password
            confirmPassword: hashedPassword // Ensure this matches for now, but ideally you shouldn't store confirmPassword
        });

        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

router.get('/signup', (req, res) => {
    res.render("signup", { layout: true });
});

module.exports = router;
