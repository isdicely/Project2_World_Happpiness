countryList = []
dystopiaResidual = []
economyGDP = []
family = []
freedom = []
generosity = []
happinessRank = []
healthLE = []
trustGov = []
year = []

NewCountryList = []
NewYear = [] 
NewHappinessRank = []
NewEconomyGDP = []
NewFamily = []
NewHealthLE = []
NewFreedom = []
NewTrustGov = []
NewGenerostiy = []
NewDystopiaResidual = []

d3.csv("TOTAL_2019_2020.csv").then(function(data) {
  console.log("This is the csv data:" , data);
  var countryListA= data.map(function(happinessDesc){
    return happinessDesc["Country"]
  }); 
  var dystopiaResidualA= data.map(function(happinessDesc){
    return happinessDesc["Dystopia Residual"]
  }); 
  var economyGDPA= data.map(function(happinessDesc){
    return happinessDesc["Economy (GDP per Capita)"]
  }); 
  var familyA = data.map(function(happinessDesc){
    return happinessDesc["Family"]
  }); 
  var freedomA = data.map(function(happinessDesc){
    return happinessDesc["Freedom"]
  }); 
  var generosityA = data.map(function(happinessDesc){
    return happinessDesc["Generosity"]
  }); 
  var happinessRankA = data.map(function(happinessDesc){
    return happinessDesc["Happiness Rank"]
  }); 
  var healthLEA = data.map(function(happinessDesc){
    return happinessDesc["Health (Life Expectancy)"]
  }); 
  var trustGovA = data.map(function(happinessDesc){
    return happinessDesc["Trust (Government Corruption)"]
  }); 
  var yearA = data.map(function(happinessDesc){
    return happinessDesc["Year"]
  }); 

  console.log("Country List:" , countryListA);
  console.log("Dystopia Residual List:", dystopiaResidualA);
  console.log("Economy GDP List:" , economyGDPA);
  console.log("Family List:" , familyA);
  console.log("Freedom List:" , freedomA);
  console.log("Generosity List:" , generosityA);
  console.log("Happiness Rank List:" , happinessRankA);
  console.log("Health (Life Expectancy) List:" , healthLEA);
  console.log("Trust (Gov. Corruption) List:" , trustGovA);
  console.log("Year List:" , yearA);


  countryList.push(countryListA)
  dystopiaResidual.push(dystopiaResidualA)
  economyGDP.push(economyGDPA)
  family.push(familyA)
  freedom.push(freedomA)
  generosity.push(generosityA)
  happinessRank.push(happinessRankA)
  healthLE.push(healthLEA)
  trustGov.push(trustGovA)
  year.push(yearA)

  NewCountryList = countryListA.flat(1);
  NewYear = yearA.flat(1);
  NewHappinessRank = happinessRankA.flat(1); 
  NewEconomyGDP = economyGDPA.flat(1); 
  NewFamily = familyA.flat(1); 
  NewHealthLE = healthLEA.flat(1); 
  NewFreedom = freedomA.flat(1); 
  NewTrustGov = trustGovA.flat(1); 
  NewGenerostiy = generosityA.flat(1); 
  NewDystopiaResidual = dystopiaResidualA.flat(1); 
  
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
