const router = require("express").Router();
const upload = require("../middleware/multer");

const {
  getMessageChat,
  sendMessage,
  deleteMessage,
  searchMessage,
} = require("../controller/message");

router.get("/", getMessageChat);

router.post("/chat", sendMessage);
router.post("/search", searchMessage);

router.delete("/delete/:id", deleteMessage);

module.exports = router;
