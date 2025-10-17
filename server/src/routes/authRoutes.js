import express from "express";
import {
  loginController,
  signupController,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);

router.get("/logout", (req, res) => {
  res.send("User logged out");
});

export default router;
