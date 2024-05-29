
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const port = 4001;
const path = require('path');
const session = require("express-session");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let cookieParser = require("cookie-parser");



// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/MatrimonyDB')
  .then(() => console.log('Database connected'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));



// app.set('views', path.join(__dirname, 'views'));


const { cookie }= require("express/lib/response");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "My secret key",
    saveUninitialized: true,
    resave: false
}));
// Middleware to set authenticated status
const isAuthenticated = (req, res, next) => {
  const authenticated = req.session.authenticated || false;
  res.locals.authenticated = authenticated;
  res.locals.user = req.user;
  next();
};

app.use(isAuthenticated);
// Static files


// Routes
// believe me i want to beat you right now why did you add a folder in routes no doubt this was going to fail
// app.use('/', require('./routes/auth'));
// app.use('/profile', require('./routes/profile'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));
app.use('/', require(path.join(__dirname, 'routes/router.js')));
app.use(express.static(path.join(__dirname, "uploads")));
app.set('layout', 'layouts/base');
