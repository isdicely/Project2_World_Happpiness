//Testing out variables external to the Javascript
UnitedStatesHappiness = 100;

// Creating map object
var myMap = L.map("map", {
  //center: [49, -9],
  center:[48.926,9.002],
  zoomSnap:0.25,
  zoomDelta:0.25,
  zoom: 2.5

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


// Load in geojson data
//var geoData = "static/data/Median_Household_Income_2016.geojson";
var geoData = "static/data/countries.geojson";

var geojson;

// Grabbing geo data with d3
d3.json(geoData).then(function (data) {

  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    //valueProperty: "Pop_16", THIS NEEDS TO BE HAPPINESS RATING
    valueProperty: UnitedStatesHappiness,

    // Set color scale
    //NEED TO AJUST SCALE TO WHATEVER COLORS WE WANT BASED ON HAPPINESS RATING
    scale: ["#deebf7", "#3182bd"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#000000",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      //layer.bindPopup("Zip Code: " + feature.properties.ZIP + "<br>Population:<br>" + feature.properties.Pop_16);
      layer.bindPopup(feature.properties.ADMIN);
    }
  }).addTo(myMap);

  /*   // Set up the legend
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var limits = geojson.options.limits;
      var colors = geojson.options.colors;
      var labels = [];
  
      // Add min & max
      var legendInfo = "<h1>Population</h1>" +
        "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";
  
      div.innerHTML = legendInfo;
  
      limits.forEach(function(limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
      });
  
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
    }; */

  // Adding legend to the map
  legend.addTo(myMap);

});