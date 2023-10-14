const pool = require("../config/db");

module.exports.getMessageByRoom = async (res, id) => {
  try {
    const [messages] = await pool.execute(
      "SELECT * FROM messages WHERE RoomId = ?",
      [id]
    );

    return res.status(200).json({
      status: 200,
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};
