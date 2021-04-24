var colormode = document.createElement("button");
colormode.id = "mode";
colormode.innerText = "Dark";
document.body.appendChild(colormode);

var contain = document.createElement("div"); // Creating div
contain.className = "container"; // Adding class to the div - container
contain.id = "container"; // Adding class to the div - container
document.body.appendChild(contain); // Appending to body

var HeadingDivision = document.createElement("div");
HeadingDivision.className = "headingdiv";
contain.appendChild(HeadingDivision);

var heading = document.createElement("h3"); // Creating h3 heading
let title = document.createTextNode("Unit Converter"); // Creating title for h3
heading.appendChild(title); // Adding title to h3
heading.id = "heading"; // adding id to heading
HeadingDivision.appendChild(heading); // Appending to the prevoious 'container' class

var listItem1 = document.createElement("div"); // Creating div
listItem1.className = "listItem1"; // Adding class name to div
contain.appendChild(listItem1); // Appending to 'container' class

var listItem2 = document.createElement("div"); // Creating div
listItem2.className = "listItem2"; // Adding class name to div
contain.appendChild(listItem2); // Appending to 'container' class

//INPUT
//Creating input field
var inputVal = document.createElement("input");
inputVal.setAttribute("type", "text");
inputVal.id = "input";
listItem1.appendChild(inputVal);

//Creating dropdown box
var dropDown = document.createElement("select"); // Creating select menu for temperature unit
dropDown.id = "InputUnit"; // Adding id to the dropdown box 'unit'
// dropDown.setAttribute('onchange', 'ChangeInputUnit(this)');
listItem1.appendChild(dropDown); // Appending 'container' class

//Creating option
//Celsius
var InCelsius = document.createElement("option");
var unit1 = document.createTextNode("Celsius");
InCelsius.setAttribute("value", "InCelsius");
InCelsius.appendChild(unit1);
dropDown.appendChild(InCelsius);

//Farenheit
var InFarenheit = document.createElement("option");
var unit2 = document.createTextNode("Farenheit");
InFarenheit.setAttribute("value", "InFarenheit");
InFarenheit.appendChild(unit2);
dropDown.appendChild(InFarenheit);

//Centimeter
var InCentimeter = document.createElement("option");
var unit3 = document.createTextNode("Centimeter");
InCentimeter.setAttribute("value", "InCentimeter");
InCentimeter.appendChild(unit3);
dropDown.appendChild(InCentimeter);

//Meter
var InMeter = document.createElement("option");
var unit4 = document.createTextNode("Meter");
InMeter.setAttribute("value", "InMeter");
InMeter.appendChild(unit4);
dropDown.appendChild(InMeter);

//Inch
var InInch = document.createElement("option");
var unit5 = document.createTextNode("Inch");
InInch.setAttribute("value", "InInch");
InInch.appendChild(unit5);
dropDown.appendChild(InInch);

//Feet
var InFeet = document.createElement("option");
var unit6 = document.createTextNode("Feet");
InFeet.setAttribute("value", "InFeet");
InFeet.appendChild(unit6);
dropDown.appendChild(InFeet);

//OUTPUT
//Creating output field
var inputVal = document.createElement("input");
inputVal.setAttribute("type", "text");
inputVal.id = "output";
listItem2.appendChild(inputVal);

//Creating dropdown box
var dropDown = document.createElement("select"); // Creating select menu for temperature unit
dropDown.id = "OutputUnit"; // Adding id to the dropdown box 'unit'
// dropDown.setAttribute('onchange', 'ChangeOutputUnit(this)');
listItem2.appendChild(dropDown); // Appending 'container' class

//Creating option
//Farenheit
var OutFarenheit = document.createElement("option");
var unit1001 = document.createTextNode("Farenheit");
OutFarenheit.appendChild(unit1001);
OutFarenheit.setAttribute("value", "OutFarenheit");
dropDown.appendChild(OutFarenheit);

//Celsius
var OutCelsius = document.createElement("option");
var unit1002 = document.createTextNode("Celsius");
OutCelsius.setAttribute("value", "OutCelsius");
OutCelsius.appendChild(unit1002);
dropDown.appendChild(OutCelsius);

//Centimeter
var OutCentimeter = document.createElement("option");
var unit1003 = document.createTextNode("Centimeter");
OutCentimeter.setAttribute("value", "OutCentimeter");
OutCentimeter.appendChild(unit1003);
dropDown.appendChild(OutCentimeter);

//Meter
var OutMeter = document.createElement("option");
var unit1004 = document.createTextNode("Meter");
OutMeter.setAttribute("value", "OutMeter");
OutMeter.appendChild(unit1004);
dropDown.appendChild(OutMeter);

//Inch
var OutInch = document.createElement("option");
var unit1005 = document.createTextNode("Inch");
OutInch.setAttribute("value", "OutInch");
OutInch.appendChild(unit1005);
dropDown.appendChild(OutInch);

//Feet
var OutFeet = document.createElement("option");
var unit1006 = document.createTextNode("Feet");
OutFeet.setAttribute("value", "OutFeet");
OutFeet.appendChild(unit1006);
dropDown.appendChild(OutFeet);

//Creating button
var convertion = document.createElement("button");
convertion.id = "convert";
contain.appendChild(convertion);
var button_text = document.createTextNode("Convert");
convertion.appendChild(button_text);

//Developer Name
var Developer = document.createElement("h4");
Developer.id = "developer";
contain.appendChild(Developer);
var txt = document.createTextNode("Developed by Rwitesh Bera");
Developer.appendChild(txt);

//Github Icon
var github = document.createElement("img");
github.id = "github";
contain.appendChild(github);

//Linkedin Icon
var linkedin = document.createElement("img");
linkedin.id = "linkedin";
contain.appendChild(linkedin);

//Icon Link
github.onclick = function () {
  window.open("https://github.com/rwiteshbera/Unit-Converter", "_blank", "", "");
};
linkedin.onclick = function () {
  window.open("https://www.linkedin.com/in/rwitesh-bera", "_blank", "", "");
};
