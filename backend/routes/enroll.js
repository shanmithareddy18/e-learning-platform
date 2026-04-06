const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/:courseId", async (req, res) => {
  const { userId } = req.body;
  const courseId = Number(req.params.courseId);

  const user = await User.findById(userId);

  if (!user.enrolledCourses.includes(courseId)) {
    user.enrolledCourses.push(courseId);
    await user.save();
  }

  res.json(user);
});

module.exports = router;