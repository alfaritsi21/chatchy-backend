const router = require("express").Router();
const upload = require("../middleware/multer");
const { authorization } = require("../middleware/auth");

const { getContact, deleteUserContact } = require("../controller/contact");

router.get("/:id", getContact);
router.post("/delete", deleteUserContact);

module.exports = router;
