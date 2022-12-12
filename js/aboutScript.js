$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    nav:true,
    navText:['<i class="fa-solid fa-arrow-left"></i>' , '<i class="fa-solid fa-arrow-right"></i>'],
    dots:false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1,
        },
        // breakpoint from 480 up
        576 : {
            items:1,
        },
        // breakpoint from 768 up
        768 : {
            items:2,
        },
        992 :{
            items:4
        }
    }

})
// circle canvas
var canvas = document.getElementById('box')
var ctx = canvas.getContext('2d')
var radius= 50;
var endPercent= 70;
var CurPer= 0;
var circ= Math.PI*2;
var quart= Math.PI*2;
ctx.lineWidth= 10;
ctx.strokeStyle= "black";
function draw(currentPerc)
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc('70', '100', radius, -quart, (circ*currentPerc)-quart, false);
    ctx.stroke();

CurPer++;
if(CurPer<endPercent)
{
    requestAnimationFrame (function ()
    {
        draw(CurPer/100);
    });
}
}
draw();

// circle1 canvas
var canvasOne = document.getElementById("box-one");
var ctxOne = canvasOne.getContext("2d");
var radius = 50;
var endPercentOne = 85;
var CurPerOne = 0;
var circOne = Math.PI * 2;
var quartOne = Math.PI * 2;
ctxOne.lineWidth = 10;
ctxOne.strokeStyle = "black";
function drawOne(currentPercOne) {
  ctxOne.clearRect(0, 0, canvasOne.width, canvasOne.height);
  ctxOne.beginPath();
  ctxOne.arc("70", "100", radius, -quartOne, circOne * currentPercOne - quartOne, false);
  ctxOne.stroke();

  CurPerOne ++;
  if (CurPerOne < endPercentOne) {
    requestAnimationFrame(function () {
      drawOne(CurPerOne / 100);
    });
  }
}
drawOne();

// circle2 canvas
var canvasTwo = document.getElementById("box-two");
var ctxTwo = canvasTwo.getContext("2d");
var radius = 50;
var endPercentTwo = 80;
var CurPerTwo = 0;
var circTwo = Math.PI * 2;
var quartTwo = Math.PI * 2;
ctxTwo.lineWidth = 10;
ctxTwo.strokeStyle = "black";
function drawTwo(currentPercTwo) {
  ctxTwo.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
  ctxTwo.beginPath();
  ctxTwo.arc(
    "70",
    "100",
    radius,
    -quartTwo,
    circTwo * currentPercTwo - quartTwo,
    false
  );
  ctxTwo.stroke();

  CurPerTwo++;
  if (CurPerTwo < endPercentTwo) {
    requestAnimationFrame(function () {
      drawTwo(CurPerTwo / 100);
    });
  }
}
drawTwo();

// circle3 canvas
var canvasThree = document.getElementById("box-three");
var ctxThree = canvasThree.getContext("2d");
var radius = 50;
var endPercentThree = 95;
var CurPerThree = 0;
var circThree = Math.PI * 2;
var quartThree = Math.PI * 2;
ctxThree.lineWidth = 10;
ctxThree.strokeStyle = "black";
function drawThree(currentPercThree) {
  ctxThree.clearRect(0, 0, canvasThree.width, canvasThree.height);
  ctxThree.beginPath();
  ctxThree.arc(
    "70",
    "100",
    radius,
    -quartThree,
    circThree * currentPercThree - quartThree,
    false
  );
  ctxThree.stroke();

  CurPerThree ++;
  if (CurPerThree < endPercentThree) {
    requestAnimationFrame(function () {
      drawThree(CurPerThree / 100);
    });
  }
}
drawThree();

let ctr1= document.getElementById("ctr1")
let ctr2= document.getElementById("ctr2")
let ctr3= document.getElementById("ctr3")
let ctr4= document.getElementById("ctr4")


let flag = true
function counter(ctr, endNum, interval, time=100){
    let i=0
    let set = setInterval(()=>{
        if ( i==endNum){
            clearInterval(set)
        }
        ctr.innerText=i
        i +=interval
    },time)
    flag= false
} 

window.addEventListener('scroll', function(){

    if( document.documentElement.scrollTop > 1100 ){
     if(flag){

         counter(ctr1, 8000,2000 )
         counter(ctr2, 810, 10,10)
         counter(ctr3, 2000, 200)
         counter(ctr4, 20, 5)
     }
    }
    if( document.documentElement.scrollTop > 200 ){
        scrollBtn.style.display ="block"
    }
    else {scrollBtn.style.display ="none"}
})