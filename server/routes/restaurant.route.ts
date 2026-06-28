import express from "express";
import { createRestaurant } from "../controller/restaurant.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = express.Router();

router.route("/").post(isAuthenticated, createRestaurant);

export default router;
