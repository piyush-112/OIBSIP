

function temperatureConverter() {
  var x = document.getElementById("mySelect").selectedIndex;
  var degree = document.getElementById("data").value;
  console.log([x]);
  if ([x] == 0) {
    
    var result = parseFloat(degree) * (9 / 5) + 32;
    document.getElementById("output").value = result + " " + "°F";
  }
  else{
   
    var result = (parseFloat(degree)-32)*5/9;
    document.getElementById("output").value = Math.round(result) + " " + "°C";
  }


}