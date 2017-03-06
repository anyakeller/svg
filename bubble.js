var svg =document.getElementById("vimage");

var makeCirc = function(x,y,r,fill,stroke){
    var circ = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle");
    circ.setAttribute("cx",x);
    circ.setAttribute("cy",y);
    circ.setAttribute("r",r);
    circ.setAttribute("fill",fill);
    circ.setAttribute("stroke",stroke);
    return(circ);
};

var bub = function(evt){
    circ = makeCirc(evt.offsetX,evt.offsetY,25,"red","black");
    circ.addEventListener("click",function(evt){
        evt.stopPropagation();
        this.setAttribute("fill","blue");
        this.setAttribute("stroke","black");
    },true);
    svg.appendChild(circ);
};


var clear = function(){
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    };
};

svg.addEventListener("click",bub);

b = document.getElementById("clear");
b.addEventListener("click", clear);

