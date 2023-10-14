const express = require("express");
const PORT = 8080;
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Sử dụng thư viện bên ngoài
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import các router
const authRouter = require("./routers/auth.routes");
const roomRouter = require("./routers/room.routes");
const chatRouter = require("./routers/chat.routes");

// Sử dụng các router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/chats", chatRouter);

// Lắng nghe cổng
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
