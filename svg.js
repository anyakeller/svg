var pic=document.getElementById("vimage");

var c = document.createElementNS(
"http://www.w3.org/2000/svg",
"circle");
c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r","100");
c.setAttribute("fill","red");
c.setAttribute("stroke","black");

var drawCirc = function(evt){
    var x = evt.offsetX;//clientX - rect.left,
    var y = evt.offsetY;//clientY - rect.top
    var circ = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle");
    circ.setAttribute("cx",x);
    circ.setAttribute("cy",y);
    circ.setAttribute("r","20");
    circ.setAttribute("fill","red");
    circ.setAttribute("stroke","black");
    pic.appendChild(circ);
};

var clear = function(){
    while (pic.lastChild) {
            pic.removeChild(pic.lastChild);
    };
};


pic.addEventListener('click', function(evt){
    drawCirc(evt);
});

b = document.getElementById("clear");
b.addEventListener("click", clear);
