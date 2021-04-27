// Get data and display
d3.csv("/data/TOTAL_2019_2020_clean.csv").then(function (data) {
  console.log(data);
  //   Set Country dropdown menu
  const countryDropdownMenuSelection = d3.selectAll("#selCountry");
  const countryDropdownMenu = countryDropdownMenuSelection.node();
  const unique_countries = new Set(data.map((entry) => entry.Country));
  // Add an empty opt to start of the list
  const opt_all_countries = document.createElement("option");
  opt_all_countries.value = "";
  opt_all_countries.innerHTML = "---";
  countryDropdownMenu.appendChild(opt_all_countries);
  // Add opts for all contries to the dropdown menu
  [...unique_countries].sort().forEach((country) => {
    const opt = document.createElement("option");
    opt.value = country;
    opt.innerHTML = country;
    countryDropdownMenu.appendChild(opt);
  });
  console.log(countryDropdownMenu);

  //   List of all the keys for each country in the object
  const allDataKeys = Object.keys(data[0]);
  console.log(allDataKeys);

  //   Remove the keys we do not want to graph.
  //   This will leave us with an array of the labels we want to put in the bar graph
  const country_happiness_keys = allDataKeys.slice(4);
  console.log(country_happiness_keys);

  //   // USE THIS VALUE TO TEST GETTING THE DATA OUT OF THE OBJECT
  //   test_country_selected = "Mexico";

  //   Get country happiness values, for 2019 and 2020 in an object. Using a fuction to do this.
  // Only selecting the countries of of interest (country_happiness_keys)
  function getCountryValues() {
    //   Retrive selected county on dropdown menu
    const country_selected = countryDropdownMenu.value;
    console.log(country_selected);

    // Retrive the data for country selected
    const selected_country_information = data.filter(
      (entry) => entry.Country === country_selected
    );
    console.log(selected_country_information);

    //   Feeding an array for the years of interest to get an objet with two arrays
    // Each array is key:value equivalet to "year of interest":"values of interest defined in country_happiness_keys"
    const dataArrayByYears = ["2019", "2020"].map((year) => {
      const yearData = selected_country_information.find(
        (entry) => entry.Year === year
      );

      return [year, country_happiness_keys.map((key) => yearData[key])];
    });
    return Object.fromEntries(dataArrayByYears);
  }
    // Use function to make graphs.
    // Get data for 2019: grahing_data[2019]
    // Get data for 2020: grahing_data[2020]
    function makeBarCharts() {
        const graphing_data = getCountryValues();
        console.log(graphing_data);
        console.log(graphing_data[2019]);
        console.log(graphing_data[2020]);
    }


  // Create event handler, set on chage
  countryDropdownMenuSelection.on("input", makeBarCharts);
});
