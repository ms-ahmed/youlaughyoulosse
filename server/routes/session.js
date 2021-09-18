const express = require("express");
const app = express();
router = express.Router();
router.get("/", (req, res) => res.send("session"));
module.exports = router;
