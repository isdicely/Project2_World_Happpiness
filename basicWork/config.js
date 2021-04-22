d3.csv("TOTAL_2019_2020.csv").then(function(data) {
  console.log("This is the csv data:" , data);
  var countryList= data.map(function(happinessDesc){
    return happinessDesc["Country"]
  }); 
  var dystopiaResidual= data.map(function(happinessDesc){
    return happinessDesc["Dystopia Residual"]
  }); 
  var economyGDP= data.map(function(happinessDesc){
    return happinessDesc["Economy (GDP per Capita)"]
  }); 
  var family = data.map(function(happinessDesc){
    return happinessDesc["Family"]
  }); 
  var freedom = data.map(function(happinessDesc){
    return happinessDesc["Freedom"]
  }); 
  var generosity = data.map(function(happinessDesc){
    return happinessDesc["Generosity"]
  }); 
  var happinessRank = data.map(function(happinessDesc){
    return happinessDesc["Happiness Rank"]
  }); 
  var healthLE= data.map(function(happinessDesc){
    return happinessDesc["Health (Life Expectancy)y"]
  }); 
  var trustGov = data.map(function(happinessDesc){
    return happinessDesc["Trust (Government Corruption)"]
  }); 
  var year = data.map(function(happinessDesc){
    return happinessDesc["Year"]
  }); 

  console.log("Country List:" , countryList);
  console.log("Dystopia Residual List:", dystopiaResidual);
  console.log("Economy GDP List:" , economyGDP);
  console.log("Family List:" , family);
  console.log("Freedom List:" , freedom);
  console.log("Generosity List:" , generosity);
  console.log("Happiness Rank List:" , happinessRank);
  console.log("Health (Life Expectancy) List:" , healthLE);
  console.log("Trust (Gov. Corruption) List:" , trustGov);
  console.log("Year List:" , year);


  const config = {
                type: 'polarArea',
                data: data,
                options: {
                  plugins: {
                    legend: false,
                    tooltip: false,
                  },
                  elements: {
                    arc: {
                      backgroundColor: function(context) {
                        let c = colors[context.dataIndex];
                        if (!c) {
                          return;
                        }
                        if (context.active) {
                          c = helpers.getHoverColor(c);
                        }
                        const mid = helpers.color(c).desaturate(0.2).darken(0.2).rgbString();
                        const start = helpers.color(c).lighten(0.2).rotate(270).rgbString();
                        const end = helpers.color(c).lighten(0.1).rgbString();
                        return createRadialGradient3(context, start, mid, end);
                    },
                  }
                }
              }
            };
console.log("Here is the config:" , config)
});
