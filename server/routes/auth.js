import express from "express";

const router = express.Router();

router.post("/auth/register", (req, res) => {
  res.send("Register user",req.body);
});

export default router;
