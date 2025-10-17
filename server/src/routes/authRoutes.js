import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("User signed up");
});
router.get("/login", (req, res) => {
  res.send("User logged in");
});
router.get("/logout", (req, res) => {
  res.send("User logged out");
});

export default router;
