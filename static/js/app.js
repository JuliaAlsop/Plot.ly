// Fetch the JSON data and console log it
d3.json("../samples.json").then(function(data) {
    console.log("d3.json ran")
    console.log(data);

    mydata = data

//Build your select dropdown based on contents for 
    data.names
//Filter the demographic info based on the select
    
})

// Promise Pending
  const dataPromise = d3.json("samples.json");
  console.log("Data Promise: ", dataPromise);

// Create a horizontal bar chart with dropdown menu to display top 10 
// OTUs found in that individual 






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