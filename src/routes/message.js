const router = require("express").Router();
const upload = require("../middleware/multer");
const { authorization } = require("../middleware/auth");

const {
  getMessageChat,
  sendMessage,
  deleteMessage,
  searchMessage,
} = require("../controller/message");

router.get("/", authorization, getMessageChat);

router.post("/chat", authorization, sendMessage);
router.post("/search", authorization, searchMessage);

router.delete("/delete/:id", authorization, deleteMessage);

module.exports = router;
