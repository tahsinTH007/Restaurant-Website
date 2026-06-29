import express from "express";
import { createRestaurant, getRestaurant } from "../controller/restaurant.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import upload from "../middlewares/multer";

const router = express.Router();

router
  .route("/")
  .post(isAuthenticated, upload.single("imageFile"), createRestaurant);
router.route("/").get(isAuthenticated, getRestaurant);

export default router;
