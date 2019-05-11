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
        "customerName": "",
        "phoneNumber": "",
        "customerEmail": "",
        "customerID": ""
        },
        {
        "customerName": "",
        "phoneNumber": "",
        "customerEmail": "",
        "customerID": ""
        },
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
        tables.push(req.body);
        res.json(req.body);
    },
    
    clear: function(req,res){
        console.log(req);
        res.send("clear");
    }
} 

module.exports = ApiController