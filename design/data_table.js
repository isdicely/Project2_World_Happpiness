// Get data and display
d3.csv("/data/TOTAL_2019_2020_clean.csv").then(function (data) {
  console.log(data);
  //   Set Country dropdown menu
  const countryDropdownMenuSelection = d3.selectAll("#selCountry");
  const countryDropdownMenu = countryDropdownMenuSelection.node();
  const unique_countries = new Set(data.map((entry) => entry.Country));
  [...unique_countries].sort().forEach((country) => {
    const opt = document.createElement("option");
    opt.value = country;
    opt.innerHTML = country;
    countryDropdownMenu.appendChild(opt);
  });
  console.log(countryDropdownMenu);

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

  function updateTable(event) {
    // Prevent the page from refreshing
    event.preventDefault();
    // Clear any input
    while(tbody.firstChild) tbody.removeChild(tbody.lastChild);
    const country_selected = countryDropdownMenu.value;

    // Filter data based on selected country
    const filtered_display_data = data.filter(
      (entry) => entry.Country === country_selected
    );
    console.log(filtered_display_data);
    make_table(filtered_display_data);
  }
  // Create event handler, set on chage
  countryDropdownMenuSelection.on("input", updateTable);
});
