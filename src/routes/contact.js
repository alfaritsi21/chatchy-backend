const router = require("express").Router();
const upload = require("../middleware/multer");
const { authorization } = require("../middleware/auth");

const {
  getContact,
  deleteUserContact,
  addContact,
} = require("../controller/contact");

router.get("/:id", getContact);
router.post("/delete", deleteUserContact);

router.post("/addcontact", addContact);

module.exports = router;
