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
  var state_name_str = "'" +   state_name + "'"
  document.getElementById("test").innerHTML = state_name_str
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

  projection: {type: "mercator"},
  mark: "circle",
  encoding: {
    longitude: {field: "longitude", type: "quantitative"},
    latitude: {field: "latitude", type: "quantitative"},
    "size": {"value": 5},
    color: {field: "commod1", type: "nominal"}
  }
}


]
    
  }
  
  
  var state_pie = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "Top 10 Metal Deposits In" + state_name ,
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/alldeposits_bystate.csv"
},

mark:"arc",


  encoding: {
    
    theta: {field: "Number Of Deposits", type: "quantitative"},
    color: {field: "Metal", type: "nominal"},
    tooltip:[{field:"Metal",type:"nominal",title:"Metal"},
               {field:"Number Of Deposits",type:"quantitative",title:"Number Of Deposits"}]

  },
  transform:[{filter:"datum.state ==" + state_name_str}]
  
}



      
      
vegaEmbed('#state_map',state_map)
vegaEmbed('#state_pie',state_pie)

    
  }
  
  


  
  
function copper_charts(){
  

    
var copper = "js/copper_plots.vg.json";
  vegaEmbed('#dot_chart', copper).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
var copper_bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "Common Metal Deposits In United States",
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "orange"},
    tooltip:{field:"Number Of Deposits",type:"quantitative"}

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Copper'"}]
  
}


  vegaEmbed('#metals_us_bar', copper_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  
  
}
function gold_charts(){
  

    
var gold = "js/gold_plots.vg.json";
  vegaEmbed('#dot_chart', gold).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  
var gold_bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "Common Metal Deposits In United States",
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "gold"},
    tooltip:{field:"Number Of Deposits",type:"quantitative"}

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Gold'"}]
  
}


  vegaEmbed('#metals_us_bar', gold_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

}
function iron_charts(){
  

    
var iron = "js/iron_plots.vg.json";
  vegaEmbed('#dot_chart', iron).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
var iron_bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "Common Metal Deposits In United States",
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "steelblue"},
    tooltip:{field:"Number Of Deposits",type:"quantitative"}

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Iron'"}]
  
}


  vegaEmbed('#metals_us_bar', iron_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);


  
  
}
function lead_charts(){
  

    
var lead = "js/lead_plots.vg.json";
  vegaEmbed('#dot_chart', lead).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);


var lead_bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "Common Metal Deposits In United States",
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "green"},
    tooltip:{field:"Number Of Deposits",type:"quantitative"}

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Lead'"}]
  
}

  vegaEmbed('#metals_us_bar', lead_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
}
function silver_charts(){
  

    
var silver = "js/silver_plots.vg.json";
  vegaEmbed('#dot_chart', silver).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
var silver_bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "States with most Silver Deposits",
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "grey"},
    tooltip:{field:"Number Of Deposits",type:"quantitative"}

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Silver'"}]
  
}

  vegaEmbed('#metals_us_bar', silver_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  
  
}