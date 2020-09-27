require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routerNavigation = require("./src");
const socket = require("socket.io");
const { getMessageChat, sendMessage } = require("./src/model/message");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("uploads"));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", routerNavigation);

app.get("*", (request, response) => {
  response.status(404).send("Path Not Found !");
});

const http = require("http");
const server = http.createServer(app);
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Socket.io Connect !");

  socket.on("globalMessage", (data) => {
    io.emit("chatMessage", data);
  });

  socket.on("privateMessage", (data) => {
    socket.emit("chatMessage", data);
  });

  socket.on("broadcastMessage", (data) => {
    socket.broadcast.emit("chatMessage", data);
  });

  socket.on("welcomeMessage", (data) => {
    socket.emit("chatMessage", {
      user: { user_nickname: "BOT" },
      message: `Welcome Back ${data.user.user_nickname}`,
    });
    // gLOBAL
    // socket.broadcast.emit("chatMessage", {
    //   username: "BOT",
    //   message: `${data} joined the chat`,
    // });
    // ssppessiiffiik
    socket.join(data.room);
    socket.broadcast.to(data.room).emit("chatMessage", {
      user: { user_nickname: "BOT" },
      message: `${data.user.user_nickname} joined the chat`,
    });
  });

  socket.on("getMessage", async (data) => {
    socket.join(data.user.user_id + "-" + data.target.user_id);
    socket.join(data.target.user_id + "-" + data.user.user_id);
    const result = await getMessageChat(data.user.user_id, data.target.user_id);
    console.log(result[0].message_sender);
    result.forEach((item) => {
      setData = {
        user: {
          user_id: item.message_sender,
          user_nickname: item.message_sender,
        },
        message: item.message_chat,
        room: data.target.user_id + "-" + data.user.user_id,
      };

      io.to(data.user.user_id + "-" + data.target.user_id).emit(
        "chatMessage",
        setData
      );
    });
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typingMessage", data);
  });

  socket.on("postMessage", async (data) => {
    // io.to(data.room).emit("chatMessage", data);
    console.log("message " + data.message);
    const setData = {
      message_sender: data.user.user_id,
      message_receiver: data.target.user_id,
      message_chat: data.message,
      message_created_at: new Date(),
      message_status: 1,
    };
    const result = await sendMessage(setData);
  });
});

server.listen(process.env.PORT, process.env.IP, () => {
  console.log(
    `Express app is listening on host: ${process.env.IP} and port: ${process.env.PORT}`
  );
});
