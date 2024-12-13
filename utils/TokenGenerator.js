const jwt = require('jsonwebtoken');

function generateToken(user){
   return jwt.sign({
        id:user._id,
        email:user.email,
      }, process.env.SESSION_SECRET);
}


module.exports = generateToken;