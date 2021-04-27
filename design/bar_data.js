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

  
})
  

    
//   // Create event handler, set on chage
//   countryDropdownMenuSelection.on("input", updateTable);
  