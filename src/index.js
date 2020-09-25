const route = require("express").Router();

// const register = require("./routes/auth/register");

// route.use("/register", register);

const user = require("./routes/user");
const message = require("./routes/message");

route.use("/user", user);
route.use("/message", message);

module.exports = route;
