var alleBMW = document.querySelectorAll(".bmw");
var result = "document.getElementsByClassName('bmw)";

for (var i = 0;i < alleBMW.length; i++){
    result += "\n " + alleBMW[i].textContent;
}
document.querySelectorAll('#resultArea').value = result