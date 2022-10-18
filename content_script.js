function init_charts() {
  
  var spec2 = "js/US_minerals.vg.json";
  vegaEmbed('#choropleth_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  var spec3 = "js/us_bar.vg.json";
  vegaEmbed('#us_bar', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
}


function state_plots() {
  
  
  var selObj = document.getElementById("state_select");
  var selValue = selObj.options[selObj.selectedIndex].value;
  
  var state_array = selValue.split(',')
  var state_name = state_array[1]
  var state_code = state_array[0]
  document.getElementById("test").innerHTML = state_name
  var state_name_lower = state_name.toLowerCase()
  url = "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/state_deposits/" + state_name + ".csv"
  
  var map_url = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/"+state_code+ "-counties.json"
  var counties = "cb_2015_" +state_name_lower + "_county_20m"
  if(state_name == "Louisiana"){var map_url ="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/LA-22-louisiana-parishes.json" }
    if(state_name == "Louisiana"){var counties = "cb_2015_louisiana_parish_20m"}
  
  
  
  var state_map = {
    
    
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 500,
  height: 300,
  layer: [
    {
      data: {
        url: map_url,
        format: {
          type: "topojson",
          feature: counties
        }
      },
      
      projection: {
        type: "mercator"
      },
      mark: {
        type: "geoshape",
        fill: "lightgray"
      }
    



},
    {data: {
    url: url
  },
  
  transform:[{filter:"datum.commod1 == 'Iron'"}],

  projection: {type: "mercator"},
  mark: "circle",
  encoding: {
    longitude: {field: "longitude", type: "quantitative"},
    latitude: {field: "latitude", type: "quantitative"},
    
    color: {field: "commod1", type: "nominal"}
  }
}


]
    
  }



      
      
vegaEmbed('#state_map',state_map)


    
  }
  
  

function state_plots_metal() {
  
  
  var selObj = document.getElementById("state_select");
  var selValue = selObj.options[selObj.selectedIndex].value;
  
  var state_array = selValue.split(',')
  var state_name = state_array[1]
  var state_code = state_array[0]
  document.getElementById("test").innerHTML = state_name
  var state_name_lower = state_name.toLowerCase()
  url = "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/state_deposits/" + state_name + ".csv"
  
  var map_url = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/"+state_code+ "-counties.json"
  var counties = "cb_2015_" +state_name_lower + "_county_20m"
  if(state_name == "Louisiana"){var map_url ="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/LA-22-louisiana-parishes.json" }
    if(state_name == "Louisiana"){var counties = "cb_2015_louisiana_parish_20m"}
  
  
  
  var state_map = {
    
    
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 500,
  height: 300,
  layer: [
    {
      data: {
        url: map_url,
        format: {
          type: "topojson",
          feature: counties
        }
      },
      
      projection: {
        type: "mercator"
      },
      mark: {
        type: "geoshape",
        fill: "lightgray"
      }
    



},
    {data: {
    url: url
  },
  
  transform:[{filter:"datum.commod1 == 'Iron'"}],

  projection: {type: "mercator"},
  mark: "circle",
  encoding: {
    longitude: {field: "longitude", type: "quantitative"},
    latitude: {field: "latitude", type: "quantitative"},
    
    color: {field: "commod1", type: "nominal"}
  }
}


]
    
  }



      
      
vegaEmbed('#state_map',state_map)


    
  }