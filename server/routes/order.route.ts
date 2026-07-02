import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { getOrders, stripeWebhook } from "../controller/order.controller";
const router = express.Router();

router.route("/").get(isAuthenticated, getOrders);
router.route("/webhook").post(express.raw({type: 'application/json'}), stripeWebhook);

export default router;
