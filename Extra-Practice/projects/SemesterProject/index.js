
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const session = require("express-session");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let cookieParser = require("cookie-parser");

mongoose.connect("mongodb://127.0.0.1:27017/MernStarterCode", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected');
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
}).catch(err => console.log(err));


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
    next();
};

app.use(isAuthenticated);

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.static('public'));
app.use('/', require(path.join(__dirname, 'routes/routes.js')));
app.use(express.static(path.join(__dirname, "uploads")));
app.set('layout', 'layouts/base');
app.set('views', path.join(__dirname, 'views'));