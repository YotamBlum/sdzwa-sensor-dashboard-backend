const {PrismaClient} = require('@prisma/client');
const {user} = new PrismaClient();
const crypto = require('crypto');

// Create new user
const newUser = async (req, res) => {
    // Get user inputs
    const { first_name, last_name, email, password } = req.body;
    // Validate user inputs - potential for security sanitization...
    if (!(email & password && first_name && last_name)) {
        res.status(400).send(`All input is required ${email} ${password} ${first_name} ${last_name}`);
    }

    const userExists = await user.findUnique(
        { where: { email: email },
        select: { email: true} }
    );

    if(userExists) {
        return res.status(409).send("User Already Exists.");
    }

    salt = crypto.randomBytes(16).toString('hex');
    encryptedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    const newUser = await user.create({
        data: {
            firstName: first_name,
            lastName: last_name,
            email: email,
            password: encryptedPassword,
            salt: salt,
        }
    });

    const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    newUser.token = token;

    res.status(201).json(newUser);
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(400).send("All input is required");
    }

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

module.exports = {newUser, loginUser};