// Credit to Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];
var words = [
  "Hello World.",
  "I'm",
  "Magdy",
  "Yacoub",
  "Software",
  "enthusiast.",
  "Eat",
  "Sleep",
  "Code",
  "Repeat.",
];
var j = 0;
var timer = 0;

function preload() {
  font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  createCanvas(800, 300);
  background(51);
  shangeWord();
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

  //setInterval(shangeWord, 2000);
  if (millis() >= 2500 + timer) {
    shangeWord();
    timer = millis();
  }
}

function shangeWord() {
  var points = font.textToPoints(words[j], 0, 0, 100, {
    sampleFactor: 0.25,
  });
  let bounds = font.textBounds(words[j], 0, 0, 100)

  
  vehicles.splice(0);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    pt.x = pt.x + width/2 - bounds.w/2;
    pt.y = pt.y + height/2 - bounds.y - bounds.h/2;
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  j = (j + 1) % words.length;
}
