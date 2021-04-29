# UCD Bootcamp Data Analytics - Project 2: World Happiness Data Over the Last Two Years
## Overview
After the year we have had in 2020, let's talk about happiness. What makes happy countries? For this project, we looked into global happiness data, mapped that data, and ran analyses to try and figure out what makes happy countries vs. unhappy countries. From the data, we will try to see if we can identify more or less resilient countries through the pandemic. 

## Data
Our data measured a number of things per country: 
- Dystopia Residual
- GDP per capita
- Social support
- Healthy life expectancy
- Freedom to make life choices
- Generosity
- Perceptions of corruption
 
Each of these categories was given a numberical value, which was then added up to a total overall score called the Happiness Score. From this Happiness Score, the countries' rankings were determined. 

## Findings
Most countries stayed within the same range for Happiness Scores and across all individual scores. The only three countries that did not stay the same were Afghanistan, Bangladesh, and Mexico.

## Data Sources
- World Happiness Data: https://www.kaggle.com/mathurinache/world-happiness-report-20152021?select=2021.csv (source: https://worldhappiness.report/archive/)
- Geo Data Used for the World Map: https://datahub.io/core/geo-countries#resource-countries

## Project Artifacts
The project used a combination of Excel, html, Javascript, Google Charts, Geojsons, Mapbox, Leaflet, Pandas, and Matplotlib all stored within the "design" folder and consists of:
- A jupyter notebook file, analysis_plots.ipynb, that uses Pandas and Matplotlib to create regression plots stored as .pngs in the "output" folder within the "design" folder
- style.css file, which creates the css used on the site
A series of html files that together create our website via a series of links:
- analysis.html, which calls the .png files from the "output" folder
- data.html, which 
- index.html, which
- project_design.html, which 
- report_methodology.html, which 
- resources.html, which 
- visualizations.html, which
A series of .js Javascript files to create our data tables, bar graph data, and cloropleth maps, which consists of:
- bar_data.js, which pulls in data from the .csv and creates the data for and the bar graph itself using Google Charts
- choropleth.js, which uses Geojsons, Mapbox, and Leaflet to create the choropleth heat map
- config.js, which
- data_table.js, which pulls in data from the .csv and creates the data tables on our site
- logic.js, which 
