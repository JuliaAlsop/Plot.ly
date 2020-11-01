//Part 1: Fetch the JSON data and console log it
var mydata = {};

d3.json("samples.json" , function(data) {
    console.log("d3.json ran")
    //console.log(data);
    //var Data = importedData;

    mydata = data  

    //build select dropdown based on contents to data.names 

    //filter the demographic info based on select 
})
////////////////////////////////////////////////////////////////////////////////////////////////
// Part 2: Creating Horizontal Bar Chart 
// Sort the data by Name
var sortedname = data.sort((a, b) => b.name - a.name);

// Slice the first 10 objects for plotting
slicedData = sortedname.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the OTU Data
var trace1 = {
  x: reversedData.map(object.sample_values),
  y: reversedData.map(object.otu_ids),
  text: reversedData.map(object.sample_values),
  name: "data",
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
Plotly.newPlot('bar', data, layout);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Part 3: Create a bubble chart that displays each sample
var bubdata = [
  {
   x: reversedData.map(object => object.otu_ids),
   y: reversedData.map(object => object.sample_values),
    mode: "markers",
    marker: {
      colors: [otu_ids],
      opacity: [0.4],
      size: [sample_values],
      text values: [otu_labels]
    }
  }
];

var bublayout = {
  title: 'Bubble Chart',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot("bubble", bubdata, bublayout);

///////////////////////////////////////////////////////////////////////////////////////////
// Part 4: Display the sample metadata 
function optionChanged(value) {
  //run chart for selected data with d3;
  metadata = data.metadata.filter

  plotObject = data.samples.filter

  sorttableData = plotObject.otu_ids.map((obj, index))
     {
      return {
          otu_id: obj,
          sample_value: plotObject.sample_values
          [index]
      }
     }
    }