var game_state = false
var currTime = 0
var numRain = 10
var sizeRange = 50
var speedRange = 1.5
var bell;
var classroom;
var traffic;
var skipping;
//implement a click to play, need a transition --> have an arrow appear on the right that will cause the screen to slide off to the left
function preload(){
  bell = loadSound('bell.mp3');
  traffic = loadSound('traffic.mp3');
  classroom = loadSound('classroom.mp3');
  skipping = loadSound('skipping.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  time();
  // canv.parent("header");
  // canvas.style.width = '100%';
  // canvas.style.height = '100%';
  // ...then set the internal size to match
  // canvas.width  = canvas.offsetWidth;
  // canvas.height = canvas.offsetHeight;
}

function ball() {
  this.radius = Math.floor(Math.random() * 20 + sizeRange)
  this.xloc = Math.random() * windowWidth
  this.yloc = 0
  this.speed = Math.random()*2 + speedRange
  this.r = Math.random() * 255
  this.g = Math.random() * 255
  this.b = Math.random() * 255
  this.hit = false
  this.display = function() {
    fill(this.r, this.g, this.b, this.yloc*.5)
    ellipse(this.xloc, this.yloc, this.radius, this.radius)
  }
}
var a1 = Math.random() * 255
var a2 = Math.random() * 255
var a3 = Math.random() * 255
var rain = []

function draw() {
  if (classroom.isPlaying() ) { // .isPlaying() returns a boolean
    classroom.stop();
  } else {
    classroom.play();
  }
  if (frameCount % 60 == 0) {
    if (rain.length == 0) {
      console.log("won")
    }
    for (var i = 0; i < numRain; i++) {
      rain.push(new ball())
    }
  }
  var finished = rain.length
  for (var i = 0; i < finished; i++) {
    rain[i].display()
    rain[i].yloc += rain[i].speed
    if (rain[i].yloc > windowHeight + 50) {
      rain[i]
      rain.splice(i, 1)
      i = i - 1
      // break
    }
    // console.log("mouse is at" + mouseX + " ball is at: " + rain[i].xloc)
    else if (Math.abs(mouseX - Math.round(rain[i].xloc)) <= rain[i].radius && Math.abs(mouseY - Math.round(rain[i].yloc)) <= rain[i].radius) {
      // if (currTime > 10) {
      rain.splice(i, 1)
      i = i - 1
      // }
    }

    finished = rain.length
  }
  fill(0)
  rect(50, 50, 100, 100)
  textAlign(CENTER);
  textSize(30)
  fill(255)
  text(currTime,100, 100);
}

function lose() {
  game_state = true

}

function time() {
  console.log("here")
  var timer = setInterval(function() {
    currTime = currTime + 1
    // checkLevel(currTime)
  }, 1000)
}

function mousePressed(){
  console.log("mouse")
  // currTime = 26
}
