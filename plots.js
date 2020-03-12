//PIE CHART - BREAKOUT OF GRADES IN MANHATTAN
var data = [{
  values: [61796, 9183, 3700],
  labels: ['A', 'B', 'C'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500,
  title: "Restaraunt Grades in Manhattan - March 2020"
};

Plotly.newPlot('plot', data, layout);

//BAR CHART - TOP 10 VIOLATION CATEGORIES
var trace1 = {
  x: ["Facility, machinery", 
  "Employee", 
  "Food contamination", 
  "Food temperature ",
  "Pests / Garbage removal"],
  y: [25426, 16151, 12541, 8460, 8407],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Top 5 DOH Violation Categories in Manhattan",
  xaxis: { title: "Type of Violation", tickangle: 0, automargin : true },
  yaxis: { title: "# of Violations", automargin : true},
  //automargin: true,
};

Plotly.newPlot("plot", data, layout);