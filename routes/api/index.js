const router = require("express").Router();
const userRoutes = require("./users");
const sessionRoutes = require("./sessions");
const benchmarkRoutes = require("./benchmarks");

// Book routes
router.use("/users", userRoutes);
router.use("/sessions", sessionRoutes);
router.use("/benchmarks", benchmarkRoutes);

module.exports = router;
