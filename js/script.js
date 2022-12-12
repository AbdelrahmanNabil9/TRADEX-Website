
    
    $('.owl-carousel').owlCarousel({
        items:2,
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
                items:1,
            },
            992 :{
                items:2
            }
        }
    
    })

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

    if( document.documentElement.scrollTop > 900 ){
     if(flag){

         counter(ctr1, 8000,2000 )
         counter(ctr2, 810, 10,10)
         counter(ctr3, 2000, 200)
         counter(ctr4, 20, 5)
     }
    }
    if( document.documentElement.scrollTop > 300 ){
        scrollBtn.style.display ="block"
    }
    else scrollBtn.style.display ="none"
})

