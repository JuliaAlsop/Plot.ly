//Part 1: Fetch the JSON data and console log it

d3.json("data/samples.json").then((importedData) => {
    console.log("importedData");
    var Data = importedData;

// Part 2: Creating Horizontal Bar Chart 

// Sort the data by Name
var sortedname = Data.sort((a, b) => b.name - a.name);

// Slice the first 10 objects for plotting
slicedData = sortedname.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the OTU Data
var trace1 = {
  x: reversedData.map(object => object.sample_values),
  y: reversedData.map(object => object.otu_ids),
  text: reversedData.map(object => object.sample_values),
  name: "Data",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Top 10 OTUs found in Individual",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with 
Plotly.newPlot('plot', data, layout);

//Part 3: Create a bubble chart that displays each sample
var trace1 = {
  x: reversedData.map(object => object.sample_values),
  y: reversedData.map(object => object.otu_ids),
  mode: 'markers',
  marker: {
    color: ['rgb(93, 164, 214)', 'rgb(280, 144, 20)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    opacity: [0.4],
    size: [60]
  }
};

var data = [trace1];

var layout = {
  title: 'Bubble Chart',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('myDiv', data, layout);

// Part 4: Display the sample metadata 


//Part 5 (advanced) Plot Washing Frequency 
