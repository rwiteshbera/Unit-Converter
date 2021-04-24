//Calculation
document.getElementById("convert").onclick = function () {
  var x = document.getElementById("InputUnit").value;
  var y = document.getElementById("OutputUnit").value;
  if (document.getElementById("input").value == "") {
    alert("Enter a valid input");
  }

  //Celsius to Farenheit
  else if (x === "InCelsius" && y === "OutFarenheit") {
    var numb = document.getElementById("input").value;
    var res = numb * (9 / 5) + 32;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Farenheit to Celsius
  else if (x === "InFarenheit" && y === "OutCelsius") {
    var numb = document.getElementById("input").value;
    var res = (numb - 32) * (5 / 9);
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Centimeter to Meter
  else if (x === "InCentimeter" && y === "OutMeter") {
    var numb = document.getElementById("input").value;
    var res = numb / 100;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Centimeter to inch
  else if (x === "InCentimeter" && y === "OutInch") {
    var numb = document.getElementById("input").value;
    var res = numb / 2.54;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Centimeter to feet
  else if (x === "InCentimeter" && y === "OutFeet") {
    var numb = document.getElementById("input").value;
    var res = numb / 30.48;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Meter to Centimeter
  else if (x === "InMeter" && y === "OutCentimeter") {
    var numb = document.getElementById("input").value;
    var res = numb * 100;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Meter to inch
  else if (x === "InMeter" && y === "OutInch") {
    var numb = document.getElementById("input").value;
    var res = numb * 39.37;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Meter to feet
  else if (x === "InMeter" && y === "OutFeet") {
    var numb = document.getElementById("input").value;
    var res = numb * 3.281;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Inch to Centimeter
  else if (x === "InInch" && y === "OutCentimeter") {
    var numb = document.getElementById("input").value;
    var res = numb * 2.54;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Inch to meter
  else if (x === "InInch" && y === "OutMeter") {
    var numb = document.getElementById("input").value;
    var res = numb / 39.37;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Inch to feet
  else if (x === "InInch" && y === "OutFeet") {
    var numb = document.getElementById("input").value;
    var res = numb / 12;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Feet to Meter
  else if (x === "InFeet" && y === "OutMeter") {
    var numb = document.getElementById("input").value;
    var res = numb / 3.281;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Feet to Inch
  else if (x === "InFeet" && y === "OutInch") {
    var numb = document.getElementById("input").value;
    var res = numb * 12;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //Feet to Centimeter
  else if (x === "InFeet" && y === "OutCentimeter") {
    var numb = document.getElementById("input").value;
    var res = numb * 30.48;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  }

  //If someone sets both the input and output unit same, then it will show same result.
  //Same Unit Function
  else if (
    (x === "InCelsius" && y === "OutCelsius") ||
    (x === "InFarenheit" && y === "OutFarenheit") ||
    (x === "InMeter" && y === "OutMeter") ||
    (x === "InCentimeter" && y === "OutCentimeter") ||
    (x === "InInch" && y === "OutInch") ||
    (x === "InFeet" && y === "OutFeet")
  ) {
    var numb = document.getElementById("input").value;
    var res = numb;
    var n = parseFloat(res).toFixed(2);
    document.getElementById("output").value = n;
  } else {
    alert("Unable to convert.");
  }
};
