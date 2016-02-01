module.exports = {

  // https://stackoverflow.com/questions/10804042/calculate-time-difference-with-javascript
  diff: function(start, end){
    start = start.split(":");
    end = end.split(":");

    var startDate = new Date(0, 0, 0, start[0], start[1], 0); // because no year apply, so it is very early time
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);

    // http://www.w3schools.com/jsref/jsref_gettime.asp
    // return milli seconds after 1970...
    var diff = endDate.getTime() - startDate.getTime();
    //console.log(diff);

    // diff in hours
    var hours = Math.floor(diff / 1000 / 60 / 60);
    //console.log(hours); // 0, if there is no hour.

    diff = diff - hours * 1000 * 60 * 60;
    //console.log(diff);


    var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    /*
    if (hours < 0)
       hours = hours + 24;

    var the_return = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    */

    //console.log("-output-");
    //console.log(the_return);

    var the_return = hours * 60 + minutes;

    return the_return;
  }

};
