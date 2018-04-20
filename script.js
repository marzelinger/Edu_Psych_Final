$(document).ready(function () {

  var circle = document.getElementById("circle");
  circle.addEventListener('mouseover', function(){

    circle.style.color = "#212121";
    circle.style.boxShadow = "3px 3px 3px #212121";
    // circle.style.border = "solid 1px #212121";
  })
  circle.addEventListener('mouseout', function(){

    circle.style.color = "#AED581";
    // circle.style.border = "none";
    circle.style.boxShadow = "none";
  })
  circle.addEventListener('click', function(){
    $('html, body').animate({
      scrollTop: $("#photo").offset().top
    }, 2000);

  })

  var linkArray = document.getElementsByClassName("nbitem")
  console.log(linkArray)
  for(var i = 0; i < linkArray.length; i ++){
    var elem = linkArray[i];
    console.log(elem);
    elem.addEventListener('mouseover', function(){
      console.log("mouse over")
      this.style.color = "#212121";
    })
    elem.addEventListener('mouseout', function(){
      this.style.color = "white";
    })
  }
  // var i = 0;
  var ids = ["#description", "#info", "#cite"]
  // var arrow = document.getElementsByClassName("arrow")
  // arrow.addEventListener('click', function(){
  //
  // })
  document.getElementById("arrowpic1").addEventListener('click', function(){
    nextID = ids[0];
    console.log(i)
    $('html, body').animate({
      scrollTop: $(nextID).offset().top
    }, 2000);
  });
  document.getElementById("arrowpic2").addEventListener('click', function(){
    nextID = ids[1];
    console.log(i)
    $('html, body').animate({
      scrollTop: $(nextID).offset().top
    }, 2000);
  });
  document.getElementById("arrowpic3").addEventListener('click', function(){
    nextID = ids[2];
    console.log(i)
    $('html, body').animate({
      scrollTop: $(nextID).offset().top
    }, 2000);
  });

  //stop floating and get bigger
  var b1=true;
  var b2=true;
  var b3=true;
  var baloon1 = $('#card1');
  var baloon2 = $('#card2');
  var baloon3 = $('#card3');

  var conditionals = [b1, b2, b3];
  var functions = [runIt1(), runIt2(),runIt3()];
  var baloons = [baloon1, baloon2, baloon3]
  var baloonIn;

  b1 = true;
  baloon1.mouseenter(function(){
    if(b1){
      baloon1.clearQueue().stop();
      baloon1.removeClass('bigger',500)
      baloon1.css("boxShadow","2px 2px 2px white");
      baloon1.addClass('bigger',500);
    }
  })
  baloon1.mouseleave(function(){
    if(b1){
      baloon1.css("boxShadow","")
      baloon1.removeClass('bigger',500);
      runIt1();
    }
  })
inSimulation = false;
  baloon1.click(function(){
    if(!inSimulation){
      baloon1.clearQueue().stop();
      baloon1.removeClass('bigger',500);
      baloon1.animate({top:'0'});
      baloon3.clearQueue().stop();
      baloon2.clearQueue().stop();
      $('#ic1').toggleClass('square',1000);
      baloon1.toggleClass('chosen1',1000);
      b1 = !b1;
      if(document.getElementById("clicktext1").innerHTML == "Click to Begin"){
        document.getElementById("clicktext1").innerHTML = "Click Again to Begin the Simulation"
        inSimulation = true;
      }
      else if(document.getElementById("clicktext1").innerHTML == "Click to Exit"){
        // $("#canvas3").hide();
        document.getElementById("clicktext1").innerHTML = "Click to Begin";
      }
    }
    else{
    $('#ic1').css("display", "none");
    $("#canvas1").show( "slide",2000)
    document.getElementById("clicktext1").innerHTML = "Click to Exit";
    }
  })


  baloon2.mouseenter(function(){
    if(b2){
      baloon2.clearQueue().stop();
      baloon2.clearQueue().stop();
      baloon2.css("boxShadow","2px 2px 2px white");
      baloon2.addClass('bigger',500);
    }
  })
  baloon2.mouseleave(function(){
    if(b2){
      baloon2.css("boxShadow","")
      baloon2.removeClass('bigger',500);
      runIt2();
    }
  })
  baloon2.click(function(){
    if(!inSimulation){
      baloon2.clearQueue().stop();
      baloon2.removeClass('bigger',500);
      baloon2.animate({top:'0'});
      baloon3.clearQueue().stop();
      baloon1.clearQueue().stop();
      $('#ic2').toggleClass('square',1000);
      baloon2.toggleClass('chosen2',1000);
      b2 = !b2;
      if(document.getElementById("clicktext2").innerHTML == "Click to Begin"){
        document.getElementById("clicktext2").innerHTML = "Click Again to Begin the Simulation"
        inSimulation = true;
      }
      else if(document.getElementById("clicktext2").innerHTML == "Click to Exit"){
        // $("#canvas3").hide();
        document.getElementById("clicktext2").innerHTML = "Click to Begin";
      }
    }
    else{
    $('#ic2').css("display", "none");
    $("#canvas2").show( "slide",2000)
    document.getElementById("clicktext2").innerHTML = "Click to Exit";
    }
  })

  baloon3.mouseenter(function(){
    if(b3){
      baloon3.clearQueue().stop();
      baloon3.css("boxShadow","2px 2px 2px white");
      baloon3.addClass('bigger',500);
    }
  })
  baloon3.mouseleave(function(){
    if(b3){
      baloon3.css("boxShadow","")
      baloon3.removeClass('bigger',500);
      runIt3();
    }
  })
  baloon3.click(function(){
    if(!inSimulation){
      baloon3.clearQueue().stop();
      baloon3.removeClass('bigger',500);
      baloon3.animate({top:'0'});
      baloon2.clearQueue().stop();
      baloon1.clearQueue().stop();
      $('#ic3').toggleClass('square',1000);
      baloon3.toggleClass('chosen3',1000);
      b3 = !b3;
      if(document.getElementById("clicktext3").innerHTML == "Click to Begin"){
        document.getElementById("clicktext3").innerHTML = "Click Again to Begin the Simulation"
        inSimulation = true;
      }
      else if(document.getElementById("clicktext3").innerHTML == "Click to Exit"){
        // $("#canvas3").hide();
        document.getElementById("clicktext3").innerHTML = "Click to Begin";
      }
    }
    else{
    // startSimulation1();
    $('#ic3').css("display", "none");
    $("#canvas3").show( "slide",2000)
    document.getElementById("clicktext3").innerHTML = "Click to Exit";
    }
  })

  // floating functions
  function runIt1() {
    baloon1.animate({top:'20'}, 1500);
    baloon1.animate({top:'-20'}, 1500, runIt1);
  }
  runIt1();

  function runIt2() {
    baloon2.animate({top:'20'}, 1500);
    baloon2.animate({top:'-20'}, 1500, runIt2);
  }
  runIt2();

  function runIt3() {
    baloon3.animate({top:'20'}, 1500);
    baloon3.animate({top:'-20'}, 1500, runIt3);
  }
  runIt3();
})
