//var source = document.getElementsByClassName("source");
//var source = document.querySelectorAll("") // . for class and # for id
//var source = document.getElementById("source");

var source = document.getElementById("source");
var innerHtmlOutput = document.getElementById("innerHtml");
var txtContentOutput = document.getElementById("txtContentOutput");
var innerTextOutput = document.getElementById("innerTextOutput");

innerHtmlOutput.value = source.innerHTML;
txtContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText