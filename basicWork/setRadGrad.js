// const DATA_COUNT = 5;
// Utils.srand(110);
// // Setting the chart colors
// const chartColors = Utils.CHART_COLORS;
// const colors = [chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue];

// const cache = new Map();
// let width = null;
// let height = null;

// const actions = [
//   {
//     name: 'Randomize',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data = generateData();
//       });
//       chart.update();
//     }
//   },



// function createRadialGradient3(context, c1, c2, c3) {
//     const chartArea = context.chart.chartArea;
//     if (!chartArea) {
//       // This case happens on initial chart load
//       return null;
//     }
  
//     const chartWidth = chartArea.right - chartArea.left;
//     const chartHeight = chartArea.bottom - chartArea.top;
//     if (width !== chartWidth || height !== chartHeight) {
//       cache.clear();
//     }
//     var gradient = cache.get(c1 + c2 + c3);
//     if (!gradient) {
//       // Create the gradient because this is either the first render
//       // or the size of the chart has changed
//       width = chartWidth;
//       height = chartHeight;
//       const centerX = (chartArea.left + chartArea.right) / 2;
//       const centerY = (chartArea.top + chartArea.bottom) / 2;
//       const r = Math.min(
//         (chartArea.right - chartArea.left) / 2,
//         (chartArea.bottom - chartArea.top) / 2
//       );
//       var ctx = context.chart.ctx;
//       gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
//       gradient.addColorStop(0, c1);
//       gradient.addColorStop(0.5, c2);
//       gradient.addColorStop(1, c3);
//     cache.set(c1 + c2 + c3, gradient);
//   }

//   return gradient;
// }
// var country = data.country
// var year = data.year
// var happinessScore = data.happiness
// var happinessRank= data.happinessRank
// var economy = data.economy
// var family = data.family
// var lifeExpectancy = data.lifeExpectancy
// var freedom = data.freedom
// var govCorruption = data.govCorruption
// var generosity = data.generosity

