import express from "express";
import {
    forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../controller/user.controller";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/verify-email").post(verifyEmail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);

export default router;
