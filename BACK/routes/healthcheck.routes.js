import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";

const router = Router();
// route: /api/v1/healthcheck

router.route("/").get(healthCheck);

export default router;
