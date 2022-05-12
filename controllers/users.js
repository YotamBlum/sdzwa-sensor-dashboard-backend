const { prisma } = require(".prisma/client");

const newUser = (req, res, next) => {

  res.json({message: "POST new user"});
};


module.exports = {newUser};