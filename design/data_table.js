// Get data and display
d3.csv("/data/TOTAL_2019_2020_clean.csv").then(function (data) {
  console.log(data);
  //   Set Country dropdown menu
  const countryDropdownMenuSelection = d3.selectAll("#selCountry");
  const countryDropdownMenu = countryDropdownMenuSelection.node();
  const unique_countries = new Set(data.map((entry) => entry.Country));
  // Add a opt for all countries
  const opt_all_countries = document.createElement("option");
  opt_all_countries.value = "";
  opt_all_countries.innerHTML = "[All Countries]";
  countryDropdownMenu.appendChild(opt_all_countries);
  // Add opts for all contries to the dropdown menu
  [...unique_countries].sort().forEach((country) => {
    const opt = document.createElement("option");
    opt.value = country;
    opt.innerHTML = country;
    countryDropdownMenu.appendChild(opt);
  });
  console.log(countryDropdownMenu);

  // Set Region dropdown menu
  const regionDropdownMenuSelection = d3.selectAll("#selRegion");
  const regionDropdownMenu = regionDropdownMenuSelection.node();
  const unique_regions = new Set(data.map((entry) => entry.Region));
  // Add opt for no regions
  const opt_no_region = document.createElement("option");
  opt_no_region.value = "";
  opt_no_region.innerHTML = "[All Regions]";
  regionDropdownMenu.appendChild(opt_no_region);
  // Add opts for all regions
  [...unique_regions].sort().forEach((region) => {
    const opt_element = document.createElement("option");
    opt_element.value = region;
    opt_element.innerHTML = region;
    regionDropdownMenu.appendChild(opt_element);
  });

  // Append Table heading and Column names
  const table = document.querySelector("table");
  const thead = table.createTHead();
  const tbody = document.createElement("tbody");
  const row = thead.insertRow();
  for (const key in data[0]) {
    const th = document.createElement("th");
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  function make_table(data) {
    // Add table contents (filtered country in alphabetical order and year in numerical order)

    // Function to sort data
    function byCountryAndYear(a, b) {
      if (a.Country < b.Country) return -1;
      if (a.County === b.Country) {
        if (a.Year < b.Year) return -1;
        if (a.Year === b.Year) return 0;
      }
      return 1;
    }
    data.sort(byCountryAndYear).forEach((entry) => {
      let row = tbody.insertRow();
      Object.values(entry).forEach((value) => {
        let cell = row.insertCell();
        const text = document.createTextNode(value);
        cell.appendChild(text);
      });
    });
    table.appendChild(tbody);
  }
  make_table(data);

  let lastSelectedRegion = regionDropdownMenu.value;
  function updateTable(event) {
    // Prevent the page from refreshing
    event.preventDefault();
    // Clear any input
    while (tbody.firstChild) tbody.removeChild(tbody.lastChild);
    
    // Retrive region selected
    const region_selected = regionDropdownMenu.value;
    if (lastSelectedRegion !== region_selected) {
      lastSelectedRegion = region_selected;
      const hasRegion = lastSelectedRegion !== "";
      countryDropdownMenu.innerHTML = "";
      const regionCountries = new Set(
        data.flatMap((entry) =>
          !hasRegion || lastSelectedRegion === entry.Region ? entry.Country : []
        )
      );
      countryDropdownMenu.appendChild(opt_all_countries);
      [...regionCountries].sort().forEach((country) => {
        const opt = document.createElement("option");
        opt.value = country;
        opt.innerHTML = country;
        countryDropdownMenu.appendChild(opt);
      });
    }

    // Retrive country selected
    const country_selected = countryDropdownMenu.value;
    
    if (country_selected === "") {
      if (region_selected === "") {
        make_table(data);
      } else {
        // Filter data based on selected region
        const region_filtered_display_data = data.filter(
          (entry) => entry.Region === region_selected
        );

        make_table(region_filtered_display_data);
      }
    } else {
      // Filter data based on selected country
      const country_filtered_display_data = data.filter(
        (entry) => entry.Country === country_selected
      );

      make_table(country_filtered_display_data);
    }
  }
  // Create event handler, set on chage
  countryDropdownMenuSelection.on("input", updateTable);

  // move this to the new function***********

  regionDropdownMenuSelection.on("input", updateTable);
});
