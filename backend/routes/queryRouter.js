const express = require("express");
const router = express.Router();
const { handleOccupancyQuery } = require("../services/recommendationEngine");

router.post("/", async (req, res) => {
  try {
    const { query } = req.body;
    const result = await handleOccupancyQuery(query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
