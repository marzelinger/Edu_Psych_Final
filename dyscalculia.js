var intro = true;
var showAssignments = false;
var challenge1 = false;
var endScene = false;
var teaching = false;
var currTime = 0;
var go = false;
count1 = true;
count2 = false;
count3 = false;
var timer;
var correct = false;
var discalculia = function(p){
p.setup = function(){
  var canvasDiv = document.getElementById('canvas1');
  var w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var canvas1 = p.createCanvas(w, h);
  canvas1.parent('canvas1');
  p.background('white');
  document.addEventListener('keydown', e => {
    if (e.keyCode == '39') {
      p.nextScene();
    }
    else if(e.keyCode == '40'){
      p.nextCount();
    }
  });
}

p.draw = function(){
  p.clear();
  p.background('white');
if(intro){
  p.textSize(15);
  p.textAlign(p.CENTER)
  p.fill(33,33,33)
  p.text("Dyscalculia is a difficulty learning or comprehending arithmetic. Specifically, individuals with this learning disability may have poor comprehension of math symbols, may struggle with memorizing and organizing numbers, and may have difficulty telling time amongst other things. In this simulation you will experience one of the symptoms of this disability in which people visualize numbers as meaningless symbols. On the next page you will be given a set of symbols, each of which will represent a number. The symbol is placed dip.rectly above the number it is now representing. You will only be given 30 seconds to absorb these symbols. You will then be put through two challenges in which you need to count or perform math using the symbols shown to you. Use the right arrow key on your keyboard to progress through the simulation. ", 0, 30, p.width, p.height);
}
else if(showAssignments){
  p.textSize(15);
  p.textAlign(p.CENTER)
  p.fill(33,33,33)
  p.text("When you click on the screen you will see symbols and the numbers they are now equivalent to. Once you click a timer will begin, giving you 30 seconds to memorize these new symbols.", 0, 30, p.width, p.height);
  if(go){
  p.writeTime(p.width/2, 120, currTime)
  p.printSyms1(200);
  p.drawSym(p.width/2 - 200,300,"1")
  p.drawSym(p.width/2 - 100,300,"2")
  p.drawSym(p.width/2,300,"3")
  p.drawSym(p.width/2 + 100,300,"4")
  p.drawSym(p.width/2 + 200,300,"5")
  }
  if(currTime == 30){
    go = false;
    showAssignments = false;
    challenge1 = true;
  }
}
else if(challenge1){
  clearTimeout(timer);
  p.textSize(15);
  p.textAlign(p.CENTER)
  p.fill(33,33,33)
  if(correct){
    p.background(174,213,129);
  }
  p.text("Now you've had time to learn these new numbers you're going to use them. You are given a picture of each symbol below as well as a certain number of squares to count. When you click on the correct symbol the p.background will turn green. Click the down arrow on your keyboard to proceed to the next counting challenge. When you finish the final challenge use the right arrow key to continue.", 0, 30, p.width, p.height);
  if(count1){
    p.printSyms2(140);
    p.fill('white')
    p.rect(p.width/2-100, 200, 20, 20);
    p.rect(p.width/2, 200, 20, 20);
    p.rect(p.width/2+100, 200, 20, 20);
    if(p.mouseIsPressed){
      if(p.dist(p.mouseX, p.mouseY, p.width/2 + 200, 120)<50){
        console.log("hit")
        correct = true;
      }
    }
  }
  if(count2){
    p.printSyms3(140);
    p.fill('white')
    p.rect(p.width/2-200, 200, 20, 20);
    p.rect(p.width/2-100, 200, 20, 20);
    p.rect(p.width/2+100, 200, 20, 20);
    p.rect(p.width/2+200, 200, 20, 20);
    if(p.mouseIsPressed){
      if(p.dist(p.mouseX, p.mouseY, p.width/2 - 100, 120)<50){
        console.log("hit")
        correct = true;
      }
    }
  }
  if(count3){
    p.printSyms3(140);
    p.fill('white')
    p.rect(p.width/2-150, 200, 20, 20);
    p.rect(p.width/2-100, 200, 20, 20);
    p.rect(p.width/2-50, 200, 20, 20);
    p.rect(p.width/2, 200, 20, 20);
    p.rect(p.width/2+50, 200, 20, 20);
    p.rect(p.width/2+100, 200, 20, 20);
    p.rect(p.width/2+150, 200, 20, 20);
  }
}
else if(endScene){
  p.textSize(15);
  p.textAlign(p.CENTER)
  p.fill(33,33,33)
  p.text("You have p.clearly noticed that there was no symbol representing the number of squares in the last challenge, 7. The sense of frustration you most likely felt when figuring this out is a feeling that students with learning disabilities must feel and overcome constantly. In these excercises it was most likely easy for you to count the number of squares, but difficult for you to associate the symbols with the concept of how many things you saw. Click anywhere on the page to exit this simulation. From there you will be able to either check out the other simulations or continue to the next section of this website to see information on how to help students with this learning disability in the classroom.", 0, 30, p.width, p.height);
  if(p.mouseIsPressed){
      p.remove();
      $('#canvas1').hide();
      $('#ic1').show();
      endScene = false;
      inSimulation = false;
  }
}

}
p.windowResized = function() {
  w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  p.resizeCanvas(w, h);
  p.background('white');
}
p.nextScene = function(){
  p.clear();
    if(intro==true){
      intro = false;
      showAssignments= true;
    }
    else if(showAssignments== true){
      showAssignments = false;
      challenge1 = true;
    }
    else if(challenge1==true){
      challenge1= false
      endScene = true;
    }
    p.clear();
    p.background('white');
}
p.nextCount = function(){
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
p.time = function() {
  console.log("here")
  timer = setInterval(function() {
    currTime = currTime + 1
  }, 1000)
}

p.drawSym = function(x,y,sym){
  p.fill(33,33,33)
  p.ellipse(x, y, 50, 50)
  p.textSize(32)
  p.fill('white')
  p.text("" + sym, x, y+10);
}
p.writeTime= function(x,y,sym){
  p.fill('white')
  p.ellipse(x, y, 50, 50)
  p.textSize(32)
  p.fill(33,33,33)
  p.text("" + sym, x, y+10);
}
p.mouseClicked= function(){
  if(go == false){
  p.time();
  }
  go = true;
}
p.printSyms1=function(y){
  p.drawSym(p.width/2 - 200,y,"$")
  p.drawSym(p.width/2 - 100,y,"*")
  p.drawSym(p.width/2,y,"%")
  p.drawSym(p.width/2 + 100,y,"#")
  p.drawSym(p.width/2 + 200,y,"?")
}
p.printSyms2=function(y){
  p.drawSym(p.width/2 - 200,y,"*")
  p.drawSym(p.width/2 - 100,y,"?")
  p.drawSym(p.width/2,y,"#")
  p.drawSym(p.width/2 + 100,y,"$")
  p.drawSym(p.width/2 + 200,y,"%")
}
p.printSyms3 = function(y){
  p.drawSym(p.width/2 - 200,y,"%")
  p.drawSym(p.width/2 - 100,y,"#")
  p.drawSym(p.width/2,y,"*")
  p.drawSym(p.width/2 + 100,y,"?")
  p.drawSym(p.width/2 + 200,y,"$")
}
p.printSyms4= function(y){
  p.drawSym(p.width/2 - 200,y,"?")
  p.drawSym(p.width/2 - 100,y,"#")
  p.drawSym(p.width/2,y,"$")
  p.drawSym(p.width/2 + 100,y,"%")
  p.drawSym(p.width/2 + 200,y,"*")
}
}
var discalculia = new p5(discalculia);
