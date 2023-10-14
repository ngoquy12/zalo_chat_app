const pool = require('../config/db')


module.exports.findByEmail = async (email) => {
  try {
    const [[user]] = await pool.execute('SELECT * FROM users WHERE Email = ?', [email])
    return user
  } catch (error) {
    console.log(error);
  }
}