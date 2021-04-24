var countryLL = []
var capList = []
var latList = []
var longList = []

d3.csv("Country_Table.csv").then(function(data) {

    console.log("Lat Long Data:" , data);

    var countryLLA = data.map(function(latLoCountry){
        return latLoCountry["Country"]
    });

    var capListA = data.map(function(latLoCountry){
        return latLoCountry["Capital"]
    });

    var latListA = data.map(function(latLoCountry){
        return latLoCountry["Latitude"]
    });

    var lonListA = data.map(function(latLoCountry){
        return latLoCountry["Longitude"]
    });

    console.log("Lat. Long. Country List:" , countryLLA);
    console.log("Capital List:" , capListA);
    console.log("Latitude:" , latListA);
    console.log("Longitude:" , lonListA);

    countryLL.push(countryLLA)
    capList.push(capListA)
    latList.push(latListA)
    longList.push(lonListA)

});