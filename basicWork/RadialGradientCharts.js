
//   html file shold import chart.js

// 4. SETUP SECTION
// not sure if this belongs at the end - might need to be at the beginning - check that

const DATA_COUNT = 5;
// this is responsible for 5 diff wedges - can add more


// section to add in created functions
var _seed = Date.now();

function srand(seed) {
  _seed = seed;
}

function rand(min, max) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

function numbers(config) {
  var cfg = config || {};
  var min = valueOrDefault(cfg.min, 0);
  var max = valueOrDefault(cfg.max, 100);
  var from = valueOrDefault(cfg.from, []);
  var count = valueOrDefault(cfg.count, 8);
  var decimals = valueOrDefault(cfg.decimals, 8);
  var continuity = valueOrDefault(cfg.continuity, 1);
  var dfactor = Math.pow(10, decimals) || 0;
  var data = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + this.rand(min, max);
    if (this.rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

function points(config) {
  const xs = this.numbers(config);
  const ys = this.numbers(config);
  return xs.map((x, i) => ({x, y: ys[i]}));
}

function bubbles(config) {
  return this.points(config).map(pt => {
    pt.r = this.rand(config.rmin, config.rmax);
    return pt;
  });
}

function labels(config) {
  var cfg = config || {};
  var min = cfg.min || 0;
  var max = cfg.max || 100;
  var count = cfg.count || 8;
  var step = (max - min) / count;
  var decimals = cfg.decimals || 8;
  var dfactor = Math.pow(10, decimals) || 0;
  var prefix = cfg.prefix || '';
  var values = [];
  var i;

  for (i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor);
  }

  return values;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

const COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];

function color(index) {
  return COLORS[index % COLORS.length];
}

function transparentize(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
];

function namedColor(index) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}

function newDate(days) {
  return DateTime.now().plus({days}).toJSDate();
}

function newDateString(days) {
  return DateTime.now().plus({days}).toISO();
}

function parseISODate(str) {
  return DateTime.fromISO(str);
}

// end added fuctions

srand(110);
// randomization function thing - doesnt change too much - can delete this

const chartColors = CHART_COLORS;
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
    return numbers({
      count: DATA_COUNT,
      min: 0,
      max: 100
    });
  }
//   this is creating random numbers between 1 and 100 - this is where we'd change this 
// function to pull from our dataset; look into what the output of that is and handle our
// own data accordingly - this is probably different from how we need to extract ours
  
  const data = {
    labels: months({count: DATA_COUNT}),
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
