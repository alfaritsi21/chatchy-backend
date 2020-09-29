const router = require("express").Router();
const upload = require("../middleware/multer");
const { authorization } = require("../middleware/auth");

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
router.post("/search/usernickname", authorization, searchUserNickName);
router.post("/search/userphone", authorization, searchUserPhone);

router.patch("/activation/:id", userActivation);
router.patch("/:id", upload, editUser);
router.patch("/password/reset", resetPassword);

router.delete("/:id", authorization, deleteUser);

module.exports = router;
