var express=require("express")
var router = express.Router();
var controller = require("../controllers/api")

router.get("/waitlist",controller.waitlist)

router.get("/tables",controller.getTables);
router.post("/tables",controller.postTables);


router.get("/clear",controller.clear);

module.exports = router;