// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data
// DATA
// ============================================================
var tables = [
    {
        ID: 123,
        name: "Ynah",
        email: "ynah@test.com",
        phone: "123-456-7890"
    },
    {
        ID: 456,
        name: "Willa",
        email: "willa@test.com",
        phone: "123-456-7890"
    }
]
var waitlist = [
    {
        ID: 789,
        name: "Sammy",
        email: "sammy@test.com",
        phone: "123-456-7890"
    }
]
// ROUTES
// ============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//  user visits localhost:3000/api/tables they should see a JSON of table data
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
//  user visits localhost:3000/api/tables they should see a JSON of waitlist data
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});


// Create New Reservations- takes in JSON input
app.post("/api/reserves", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreserve = req.body;

    console.log(newreserve);

    //check if table available (5 tables)
    if (tables.length <= 5) {
        //add reservation to tables
        tables.push(newreserve);
    }
    else
    {
        //add to waitlist
        waitlist.push(newreserve);
    }
    res.json(newreserve);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORTS " + PORT);
});
