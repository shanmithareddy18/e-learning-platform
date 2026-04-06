const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "React", description: "Learn React" },
    { id: 2, title: "Node", description: "Learn Node" }
  ]);
});

module.exports = router;