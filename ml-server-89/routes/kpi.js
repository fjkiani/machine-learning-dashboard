import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    //find data from database
    const kpis = await KPI.find();
    //if success, send kpi object to front-end
    res.status(200).json(kpis);
    console.log("🚀 ~ file: kpi.js:12 ~ router.get ~ 200:", 200)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
