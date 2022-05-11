const { prisma } = require(".prisma/client");

const newUser = (req, res, next) => {
  const allUsers = await prisma.user.findMany()

  res.json({message: "POST new user", users: allUsers});
};

module.exports = {newUser};