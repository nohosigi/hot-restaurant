var HtmlController = {
    index: function(req,res){
        console.log(req);
        res.send("you are on the homepage");
    },
    
    tables: function (req,res){
        console.log(req);
        res.send("you are on the tables page");
    },
    
    reserve: function(req,res){
        console.log(req);
        res.send("you are on the reservation page");
    }   
} 

module.exports = HtmlController

