import express from "express";
import {
  register,
  verifyOtp,
  resendOtp,
  login,
  forgotPassword,
  verifyResetOtp,
  resetPassword,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Registration flow
router.post("/auth/register", register);
router.post("/auth/verify-otp", verifyOtp);
router.post("/auth/resend-otp", resendOtp);

// Login
router.post("/auth/login", login);

// Forgot / reset password flow
router.post("/auth/forgot-password", forgotPassword);
router.post("/auth/verify-reset-otp", verifyResetOtp);
router.post("/auth/reset-password", resetPassword);

// Protected
router.get("/auth/me", protect, getMe);

export default router;
