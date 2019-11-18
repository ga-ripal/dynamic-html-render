const express = require("express");
const router = express.Router();

router.use("/", require("./email.route"));

module.exports = router;
