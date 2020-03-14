function createMap(Restaurant) {

  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "Restaurants": Restaurant
  };

  // Create the map object with options
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [lightmap, Restaurant]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

// THIS IS WHERE WE'RE UPDATING STUFF
function createMarkers(response) {

  // Pull data off of response.data
  var rest = response.data;

  // Initialize an array to hold bike markers
  var restaurantMarkers = [];

  // Loop through the stations array
  for (var index = 0; index < rest.length; index++) {
    var restaurantthing = rest[index];

    // For each station, create a marker and bind a popup with the station's name
    var restMarker = L.marker([data.Latitude, data.Longitude])
      .bindPopup("<h3>" + restaurantthing.Name + "<h3><h3>Cuisine: " + restaurantthing.Cuisine + "<h3><h3>Grade: " + restaurantthing.Grade);

    // Add the marker to the bikeMarkers array
    restaurantMarkers.push(restMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(restaurantMarkers));
}


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.json("http://127.0.0.1:5000/c", createMarkers);
