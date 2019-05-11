var path = require("path");

var HtmlController = {
    index: function(req,res){
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    
    tables: function (req,res){
        console.log(req);
        res.sendFile(path.join(__dirname, "../views/tables.html"));
    },
    
    reserve: function(req,res){
        console.log(req);
        res.sendFile(path.join(__dirname, "../views/reserve.html"));
    }   
} 

module.exports = HtmlController

