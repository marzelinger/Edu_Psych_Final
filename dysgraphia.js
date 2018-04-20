var intro = true;
var sceneOne = false;
var sceneTwo = false;
var sceneThree = false;
var endScene = false;
x = 10
y = 20
var pastFrame = 0;
function setup(){
  var canvasDiv = document.getElementById('canvas3');
  var w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var canvas = createCanvas(w, h);
  canvas.parent('canvas3');
  // canvas.style()
  background('white');
}

function draw(){
// console.log(frameCount);
  if(intro){
    textSize(15);
    textAlign(CENTER)
    fill(33,33,33)
    text("Dysgraphia affects a person's handwriting ability and fine motor skills. People with this learning disability may have problems including illegible handwriting, inconsistent spacing, and have difficulty composing writing as well as thinking and writing at the same time.  This simulation will allow you to understand what it feels like to have little to no control over the quality of your writing abilities. This particular activity will focus on the illegible writing symptom. At each stage you will be asked to write your name on the screen by holding the mouse down over this area. When you finish writing your name, click on the arrow to increase the level of difficulty you will have writing. ", 0, 30, width, height);
    textSize(15);
    drawArrow();
    if(mouseIsPressed){
      if(clickedArrow(mouseX, mouseY)){
        intro = false;
        sceneOne = true;
        clear();
        background('white');
        pastFrame = frameCount;
      }
    }


  }
  if(sceneOne){
    textSize(20);
    textAlign(CENTER)
    fill(33,33,33)
    text("Hold down your mouse to write, write your full name.", width/2, 30);
    textSize(15);
    text("Click the arrow in the right corner to continue.", width/2, 60);
    if(mouseIsPressed){
      if(clickedArrow(mouseX, mouseY) && frameCount - pastFrame > 100){
        console.log("clicked mouse");
        sceneOne = false;
        sceneTwo = true;
        clear();
        background('white');
        pastFrame = frameCount;
      }
      else{
        fill(33,33,33)
        ellipse(mouseX, mouseY, 5, 5);
      }
    }
    drawArrow();
  }
  else if(sceneTwo){
    console.log("scene two");
    textSize(20);
    textAlign(CENTER)
    fill(33,33,33)
    text("Hold down your mouse to write, write your full name.", width/2, 30);
    textSize(15);
    text("Click the arrow in the right corner to continue.", width/2, 60);
    drawArrow();
    if(mouseIsPressed){
      if(clickedArrow(mouseX, mouseY) && frameCount - pastFrame > 100){
        sceneTwo = false;
        sceneThree = true;
        clear();
        background('white');
        drawArrow();
        pastFrame = frameCount;
      }
      else{
        fill(33,33,33)
        if(frameCount % 60 == 0){
        x = Math.random()*20;
        y = Math.random()*20;
        }
        ellipse(mouseX + x, mouseY + y, 5, 5);
      }
    }
  }
  else if(sceneThree){
      console.log("scene three");
    fill(33,33,33)
    textSize(20);
    textAlign(CENTER)
    fill(33,33,33)
    text("Hold down your mouse to write, write your full name.", width/2, 30);
    textSize(15);
    text("Click the arrow in the right corner to continue.", width/2, 60);
    drawArrow();
    if(mouseIsPressed){
      if(clickedArrow(mouseX, mouseY) && frameCount - pastFrame > 100){
        console.log("?")
        sceneThree = false;
        endScene = true;
        pastFrame = frameCount;
        clear();
        background('white');
      }
      else{
        fill(33,33,33)
        if(frameCount % 30 == 0){
        x = Math.random()*40;
        y = Math.random()*40;
        }
        ellipse(mouseX + x, mouseY + y, 5, 5);
      }
    }
  }
  else if(endScene){
    textSize(20);
    fill(33,33,33)
    textAlign(CENTER)
    text("Hopefully this experience will help you be more understanding of students with this learning disability in the future! Click anywhere on the page to exit this simulation. From there you can either try a different experience, or move onto the next section of this website for information on how to work with students that have this learning disability.", 0, 30, width, height);
    if(mouseIsPressed && frameCount - pastFrame > 100){
        remove();
        $('#canvas3').hide();
        $('#ic3').show();
        endScene = false;
        inSimulation = false;
    }
  }
}

function drawArrow(){
  fill(33,33,33)
  rect(width - 200, height - 120, 90, 50);
  triangle(width - 200 + 90, height - 120 + 80, width - 200 + 90, height - 150, width - 50, height - 120 + 25)
}

function clickedArrow(x, y){
  if((x >= width - 200) && (x<= width - 50) && (y >= height - 120) && (y <= height - 120 + 80)){
    return true;
  }
  return false;
}
function windowResized() {
  w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  resizeCanvas(w, h);
  background('white');
  drawArrow();
}
