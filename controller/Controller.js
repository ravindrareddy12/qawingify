// loginController.js

// Simulated user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more user objects as needed
  ];
  
  // Login route handler
  module.exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    // Find the user by username and check the password
    const user = users.find((u) => u.username === username);
  
    if (!user || user.password !== password) {
      // Invalid credentials
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    // Successful login
    return res.render('home')
  };

module.exports.loginForm = async (req,res) =>{
  return res.render('LoginForm')
}
  