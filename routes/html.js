var express=require("express")
var router = express.Router();
var controller = require("../controllers/html")
router.get("/",controller.index);

router.get("/tables",controller.tables);
  

router.get("/reserve",controller.reserve);
  

module.exports = router;