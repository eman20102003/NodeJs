const express = require("express");
const router = express.Router();
const userController = require("../controllers");
const auth = require("../middlewares/auth.middleware")


router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/",auth, userController.getAllUsers);
router.get("/:id",auth, userController.getUserById);
router.put("/:id",auth, userController.updateUser);
router.delete("/:id",auth, userController.deleteUser);

module.exports = router;
