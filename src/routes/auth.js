import { Router } from "express";
import {
  signinController,
  signupController,
  getProfile,
  logout,
} from "../controllers/authController";
import { verifyToken } from "../libs/verifyToken";

const router = Router();

router.post("/signup", signupController);

router.post("/signin", signinController);

router.get("/logout", logout);

router.get("/me", verifyToken, getProfile);

export default router;
