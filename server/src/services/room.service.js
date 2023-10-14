const pool = require("../config/db");

module.exports.createRoom = async (res, RoomName, CreatedByUserId) => {
  try {
    await pool.execute(
      "INSERT INTO rooms(RoomName, CreatedByUserId) VALUES (?,?)",
      [RoomName, CreatedByUserId]
    );

    return res.status(201).json({
      status: 201,
      message: "Tạo phòng chat thành công.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

module.exports.findRoomByName = async (RoomName) => {
  try {
    const [[room]] = await pool.execute(
      "SELECT * FROM rooms WHERE RoomName = ?",
      [RoomName]
    );

    return room;
  } catch (error) {
    return error;
  }
};

module.exports.getListRoomByUserId = async (res, id) => {
  try {
    const [room] = await pool.execute(
      "SELECT * FROM rooms WHERE CreatedByUserId = ?",
      [id]
    );

    return res.status(200).json({
      status: 200,
      data: room,
    });

    return room;
  } catch (error) {
    return error;
  }
};
