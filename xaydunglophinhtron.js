let Cirle = function (radius, color) {

    this.getRadius = function () {
        return radius;
    }

    this.getColor = function () {
        return color;
    }

    this.getArea = function () {
        return Math.PI*Math.pow(radius,2);
    }
}
let cirle =  new Cirle(2, "red");
let radius = cirle.getRadius();
let area = cirle.getArea();
let color = cirle.getColor()
alert("radius: " + radius + "; area: " + area + "; color" + color);
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();