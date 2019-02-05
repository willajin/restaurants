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
var reservations = [
    {
        name = "Ynah",
        seats = 2,
        date = "2/4/19",
        time = "19:00"
    },
    {
        name = "Willa",
        seats = 5,
        date = "2/14/19",
        time = "8:00"
    }
]
var waitlist = [
    {
        name = "Ynah",
        seats = 2,
        date = "2/4/19",
        time = "19:00"
    },
    {
        name = "Willa",
        seats = 5,
        date = "2/14/19",
        time = "8:00"
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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORTS " + PORT);
  });
  