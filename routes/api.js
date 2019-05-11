var express=require("express")
var router = express.Router();

router.get("/waitlist",function(req,res){
  console.log(req);
  res.send("waiting list");
});

router.get("/tables",function(req,res){
  console.log(req);
  res.send("avalible tables");
});

router.get("/clear",function(req,res){
  console.log(req);
  res.send("clear");
});

module.exports = router;