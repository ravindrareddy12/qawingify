const mongoose = require('mongoose')

// Define the user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the Item model based on the user schema
const User = mongoose.model('users', UserSchema);

// Export the User model
module.exports = User;