const router = require("express").Router();
const upload = require("../middleware/multer");
const { authorization } = require("../middleware/auth");

const { getContact } = require("../controller/contact");

router.get("/:id", getContact);

module.exports = router;
