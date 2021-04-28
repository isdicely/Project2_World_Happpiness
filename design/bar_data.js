graphingData2019 = []
graphingData2020 = []
graphingHeaders = []

// Get data and display
d3.csv("/data/TOTAL_2019_2020_clean.csv").then(function (data) {
  console.log(data);
  //   Set Country dropdown menu
  const countryDropdownMenuSelection = d3.selectAll("#selCountry");
  const countryDropdownMenu = countryDropdownMenuSelection.node();
  const uniqueCountries = new Set(data.map((entry) => entry.Country));
  // Add an empty opt to start of the list
  const optAllCountries = document.createElement("option");
  optAllCountries.value = "";
  optAllCountries.innerHTML = "---";
  countryDropdownMenu.appendChild(optAllCountries);
  // Add opts for all contries to the dropdown menu
  [...uniqueCountries].sort().forEach((country) => {
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
  const countryHappinessKeys = allDataKeys.slice(4);
  console.log(countryHappinessKeys);

  //   // USE THIS VALUE TO TEST GETTING THE DATA OUT OF THE OBJECT
  //   test_country_selected = "Mexico";

  //   Get country happiness values, for 2019 and 2020 in an object. Using a fuction to do this.
  // Only selecting the countries of of interest (country_happiness_keys)
  function getCountryValues() {
    //   Retrive selected county on dropdown menu
    const countrySelected = countryDropdownMenu.value;
    console.log(countrySelected);

    // Retrive the data for country selected
    const selectedCountryInformation = data.filter(
      (entry) => entry.Country === countrySelected
    );
    console.log(selectedCountryInformation);

    //   Feeding an array for the years of interest to get an objet with two arrays
    // Each array is key:value equivalet to "year of interest":"values of interest defined in country_happiness_keys"
    const dataArrayByYears = ["2019", "2020"].map((year) => {
      const yearData = selectedCountryInformation.find(
        (entry) => entry.Year === year
      );

      return [year, countryHappinessKeys.map((key) => yearData[key])];
    });
    return Object.fromEntries(dataArrayByYears);
  }
    // Populate function to make graphs.
    // Get data for 2019: grahing_data[2019]
    // Get data for 2020: grahing_data[2020]
    function makeBarCharts() {
        const graphingData = getCountryValues();
        console.log(graphingData);
        console.log(graphingData[2019]);
        console.log(graphingData[2020]);
        console.log(countryHappinessKeys);
        graphingData2019.push(graphingData[2019]);
        graphingData2019 = graphingData2019.flat();
        graphingData2020.push(graphingData[2020]);
        graphingData2020 = graphingData2019.flat();
        graphingHeaders.push(countryHappinessKeys);
        graphingHeaders = graphingData2019.flat();
    }


  // Create event handler, set on chage
  countryDropdownMenuSelection.on("input", makeBarCharts);
});
