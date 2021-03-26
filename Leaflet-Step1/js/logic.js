// Store our url inside variable

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
  
// Create our map, giving it the streetmap and earthquakes layers to display on load
var myMap = L.map("mapid", {
center: [37.7749, -122.4194],
zoom: 8,
layers: [streetmap, earthquakes]
    });

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
    }).addTo(myMap);

    
// Perform a GET request to the query URL

d3.json(url, function(data) {

    console.log(data)

  });