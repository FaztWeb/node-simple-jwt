import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Index Page");
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

export default router;
