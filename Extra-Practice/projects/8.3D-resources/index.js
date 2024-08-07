const express = require('express');
const path = require('path');
const app = express();

// Import JSON data
const jsonIcecreamTypeData = require('./data/icecreamtypes.json');
const jsonCommentData = require('./data/comments.json');
const jsonUserData = require('./data/users.json');

app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route handlers
app.get('/', (req, res) => {
    res.render('index', { title: 'Ice Cream Review' });
});

app.get('/users', (req, res) => {
    res.json(jsonUserData);
});

app.get('/icecreamtypes', (req, res) => {
    res.json(jsonIcecreamTypeData);
});

app.get('/comments', (req, res) => {
    res.json(jsonCommentData);
});

app.get('/feedback', (req, res) => {
    res.render('list', {
      title: 'User Feedback',
      types: jsonIcecreamTypeData.icecreamtypes,
      comments: jsonCommentData.comments,
      users: jsonUserData.users
    });
  });
  
// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
