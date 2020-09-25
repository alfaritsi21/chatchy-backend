const route = require("express").Router();

// const register = require("./routes/auth/register");

// route.use("/register", register);

const user = require("./routes/user");

route.use("/user", user);

module.exports = route;
