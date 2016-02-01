var diff_module = require("./diff_time_module.js");

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
  var start_end_time = line.split("-");
  var start = start_end_time[0].trim();
  var end = start_end_time[1].trim();

  // Start hour
  var start_h = start.split(":")[0];
  var start_m = start.split(":")[1];

  // End hour
  var end_h = end.split(":")[0];
  var end_m = end.split(":")[1];

  var output_min = null;

  if( parseInt(start_h) <= parseInt(end_h) ) {
    console.log(line);
    output_min = diff_module.diff(start, end);
  }
  else {
    // We add 24 hours to the var end
    var new_end_h = (24 + parseInt(end_h));
    var new_end_m = end_m;
    var new_end = new_end_h + ":" + new_end_m;

    //console.log(start + " - " + new_end);
    console.log(line);
    output_min = diff_module.diff(start, new_end);
  }

  console.log("Duration: " + output_min);
  console.log();
  
});
