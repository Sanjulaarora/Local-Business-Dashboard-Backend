import express from "express";
import businessRoutes from "../controllers/business/index.js"

const router = express.Router();

// Routes for business dashboard
router.use("/business", businessRoutes);

export default router;