
//   html file shold import chart.js

// 4. SETUP SECTION
// not sure if this belongs at the end - might need to be at the beginning - check that

const DATA_COUNT = 5;
// this is responsible for 5 diff wedges - can add more
Utils.srand(110);
// randomization function thing - doesnt change too much - can delete this

const chartColors = Utils.CHART_COLORS;
const colors = [chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue];
// adding in colors to the chart; add more colors HERE if you add more slices

const cache = new Map();
let width = null;
let height = null;

const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = generateData();
      });
      chart.update();
    }
  },
];
// this can be removed bc it's just a randomize button

// 1. CREATERADIALGRADIENT3 SECTION - createRadialGradient3 c1/c2/c3 are colors
function createRadialGradient3(context, c1, c2, c3) {
  const chartArea = context.chart.chartArea;
  if (!chartArea) {
    // This case happens on initial chart load
    return null;
  }

//   setting the size
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (width !== chartWidth || height !== chartHeight) {
    cache.clear();
  }
  var gradient = cache.get(c1 + c2 + c3);
  if (!gradient) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    // setting the cetner of the charts in the field
    const r = Math.min(
      (chartArea.right - chartArea.left) / 2,
      (chartArea.bottom - chartArea.top) / 2
    );
    // r is the actual center of the radius of all the circles
    var ctx = context.chart.ctx;
    gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
    gradient.addColorStop(0, c1);
    gradient.addColorStop(0.5, c2);
    gradient.addColorStop(1, c3);
    cache.set(c1 + c2 + c3, gradient);
  } 
// setting the colors
  return gradient;
}

// 3 DATA SECTION

function generateData() {
    return Utils.numbers({
      count: DATA_COUNT,
      min: 0,
      max: 100
    });
  }
//   this is creating random numbers between 1 and 100 - this is where we'd change this 
// function to pull from our dataset; look into what the output of that is and handle our
// own data accordingly - this is probably different from how we need to extract ours
  
  const data = {
    labels: Utils.months({count: DATA_COUNT}),
    datasets: [{
      data: generateData()
    }]
  };
// this is the important part that calls the data - 

// 2. CONFIG SECTION
// setting up chart type and it's infrastructure for when the data is populated
const config = {
    type: 'polarArea',
    data: data,
    options: {
      plugins: {
        legend: false,
        // might want to set legend to true
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
  module.exports = {
    actions,
    config,
  };
