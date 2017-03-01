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

var iid;
var growShrink = function(){
    var r = 50;
    var grow = true;
    var circ = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle");
    var redrawDot = function(){
        if (grow){
            r++;
            if (r * 2 >= 250){
                grow = false;
                r--;
            };
        } else {
            r--;
            if (r <= 0){
                grow = true;
                r++;
            };
        };
        circ.setAttribute("cx",250);
        circ.setAttribute("cy",250);
        circ.setAttribute("r",r);
        circ.setAttribute("fill","blue");
        circ.setAttribute("stroke","black");
        pic.appendChild(circ);
    };
    iid = setInterval(redrawDot,10);//interval id
};

//dvd
var iid2;
var dvd = function(){
    //init params
    var r = 50;
    var xcor = 100;
    var ycor = 100;
    var vy = 2;
    var vx = 1;
    var t = 1; // time of one step
    var circ = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle");
    var redrawDot = function(){
        //ball
        xcor = xcor + vx * t;
        ycor = ycor + vy * t;
        if (xcor > 500 - r || xcor < 0 + r ){
            xcor = xcor - vx * t;
            vx = -1 * vx;
            xcor = xcor + vx * t;
        };
        if (ycor > 500 - r || ycor < 0 + r){
            ycor = ycor - vy * t;
            vy = -1 * vy;
            ycor = ycor + vy * t;
        };
        circ.setAttribute("cx" ,xcor);
        circ.setAttribute("cy",ycor);
        circ.setAttribute("r",r);
        circ.setAttribute("fill","blue");
        circ.setAttribute("stroke","black");
        pic.appendChild(circ);
    };
    iid2 = setInterval(redrawDot,10);//interval id
};

var clear = function(){
    window.clearInterval(iid);
    window.clearInterval(iid2);
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

g = document.getElementById("growShrink");
g.addEventListener("click", growShrink);

d = document.getElementById("dvd");
d.addEventListener("click", dvd);
