function startTime() {
  var today = new Date();
  var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
ap = (hr < 12 ) ? "<span>AM</span>" : "<span>PM</span>" ;
hr = (hr == 0) ? 12 : hr;
hr = (hr > 12) ? hr - 12 : hr ;
hr = checkTime(hr);
min = checkTime(min);
sec = checkTime(sec);
}
