const { findByEmail } = require("../services/user.service")

module.exports.checkIsEmpty = (req, res, next) => {
  const { UserName, Email, Password } = req.body
  if (!UserName) {
    return res.status(400).json({
      status: 400,
      message: 'Ten khong duoc de trong'
    })
  }
  if (!Email) {
    return res.status(400).json({
      status: 400,
      message: 'Email khong duoc de trong'
    })
  }
  if (!Password) {
    return res.status(400).json({
      status: 400,
      message: 'Mat khau khong duoc de trong'
    })
  }

  next()
}

module.exports.findByEmail = async (req, res, next) => {
  const { Email } = req.body
  // Vao service lay email
  const email = await findByEmail(Email)
  if (email) {
    return res.status(400).json({
      status: 400,
      message: 'Email da ton tai'
    })
  }
  next()
}

module.exports.validateLogin = (req, res, next) => {
  const { Email, Password } = req.body
  if (!Email) {
    return res.status(400).json({
      status: 400,
      message: 'Email khong duoc de trong'
    })
  }
  if (!Password) {
    return res.status(400).json({
      status: 400,
      message: 'Mat khau khong duoc de trong'
    })
  }
  next()
}