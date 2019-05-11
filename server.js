var express=require("express")
var router = express.Router();
var app = express()

app.use (express.json())
app.use (express.urlencoded({extended: true}));

var PORT = 8080;

app.use("/", router);
app.use("/api", router)

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

router.get("/api/waitlist",function(req,res){
    console.log(req);
    res.send("waiting list");
});

router.get("/api/tables",function(req,res){
    console.log(req);
    res.send("avalible tables");
});

router.get("/api/clear",function(req,res){
    console.log(req);
    res.send("clear");
});




app.listen(PORT,function(){
    console.log(`Server listening on ${PORT}`);
});

