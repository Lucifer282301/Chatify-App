import express from "express";
import {
  signupController,
  loginController,
  logoutController,
  updateProfileController,
} from "../controllers/authControllers.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

router.put("/update-profile", protectRoute, updateProfileController);

router.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user)
);

export default router;
