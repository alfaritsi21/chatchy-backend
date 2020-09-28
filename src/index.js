const route = require("express").Router();

// const register = require("./routes/auth/register");

// route.use("/register", register);

const user = require("./routes/user");
const message = require("./routes/message");
const contact = require("./routes/contact");

route.use("/user", user);
route.use("/message", message);
route.use("/contact", contact);

module.exports = route;
