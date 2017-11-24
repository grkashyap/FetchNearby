var express = require('express');
var app = express();
var PORT_TO_LISTEN = 3000;

app.set("view engine","ejs")

app.get("/", function(req,res) {
    res.render("home");
});

app.listen(PORT_TO_LISTEN, function() {
    console.log("Fetch Nearby App has started listening on port "+PORT_TO_LISTEN);
});