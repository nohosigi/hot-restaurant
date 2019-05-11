var express=require("express")
var htmlRoutes = require("./routes/html");
var apiRoutes = require("./routes/api");

var app = express()

app.use (express.json())
app.use (express.urlencoded({extended: true}));

var PORT = 8080;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT,function(){
    console.log(`Server listening on ${PORT}`);
});

