//close button en toevoegen aan ieder li item

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i=0;i<myNodelist.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// click close button en verberg item

var close = document.getElementsByClassName("close");
var i;

for (i=0;i<close.length;i++){
    close[i].onclick = function (){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// een check symbool toevoegen wanneer we klikken op
//een list item

var list = document.querySelector("UL");
list.addEventListener("click",function (event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
},false);

//een nieuwe item gaan toevoegen wanneer we klikken op toevoegen

function newElement(){
    var li = document.createElement("LI")
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    var p = document.createElement("P");
    var aantal = document.getElementById("myInputAantal");
    var at = document.createTextNode(aantal);
    p.appendChild(at)
    li.className = "list-group-item"
    if(inputValue === ""){
        alert("Vul ne keer iets in muttn");
    }else{
        document.getElementById("myUl").appendChild(li).appendChild(p);
    }
    document.getElementById("myInput").value = "";
    document.getElementById("myInputAantal").value ="";
    // kruisje toevoegen en verbergen
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close btn btn-danger btn-sm rounded-circle ";
    li.onmouseover = function (){
        li.style.backgroundColor = "#33FFAF"
    }
    li.onmouseleave = function (){
        li.style.backgroundColor = "#fff"
    }
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function (){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }