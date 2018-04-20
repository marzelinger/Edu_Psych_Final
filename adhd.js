
var adhd = function(a){
  var game_state = false
  var currTime = 0
  var numRain = 10
  var sizeRange = 50
  var speedRange = 1.5
  var bell;
  var classroom;
  var traffic;
  var skipping;
  var intro = true;
  var regular = false;
  var sound = false;
  var visual = false;
  var lastScene = false;

  function ball() {
    this.radius = Math.floor(Math.random() * 20 + sizeRange)
    this.xloc = Math.random() * a.width
    this.yloc = 0
    this.speed = Math.random()*2 + speedRange
    this.r = Math.random() * 255
    this.g = Math.random() * 255
    this.b = Math.random() * 255
    this.hit = false
    this.display = function() {
      a.fill(this.r, this.g, this.b, this.yloc*.5)
      a.ellipse(this.xloc, this.yloc, this.radius, this.radius)
    }
  }
  var a1 = Math.random() * 255
  var a2 = Math.random() * 255
  var a3 = Math.random() * 255
  var rain = []
  var pastFrame = 0;
  var reading = false;

  a.setup = function(){
    var canvasDiv = document.getElementById('canvas2');
    var w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // console.log(w);
    var canvas2 = a.createCanvas(w, h);
    canvas2.parent('canvas2');
    a.background('white');
    a.time();
    document.addEventListener('keydown', e => {
      if (e.keyCode == '39') {
        a.nextScene();
      }
    });
  }

  a.draw = function(){
    // console.log(regular)
    if(reading){
      a.fill(33,33,33)
      a.rect(a.width/2 - 50, 100, 50, 50)
      a.textAlign(a.CENTER);
      a.textSize(30)
      a.fill('white')
      a.text(currTime,a.width/2-25, 135);
    }
    if(intro){
      a.textSize(15);
      a.textAlign(a.CENTER)
      a.fill(33,33,33)
      a.text("ADHD, or Attention Deficit/Hyperactivity Disorder, is a brain-based syndrome that has to do with the regulation of brain operations called executive functioning skills. These skills include important aspects of every day life such as attention, concentration, memory, motivation and effort, learning from mistakes, impulsivity, hyperactivity, organization and social skills. The following simulation will ask you to read with increasing levels of distractions.  Pay attention to how long it takes you to read each paragraph. Click the right arrow key on your keyboard to continue through the stages. When you finish reading, click anywhere outside of the arrow to stop the timer.", 0, 30, a.width, a.height);
    }
    else if(regular){
      // console.log("here")
      a.textSize(15);
      a.textAlign(a.CENTER)
      a.fill(33,33,33)
      a.text("In the first step of this simulation, you will read a paragraph that will appear below. Click on the simulation to see the paragraph and click again when you have finished reading.", 0, 30, a.width, a.height);
      a.textSize(15);
      a.textAlign(a.CENTER)
      a.fill(33,33,33)
      if(reading){
        a.text("Jane Goodall was born in London, England, on April 3, 1934. On her second birthday, her father gave her a toy chimpanzee named Jubilee. Jubilee was named after a baby chimp in the London Zoo, and seemed to foretell the course Jane's life would take. To this day, Jubilee sits in a chair in Jane's London home. From an early age, Jane was fascinated by animals and animal stories. By the age of 10, she was talking about going to Africa to live among the animals there. At the time, in the early 1940s, this was a radical idea because women did not go to Africa by themselves. As a young woman, Jane finished school in London, attended secretarial school, and then worked for a documentary filmmaker for a while. When a school friend invited her to visit Kenya, she worked as a waitress until she had earned the fare to travel there by boat. She was 23 years old.", 0, 200, a.width, a.height);
      }

    }
    else if(visual){
      a.textSize(15);
      a.textAlign(a.CENTER)
      a.fill(33,33,33)

      a.text("You will once again be reading a paragraph that will appear below. However, some things will be different this time. Feel free to move your mouse around after you click. Click on the simulation to see the paragraph and start the timer, then click again when you have finished reading.", 0, 30, a.width, a.height);

      a.textSize(15);
      a.textAlign(a.CENTER)
      a.fill('white')
      if(reading){
        a.text("Once in Kenya, she met Dr. Louis Leakey, a famous paleontologist and anthropologist. He was impressed with her thorough knowledge of Africa and its wildlife, and hired her to assist him and his wife on a fossil-hunting expedition to Olduvai Gorge. Dr. Leakey soon realized that Jane was the perfect person to complete a study he had been planning for some time. She expressed her interest in the idea of studying animals by living in the wild with them, rather than studying dead animals through paleontology.Dr. Leakey and Jane began planning a study of a group of chimpanzees who were living on the shores of Lake Tanganyika in Kenya. At first, the British authorities would not approve their plan. At the time, they thought it was too dangerous for a woman to live in the wilds of Africa alone. But Jane's mother, Vanne, agreed to join her so that she would not be alone.", 0, 200, a.width,a.height);
      }
      if(reading){
        if (a.frameCount % 60 == 0) {
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
          if (rain[i].yloc > a.height + 50) {
            rain[i]
            rain.splice(i, 1)
            i = i - 1
          }
          else if (Math.abs(a.mouseX - Math.round(rain[i].xloc)) <= rain[i].radius && Math.abs(a.mouseY - Math.round(rain[i].yloc)) <= rain[i].radius) {
            rain.splice(i, 1)
            i = i - 1
          }

          finished = rain.length
        }
      }
    }
    else if(lastScene){
      a.textSize(15);
      a.textAlign(a.CENTER)
      a.fill(33,33,33)
      a.text("You may have noticed that it took you much longer to read the paragraph the second time around. Although both paragraphs were 160 words long, trying to complete any task when severely distracted puts you at an extreme disadvantage. Imagine you had been competing against a friend and they had the first example while you had the second. Although you couldn't control the distractions, they were likely detrimental to your reading ability. Although colored circles aren't flying across the page of every student with ADHD, their ability to ignore distractions is such that every day occurences like talking and noises of traffic may have a similar consequence.", 0, 30, a.width, a.height);
      a.text("Click anywhere on the page to exit this simulation. Feel free to continue trying other simulations or continue onto the next section of this website to learn about how to work with students that have ADHD in the classroom.",0, 200, a.width, a.height)
      a.textAlign(a.CENTER)
      if(a.mouseIsPressed && a.frameCount - pastFrame > 100){
        a.remove();
        $('#canvas2').hide();
        $('#ic2').show();
        lastScene = false;
        inSimulation = false;
      }
    }
  }

a.time = function(){
  console.log("here")
  var timer = setInterval(function() {
    currTime = currTime + 1
  }, 1000)
}

a.nextScene = function(){
  console.log("keyPressed")
  a.clear();
    console.log("????")
    if(intro==true){
      console.log("?")
      intro = false;
      regular = true;
    }
    else if(regular== true){
      console.log(regular)
      regular = false;
      visual = true;
      console.log(regular);
    }
    else if(visual==true){
      visual = false
      lastScene = true;
    }
    reading = false;
    a.clear();
    a.background('white');
    pastFrame = a.frameCount
    currTime = 0;
}
a.clickedArrow = function(x, y){
  if((x >= a.width - 200) && (x<= a.width - 50) && (y >= a.height - 120) && (y <= a.height - 120 + 80)){
    return true;
  }
  return false;
}
a.windowResized= function() {
  w = .85*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  h = .55*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  a.resizeCanvas(w, h);
  a.background('white');
}
a.mouseClicked = function(){
  if(!intro && !a.clickedArrow(a.mouseX, a.mouseY)){
    reading = !reading;
    // console.log(reading);
    if(reading){
      currTime = 0;
    }
  }
}
}
var adhd = new p5(adhd);
