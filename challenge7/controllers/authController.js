const jwt = require('jsonwebtoken');
const {user} = require('../models');


const authController = {
    login:(req, res) => {
        const {username, password} = req.body;
        const secretKey = 'mysecret';
        users
        .authenticate(username, password)
        .then((result) => {
             const token = jwt.sign({
               username: result.username,
               userId: result.id 
             },  secretKey,
             );
          });
              res.json ({
                token: token
        
    })
          
              .catch((err) => {
               res.json({
                  error: err.message,
                });
              });
            },
};
        
    
 module.exports = authController;
