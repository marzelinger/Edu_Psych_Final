
var discalculia = function(m){
  var dyscalcintro = true;
  var showAssignments = false;
  var challenge1 = false;
  var dyscalcendScene = false;
  var dyscalcteaching = false;
  var currTime = 0;
  var go = false;
  var count1 = true;
  var count2 = false;
  var count3 = false;
  var timer;
  var correct = false;

m.setup = function(){
  var canvasDiv = document.getElementById('canvas1');
  var w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var canvas1 = m.createCanvas(w, h);
  canvas1.parent('canvas1');
  m.background('white');
  document.addEventListener('keydown', e => {
    if (e.keyCode == '39') {
      m.nextScene();
    }
    else if(e.keyCode == '40'){
      m.nextCount();
    }
  });
}

m.draw = function(){
  m.clear();
  m.background('white');
if(dyscalcintro){
  m.textSize(15);
  m.textAlign(m.CENTER)
  m.fill(33,33,33)
  m.text("Dyscalculia is a difficulty learning or comprehending arithmetic. Specifically, individuals with this learning disability may have poor comprehension of math symbols, may struggle with memorizing and organizing numbers, and may have difficulty telling time amongst other things. In this simulation you will experience one of the symptoms of this disability in which people visualize numbers as meaningless symbols. On the next page you will be given a set of symbols, each of which will represent a number. The symbol is placed dim.rectly above the number it is now representing. You will only be given 30 seconds to absorb these symbols. You will then be put through two challenges in which you need to count or perform math using the symbols shown to you. Use the right arrow key on your keyboard to progress through the simulation. ", 0, 30, m.width, m.height);
}
else if(showAssignments){
  m.textSize(15);
  m.textAlign(m.CENTER)
  m.fill(33,33,33)
  m.text("When you click on the screen you will see symbols and the numbers they are now equivalent to. Once you click a timer will begin, giving you 30 seconds to memorize these new symbols.", 0, 30, m.width, m.height);
  if(go){
  m.writeTime(m.width/2, 120, currTime)
  m.printSyms1(200);
  m.drawSym(m.width/2 - 200,300,"1")
  m.drawSym(m.width/2 - 100,300,"2")
  m.drawSym(m.width/2,300,"3")
  m.drawSym(m.width/2 + 100,300,"4")
  m.drawSym(m.width/2 + 200,300,"5")
  }
  if(currTime == 30){
    go = false;
    showAssignments = false;
    challenge1 = true;
  }
}
else if(challenge1){
  clearTimeout(timer);
  m.textSize(15);
  m.textAlign(m.CENTER)
  m.fill(33,33,33)
  if(correct){
    m.background(174,213,129);
  }
  m.text("Now you've had time to learn these new numbers you're going to use them. You are given a picture of each symbol below as well as a certain number of squares to count. When you click on the correct symbol the m.background will turn green. Click the down arrow on your keyboard to proceed to the next counting challenge. When you finish the final challenge use the right arrow key to continue.", 0, 30, m.width, m.height);
  if(count1){
    m.printSyms2(140);
    m.fill('white')
    m.rect(m.width/2-100, 200, 20, 20);
    m.rect(m.width/2, 200, 20, 20);
    m.rect(m.width/2+100, 200, 20, 20);
    if(m.mouseIsPressed){
      if(m.dist(m.mouseX, m.mouseY, m.width/2 + 200, 120)<50){
        console.log("hit")
        correct = true;
      }
    }
  }
  else if(count2){
    m.printSyms3(140);
    m.fill('white')
    m.rect(m.width/2-200, 200, 20, 20);
    m.rect(m.width/2-100, 200, 20, 20);
    m.rect(m.width/2+100, 200, 20, 20);
    m.rect(m.width/2+200, 200, 20, 20);
    if(m.mouseIsPressed){
      if(m.dist(m.mouseX, m.mouseY, m.width/2 - 100, 120)<50){
        console.log("hit")
        correct = true;
      }
    }
  }
  else if(count3){
    m.printSyms3(140);
    m.fill('white')
    m.rect(m.width/2-150, 200, 20, 20);
    m.rect(m.width/2-100, 200, 20, 20);
    m.rect(m.width/2-50, 200, 20, 20);
    m.rect(m.width/2, 200, 20, 20);
    m.rect(m.width/2+50, 200, 20, 20);
    m.rect(m.width/2+100, 200, 20, 20);
    m.rect(m.width/2+150, 200, 20, 20);
  }
}
else if(dyscalcteaching){
  m.textSize(30);
  m.textAlign(m.CENTER)
  m.fill(33,33,33)
  m.text("How can you help students with dyscalculia in the classroom?", 0, 30, m.width, m.height);
  m.textSize(15);
  m.text("You clearly noticed that there was no symbol representing the number of squares in the last challenge. The sense of frustration you felt while figuring this out is a feeling that students with learning disabilities must feel and overcome constantly. In these excercises it was most likely easy for you to count the number of squares, but difficult for you to associate the symbols with the concept of how many things you saw. The key problem for dyscalculic learners is retaining basic facts and math procedures in their long term memory. Many aspects of math, particularly in the earlier years rely on rote learing such as time tables. However, if you teach students to understand, they will be more likely to succeed. Revisiting things over and over again, explaining and showing why, and identifying and interpretting errors are all ways to help students understand rather than memorize.", 0, 100, m.width, m.height);
}
else if(dyscalcendScene){
  // console.log('dyscalcendScene')
  m.textSize(15);
  m.textAlign(m.CENTER)
  m.fill(33,33,33)
  m.text("Click anywhere on the page to exit this simulation. From there you will be able to check out the other simulations.", 0, 30, m.width, m.height);
  if(m.mouseIsPressed){
      // m.remove();
      $('#canvas1').css("display", "none");
      $('#ic1').show();
      dyscalcendScene = false;
      inSimulation = false;
      dyscalcintro = true;
      showAssignments = false;
      challenge1 = false;
      dyscalcendScene = false;
      dyscalcteaching = false;
      currTime = 0;
      go = false;
      count1 = true;
      count2 = false;
      count3 = false;
      correct = false;
  }
}

}
m.windowResized = function() {
  w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  m.resizeCanvas(w, h);
  m.background('white');
}
m.nextScene = function(){
  m.clear();
  // console.log(dyscalcdyscalcteaching)
    if(dyscalcintro==true){
      dyscalcintro = false;
      showAssignments= true;
    }
    else if(showAssignments== true){
      showAssignments = false;
      challenge1 = true;
    }
    else if(challenge1==true){
      challenge1= false
      dyscalcteaching = true;
    }
    else if(dyscalcteaching==true){
      // console.log("change dyscalcteaching to dyscalcendScene")
      dyscalcteaching = false
      dyscalcendScene = true;
    }
    m.clear();
    m.background('white');
    currTime = 0;
}
m.nextCount = function(){
    correct = false;
    if(count1 == true){
      count1 = false
      count2 = true;
    }
    else{
      count2 = false;
      count3 = true;
    }
  }
m.time = function() {
  console.log("here")
  timer = setInterval(function() {
    currTime = currTime + 1
  }, 1000)
}

m.drawSym = function(x,y,sym){
  m.fill(33,33,33)
  m.ellipse(x, y, 50, 50)
  m.textSize(32)
  m.fill('white')
  m.text("" + sym, x, y+10);
}
m.writeTime= function(x,y,sym){
  m.fill('white')
  m.ellipse(x, y, 50, 50)
  m.textSize(32)
  m.fill(33,33,33)
  m.text("" + sym, x, y+10);
}
m.mouseClicked= function(){
  if(go == false){
  m.time();
  }
  go = true;
}
m.printSyms1=function(y){
  m.drawSym(m.width/2 - 200,y,"$")
  m.drawSym(m.width/2 - 100,y,"*")
  m.drawSym(m.width/2,y,"%")
  m.drawSym(m.width/2 + 100,y,"#")
  m.drawSym(m.width/2 + 200,y,"?")
}
m.printSyms2=function(y){
  m.drawSym(m.width/2 - 200,y,"*")
  m.drawSym(m.width/2 - 100,y,"?")
  m.drawSym(m.width/2,y,"#")
  m.drawSym(m.width/2 + 100,y,"$")
  m.drawSym(m.width/2 + 200,y,"%")
}
m.printSyms3 = function(y){
  m.drawSym(m.width/2 - 200,y,"%")
  m.drawSym(m.width/2 - 100,y,"#")
  m.drawSym(m.width/2,y,"*")
  m.drawSym(m.width/2 + 100,y,"?")
  m.drawSym(m.width/2 + 200,y,"$")
}
m.printSyms4= function(y){
  m.drawSym(m.width/2 - 200,y,"?")
  m.drawSym(m.width/2 - 100,y,"#")
  m.drawSym(m.width/2,y,"$")
  m.drawSym(m.width/2 + 100,y,"%")
  m.drawSym(m.width/2 + 200,y,"*")
}
}
var discalculia = new p5(discalculia);
