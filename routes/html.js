var express=require("express")
var router = express.Router();

router.get("/",function(req,res){
  console.log(req);
  res.send("you are on the homepage");
});

router.get("/tables",function(req,res){
  console.log(req);
  res.send("you are on the tables page");
});

router.get("/reserve",function(req,res){
  console.log(req);
  res.send("you are on the reservation page");
});

module.exports = router;