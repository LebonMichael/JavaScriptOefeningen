function smile(){
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf118";
    setTimeout(function (){
        a.innerHTML = "&#xf4da";
    },1000);
    setTimeout(function (){
        a.innerHTML = "&#xf5b8";
    },2000);
}
smile();
setInterval(smile,3000);