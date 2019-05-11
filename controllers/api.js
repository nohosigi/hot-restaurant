
let numTables = 5;
let tables = [
    {
    "customerName": "tyrion lannister",
    "phoneNumber": "9999999999",
    "customerEmail": "tl@money.com",
    "customerID": "1"
    }
];

let waitlist = [
        {
        "customerName": "Samuel",
        "phoneNumber": "Fillingim",
        "customerEmail": "mememe@me.com",
        "customerID": "1"
        }
];

var ApiController = {
    waitlist: function(req,res){
        res.json(waitlist);
    },
    
    getTables: function (req,res){
        res.json(tables);
    },

    postTables: function (req,res){
        const newCustomer = req.body;
        if(tables.length <= numTables){
            tables.push(newCustomer);
        }else{
            waitlist.push(newCustomer);
        }

        res.json(req.body);
    },
    
    clear: function(req,res){
        tables.splice(0, 1);
        if(waitlist.length){
            tables.push(waitlist.shift());
        }
        res.send("cleared table");
    }
} 

module.exports = ApiController