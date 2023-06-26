const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;// Change the port number if needed
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser')
const { urlencoded } = require('body-parser')
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// ----------EJS-----------//
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


// Set up your routes
app.use('/',require('./routes'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
