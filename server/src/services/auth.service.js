const bcrypt = require('bcrypt');
const { pool } = require('../config/db');
const { findByEmail } = require('./user.service');


module.exports.register = async (user) => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(user.Password, salt)
  await pool.execute('INSERT INTO users(UserName, Gender, DateOfBirth, Image, Email, Password) VALUES (?,?,?,?,?,?)', [user.UserName, user.Gender, user.DateOfBirth, user.Image, user.Email, hashPassword])
  return {
    status: 201,
    message: "Dang ky tai khoan thanh cong."
  }
}

module.exports.login = async (res, user) => {
  const findUser = await findByEmail(user.Email)
  if (!user) {
    return res.status(400).json({
      status: 400,
      message: 'Email nhap vao khong dung.'
    })
  } else {
    const comparePassword = bcrypt.compareSync(user.Password, findUser.Password)
    if (!comparePassword) {
      return res.status(400).json({
        status: 400,
        message: 'Mat khau nhap vao khong dung.'
      })
    } else {
      return res.status(200).json({
        status: 200,
        message: 'Dang nhap thanh cong',
        data: findUser
      })
    }
  }
}