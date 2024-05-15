router.post('/login', [
    // Validate user input
    body('email').isEmail(),
    body('passwords').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await Userinfo.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'User doesnot exist' }] });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(req.body.passwords, user.passwords);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Password is wrong' }] });
        }

        // Set authenticated to true in session
        req.session.authenticated = true;

        // Create and return JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            //res.json({ success: true, token });
            res.redirect('/');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});
router.get('/login', (req, res) => {
    
    res.render('login',{layout:false}); 
  });
  router.get('/logout', (req, res) => {
    req.session.authenticated = false;
    res.redirect("/")
  });