var express = require('express');
var app = express();
var PORT_TO_LISTEN = 3000;

app.set("view engine","ejs");

var nearbyPlaces = [
    {
        name: "Charminar",
        image: "http://www.culturalindia.net/iliimages/Charminar-ili-45-img-4.jpg"
    },
    {
        name: "Birla Mandir",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/f3/ea/93/birla-mandir-in-hyderabad.jpg"
    }
];

app.get("/", function(req,res) {
    res.render("home",{places:nearbyPlaces});
});

app.listen(PORT_TO_LISTEN, function() {
    console.log("Fetch Nearby App has started listening on port "+PORT_TO_LISTEN);
});