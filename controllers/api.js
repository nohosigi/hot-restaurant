var ApiController = {
    waitlist: function(req,res){
        console.log(req);
  res.send("waiting list");
},

    
    getTables: function (req,res){
        console.log(req);
        res.send("avalible tables");
    },

    postTables: function (req,res){
        console.log(req);
        res.send("create tables");
    },
    
    clear: function(req,res){
        console.log(req);
        res.send("clear");
    }
} 

module.exports = ApiController