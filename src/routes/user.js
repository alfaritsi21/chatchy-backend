const router = require("express").Router();
const upload = require("../middleware/multer");

const {
  registerUser,
  loginUser,
  userActivation,
  getUserById,
  searchUserName,
  searchUserNickName,
  searchUserPhone,
  editUser,
  deleteUser,
  resetPassword,
} = require("../controller/user");

router.get("/:id", getUserById);

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/search/username", searchUserName);
router.post("/search/usernickname", searchUserNickName);
router.post("/search/userphone", searchUserPhone);

router.patch("/activation/:id", userActivation);
router.patch("/:id", upload, editUser);
router.patch("/password/reset", resetPassword);

router.delete("/:id", deleteUser);

module.exports = router;
