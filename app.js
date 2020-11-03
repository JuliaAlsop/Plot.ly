//Part 1: Fetch the JSON data and console log it
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    mydata = data  

    //build select dropdown based on contents to data.names 
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
    //filter the demographic info based on select 

})

function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    ];

////////////////////////////////////////////////////////////////////////////////////////////////
// Part 2: Creating Horizontal Bar Chart 
// Sort the data by Name
var sortedname = data.sort((a, b) => b.name - a.name);

// Slice the first 10 objects for plotting
slicedData = sortedname.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the OTU Data
// data
var bardata = [
  {
    y: yticks,
    x: sample_values.slice(0, 10).reverse(),
    text: otu_labels.slice(0, 10).reverse(),
    type: "bar",
    orientation: "h",
  }

// Apply the group bar mode to the layout
var barlayout = {
  title: "Top 10 OTUs found in Individual",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with 
Plotly.newPlot('bar', bardata, barlayout);
  });
}

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
function optionChanged(samples) {
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
    function optionChanged(newSample) {
      // Fetch new data each time a new sample is selected
      buildCharts(newSample);
      buildMetadata(newSample);
    }
    
    // Initialize the dashboard
    init();