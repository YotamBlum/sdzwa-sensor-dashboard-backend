const {PrismaClient} = require('@prisma/client');

const {user} = new PrismaClient();
const crypto = require('crypto');

// Create new user
const newUser = (req, res, next) => {
  const userExists = await user.findUnique({
        where: {
            email: req.body.email
        },
        select: {
            email: true
        }
    });
    if(userExists) {
        return res.status(400).json({
            msg: 'User already exists'
        });
    }

    var salt = crypto.randomBytes(16).toString('hex');

    const newUser = await user.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`),
            salt: salt,
        }
    });
  res.json({message: "POST new user"});
};

/* To check valid password
UserSchema.methods.validPassword = function(password) {

  var hash = crypto.pbkdf2Sync(password,
  this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
};

https://www.loginradius.com/blog/engineering/password-hashing-with-nodejs/
*/

module.exports = {newUser};