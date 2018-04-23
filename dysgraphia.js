
var dysgraphia = function(p){
  var w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var dysintro = true;
  var sceneOne = false;
  var sceneTwo = false;
  var sceneThree = false;
  var dysendScene = false;
  x = 10
  y = 20
  var pastFrame = 0;
  var dysteaching = false;

  p.drawArrow = function(){
    p.fill(33,33,33)
    p.rect(p.width - 200, p.height - 120, 90, 50);
    p.triangle(p.width - 200 + 90, p.height - 120 + 80, p.width - 200 + 90, p.height - 150, p.width - 50, p.height - 120 + 25)
  }

  p.clickedArrow = function(x,y){
    if((x >= p.width - 200) && (x<= p.width - 50) && (y >= p.height - 120) && (y <= p.height - 120 + 80)){
      return true;
    }
    return false;
  }
  p.windowResized = function(){

    p.resizeCanvas(w, h);
    p.background('white');
    p.drawArrow();
  }

p.setup = function(){

  var canvasDiv = document.getElementById('canvas3');

  var canvas3 = p.createCanvas(w, h);
  canvas3.parent('canvas3');
  // canvas.style()
  p.background('white');
}

p.draw = function(){
// console.log(p.frameCount);
  if(dysintro){
    p.textSize(15);
    p.textAlign(p.CENTER)
    p.fill(33,33,33)
    p.text("Dysgraphia affects a person's handwriting ability and fine motor skills. People with this learning disability may have problems including illegible handwriting, inconsistent spacing, and have difficulty composing writing as well as thinking and writing at the same time.  This simulation will allow you to understand what it feels like to have little to no control over the quality of your writing abilities. This particular activity will focus on the illegible writing symptom. At each stage you will be asked to write your name on the screen by holding the mouse down over this area. When you finish writing your name, click on the arrow to increase the level of difficulty you will have writing. ", 0, 30, p.width, p.height);
    p.textSize(15);
    p.drawArrow();
    if(p.mouseIsPressed){
      if(p.clickedArrow(p.mouseX, p.mouseY)){
        dysintro = false;
        sceneOne = true;
        p.clear();
        p.background('white');
        pastFrame = p.frameCount;
      }
    }
  }
  if(sceneOne){
    p.textSize(20);
    p.textAlign(p.CENTER)
    p.fill(33,33,33)
    p.text("Hold down your mouse to write, write your full name.", p.width/2, 30);
    p.textSize(15);
    p.text("Click the arrow in the right corner to continue.", p.width/2, 60);
    if(p.mouseIsPressed){
      if(p.clickedArrow(p.mouseX, p.mouseY) && p.frameCount - pastFrame > 100){
        console.log("clicked mouse");
        sceneOne = false;
        sceneTwo = true;
        p.clear();
        p.background('white');
        pastFrame = p.frameCount;
      }
      else{
        p.fill(33,33,33)
        p.ellipse(p.mouseX, p.mouseY, 5, 5);
      }
    }
    p.drawArrow();
  }
  else if(sceneTwo){
    console.log("scene two");
    p.textSize(20);
    p.textAlign(p.CENTER)
    p.fill(33,33,33)
    p.text("Hold down your mouse to write, write your full name.", p.width/2, 30);
    p.textSize(15);
    p.text("Click the arrow in the right corner to continue.", p.width/2, 60);
    p.drawArrow();
    if(p.mouseIsPressed){
      if(p.clickedArrow(p.mouseX, p.mouseY) && p.frameCount - pastFrame > 100){
        sceneTwo = false;
        sceneThree = true;
        p.clear();
        p.background('white');
        p.drawArrow();
        pastFrame = p.frameCount;
      }
      else{
        p.fill(33,33,33)
        if(p.frameCount % 60 == 0){
        x = Math.random()*20;
        y = Math.random()*20;
        }
      p.ellipse(p.mouseX + x, p.mouseY + y, 5, 5);
      }
    }
  }
  else if(sceneThree){
      console.log("scene three");
    p.fill(33,33,33)
    p.textSize(20);
    p.textAlign(p.CENTER)
    p.fill(33,33,33)
    p.text("Hold down your mouse to write, write your full name.", p.width/2, 30);
    p.textSize(15);
    p.text("Click the arrow in the right corner to continue.", p.width/2, 60);
    p.drawArrow();
    if(p.mouseIsPressed){
      if(p.clickedArrow(p.mouseX, p.mouseY) && p.frameCount - pastFrame > 100){
        console.log("?")
        sceneThree = false;
        dysteaching = true;
        pastFrame = p.frameCount;
        p.clear();
        p.background('white');
      }
      else{
        p.fill(33,33,33)
        if(p.frameCount % 30 == 0){
        x = Math.random()*40;
        y = Math.random()*40;
        }
      p.ellipse(p.mouseX + x, p.mouseY + y, 5, 5);
      }
    }
  }
  else if(dysteaching){
    p.textSize(20);
    p.fill(33,33,33)
    p.textAlign(p.CENTER)
    p.text("How can you help students with dysgraphia in the classroom?",0, 30, p.width, p.height)
    p.textSize(15);
    p.drawArrow();
    p.text("While students with dysgraphia may not have their pen jumping around the page as they write, they do have to endure the same frustration that you experienced while trying to express something that you clearly understood, like your name. To help students with dysgraphia in the classroom you can begin by building up their confidence. Giving them a way to express their ideas without encountering the struggle of writing will show them that they are capable of learning the material. Some alternatives include allowing a student to use a keyboard or using videos/audio recordings. Once they are confident in themselves, you can begin to address their handwriting. Short bursts of handwriting excercises, as well as working with them to fix their handwriting posture can help them improve their writing abilities.", 0, 60, p.width, p.height);
    if(p.mouseIsPressed){
      if(p.clickedArrow(p.mouseX, p.mouseY) && p.frameCount - pastFrame > 100){
        dysteaching = false;
        dysendScene = true;
        p.clear();
        p.background('white');
        pastFrame = p.frameCount;
      }
    }
  }
  else if(dysendScene){
    p.textSize(20);
    p.fill(33,33,33)
    p.textAlign(p.CENTER)
    p.text("Click anywhere on the page to exit this simulation. From there you can either try a different experience, or move onto the next section of this website for information on how to work with students that have this learning disability.", 0, 30, p.width, p.height);
    if(p.mouseIsPressed && p.frameCount - pastFrame > 100){
        // p.remove();
        $('#canvas3').css("display","none");
        $('#ic3').show();
        dysendScene = false;
        inSimulation = false;
        dysintro = true;
        sceneOne = false;
        sceneTwo = false;
        sceneThree = false;
        dysendScene = false;
        x = 10
        y = 20
        pastFrame = 0;
        dysteaching = false;
        clear();
        background('white');
    }
  }
}

}

var dysgraphia = new p5(dysgraphia);
