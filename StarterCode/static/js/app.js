// Fetch the JSON data and console log it
d3.json("data/samples.json").then((importedData) => {
    console.log("importedData");
    var data = importedData;

//Build your select dropdown based on contents for 
    var data = Object.values(data.names);

//Filter the demographic info based on the select
    var labels = Object.keys(data.names);
})

// Promise Pending
  const dataPromise = d3.json("samples.json");
  console.log("Data Promise: ", dataPromise);

// Create a horizontal bar chart with dropdown menu to display top 10 
// OTUs found in that individual 
function init() {
    var data = [{
      values: us,
      labels: labels,
      type: "pie"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("pie", data, layout);
  }
  
function optionChanged(value) {
    //run chart for selected data with d3;
    metadata = mydata.metadata.filter(/* Find element with matching 
        id of value */)
    plotObject = mydata.samples.filter(/* Find sample with id
        === value */)

    sorttableData = plotObject.otu_ids.map((obj, index))
       {
        return {
            otu_id: obj,
            sample_value: plotObject.sample_values
            [index]
        }
    }
}