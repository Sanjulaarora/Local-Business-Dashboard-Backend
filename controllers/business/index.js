import express from "express";
import { BusinessData, RegenerateHeadline } from "./businessController.js";

const router = express.Router();

// Routes for business dashboard
router.post("/business-data", BusinessData);
router.get("/regenerate-headline", RegenerateHeadline);

export default router;