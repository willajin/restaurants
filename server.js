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
// Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page 
// ROUTES
// ============================================================
// homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserves.html"));
});

//  user visits localhost:3000/api/tables they should see a JSON of table data
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
//  user visits localhost:3000/api/tables they should see a JSON of waitlist data
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});


// Create New Characters - takes in JSON input
app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORTS " + PORT);
});
