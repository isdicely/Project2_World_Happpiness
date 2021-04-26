// Created Empty Lists to push values to
var country_list = [];

var uni_country_list = [];

// Created default selector to be able to click through different options
var country_name = d3.select("#selCountry")

country_name
  .append("option")
  .property("value", "")
  .text("Select Country")

// Loading in data
d3.csv("TOTAL_2019_2020.csv").then(function (data) {
  // console.log("data")
  // console.log(data)
  // Looping through to get country names
  var country_list = data.map(x => x["Country"])
  // Making sure countries list was created correctly
  console.log("Country List:", country_list)

  // Sorting ountries by alphabetical order
  country_list.sort()

  // Deleting out duplicate country name for 2020 in the selector
  country_list.map((name) => {
    if (uni_country_list.indexOf(name) === -1) {
      uni_country_list.push(name)
    }
  });  

  // Appending country names as options in the selector
  uni_country_list.map((name) => {
    country_name
      .append("option")
      .property("value", name)
      .text(name)

  });
});


// Selecting the country and year
function optionCountry(cname) {
  console.log("cname")
  console.log(cname)

  d3.csv("TOTAL_2019_2020.csv").then(function (data) {
    // console.log("data")
    // console.log(data)
  
    filtered_country = data.filter(x => x["Country"] == cname )
    console.log("filtered_country")
    console.log(filtered_country)


    filtered_country.map((d) => {
      console.log("Year")
      console.log(d.Year)
    });  
  });

}