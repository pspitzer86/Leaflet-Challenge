// Store our url inside variable

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Perform a GET request to the query URL

d3.json(url, function(data) {

    // Once we get a response, send the data.features object to the createFeatures function

    console.log(data);

    //createFeatures(data.features);
  });
  