var express          = require('express'),
    googleMapsClient = require('@google/maps').createClient({key: 'AIzaSyBeoWZMKngeM25LbCEa1fFW5c__B6TvJ8c'});
    
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
var latitude = '17.385044';
var longitude = '78.486671';
var location = {lat:17.385044, lng:78.486671}

app.get("/", function(req,res) {
    googleMapsClient.placesNearby({location: location, radius:500,type:'restaurant'}, function(err, response) {
        if(err) {
            console.log(err);
        } else {
            //if(response.status === 200) {
                console.log(response.results[0]);
            //}
            console.log(response);
            res.send("Hello World");
        }
    });
    res.send("Hello World")
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Fetch Nearby App has started");
});