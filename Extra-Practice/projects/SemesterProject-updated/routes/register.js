const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const Userinfo = require("../../models/userModel");
// last part of the json web token that will be secret
const jwtSecret = "mynameisalinicetomeetyou";

// Route for signing up a new user
router.post('/signup', [
    // Validate user input
    body('email').isEmail(),
    body('passwords').isLength({ min: 5 }),
    body('confirmPassword').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    //const user = await Userinfo.findOne({ email: req.body.email });
    

    try {
        const user = await Userinfo.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exist' }] });
        }
        else{
        // Generate hash for password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.passwords, salt);

        // Create user in database
        await Userinfo.create({
            email: req.body.email,
            password: hashedPassword,
            confirmPassword: req.body.email
        });

        //res.json({ success: true });
        res.redirect('/login');
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: true, message: 'Server Error' });
    }
});

router.get('/signup',(req,res)=>{
    res.render("/signup",{layout: true});
    })

