const router = require("express").Router();
const registerUser = require("../../controller/auth/register");

router.post("/", registerUser);

module.exports = router;
