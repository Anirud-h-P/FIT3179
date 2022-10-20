function init_charts() {
  
  var spec2 = "js/US_minerals.vg.json";
  vegaEmbed('#choropleth_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  var spec3 = "js/us_bar.vg.json";
  vegaEmbed('#us_bar', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  

  
  copper_charts()
  
  
}



  


  
  
function copper_charts(){
  

    
var copper = "js/copper_plots.vg.json";
  vegaEmbed('#dot_chart', copper).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
var copper_bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Bar chart",
  title: "Number Of Copper Deposits By State",
  width:300,
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "orange"},
    tooltip:[{field:"Number Of Deposits",type:"quantitative",title:"Num Deposits"}]

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Copper'"}]
  
}
vegaEmbed('#metals_us_bar', copper_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var copper_matrix = "js/copper_matrix.vg.json";
  vegaEmbed('#state_matrix', copper_matrix).then(function(result) {
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
  title: "Number Of Gold Deposits By State",
  width:300,
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "gold"},
    tooltip:[{field:"Number Of Deposits",type:"quantitative",title:"Num Deposits"}]

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Gold'"}]
  
}


  vegaEmbed('#metals_us_bar', gold_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);


var gold_matrix = "js/gold_matrix.vg.json";
  vegaEmbed('#state_matrix', gold_matrix).then(function(result) {
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
  title: "Number Of Iron Deposits By State",
  width:300,
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},



mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "steelblue"},
    tooltip:[{field:"Number Of Deposits",type:"quantitative",title:"Num Deposits"}]

  },

  transform:[{filter:"datum['Number Of Deposits'] > 250"},
              {filter:"datum.Metal == 'Iron'"}]
  
}


vegaEmbed('#metals_us_bar', iron_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
var iron_matrix = "js/iron_matrix.vg.json";
  vegaEmbed('#state_matrix', iron_matrix).then(function(result) {
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
  title: "Number Of Lead Deposits By State",
  width:300,
  data: {
    
    url: "https://raw.githubusercontent.com/Anirud-h-P/FIT3179/main/topdeposits_bystate.csv"
},





mark:"bar",


  encoding: {
    x: {field: "state", type: "ordinal",sort:"-y"},
    y: {field: "Number Of Deposits", type: "quantitative", axis: {labelSeparation:1}},
    "color": {"value": "green"},
    tooltip:[{field:"Number Of Deposits",type:"quantitative",title:"Num Deposits"}]

  },

  transform:[{filter:"datum['Number Of Deposits'] > 50"},
              {filter:"datum.Metal == 'Lead'"}]
  
}

  vegaEmbed('#metals_us_bar', lead_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
var lead_matrix = "js/lead_matrix.vg.json";
  vegaEmbed('#state_matrix', lead_matrix).then(function(result) {
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
  title: "Number Of Silver Deposits By State",
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

var silver_matrix = "js/silver_matrix.vg.json";
  vegaEmbed('#state_matrix', silver_matrix).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);  
  
}



function embed_state_matrix(){
  
    var spec3 = "js/state_matrix.vg.json";
  vegaEmbed('#state_matrix', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  
  
}