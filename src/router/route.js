const express = require("express");
const router = express.Router();
const {
  createUser,
  userLongin,
  getUserById,
  userUpdate,
} = require("../controller/userController");
const { validUser, validUpdate } = require("../validation/validator");
const {createProduct} = require("../controller/produtController")

const middl = require("../middleware/auth");

router.post("/register", validUser, createUser);
router.post("/login", userLongin);
router.get("/user/:userId/profile", middl.authentication, getUserById);
router.put(
  "/user/:userId/profile",
  middl.authentication,
  middl.autherization,
  validUpdate,
  userUpdate
);

router.post ("/products", createProduct)

module.exports = router;
