$(document).ready(function(){

  var chartObj = [{
    "cId": "#int-trends",
    "cType": "line",
    "cData": {
      labels : ["2010","2011","2012","2013","2014","2015"],
      datasets : [
        {
          // fillColor : "rgba(110,19,25,1)",
          fillColor : "rgba(221,39,49,0.5)",
          strokeColor : "rgba(221,39,49,1)",
          data : [1370,1400,1480,1510,1700,1720]
        },
        {
          // fillColor : "rgba(0,35,102,1)", // #0047cc
          fillColor : "rgba(0,71,204,0.5)",
          strokeColor : "rgba(0,71,204,1)",
          data : [1000,1170,1350,1500,1750,2000]
        }
      ]
    },
    "options":{
      scaleOverride : true,
      scaleSteps : 6,
      scaleStepWidth : 400,
      scaleStartValue : 0,
      scaleLineWidth: 4
    }
  }];

  // Call the responsive plugin
  $.respCharts(chartObj);

});
