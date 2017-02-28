var pic=document.getElementById("vimage");

var x = -1;
var y = -1;

var drawCirc = function(evt){
    if (x < 0){
        x = evt.offsetX;//clientX - rect.left,
        y = evt.offsetY;//clientY - rect.top
    }else{
        var line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line");
        line.setAttribute("x1",x);
        line.setAttribute("y1",y);
        x = evt.offsetX;//clientX - rect.left,
        y = evt.offsetY;//clientY - rect.top
        line.setAttribute("x2",x);
        line.setAttribute("y2",y);
        line.setAttribute("stroke","black");
        pic.appendChild(line);
    };
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
    x = -1;
    y = -1;
};


pic.addEventListener('click', function(evt){
    drawCirc(evt);
});

b = document.getElementById("clear");
b.addEventListener("click", clear);
