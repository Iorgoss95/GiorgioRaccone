//javascript file dor my personal site


//get background color and set to content property of meta tag
let color = window.getComputedStyle(document.querySelector(".top-container")).backgroundColor;
document.querySelector("meta[name='theme-color']").setAttribute("content", color);

const btn = document.querySelectorAll(".btn-toggle");
let i = 2;

function clickButton() {
    document.body.classList.remove("theme-" + (i - 1))
    document.body.classList.add("theme-" + i);
    
    //get backgrund color and set to content property of meta tag
    let color = window.getComputedStyle(document.querySelector(".top-container")).backgroundColor;
    document.querySelector("meta[name='theme-color']").setAttribute("content", color);
    
    if (i > 3) {
        //i > of number oh themes in _colors.scss file
        document.body.classList.remove("theme-" + (i))
        i = 2;
        document.body.classList.add("theme-" + (i - 1));
        //get backgrund color and set to content property of meta tag
        let color = window.getComputedStyle(document.querySelector(".top-container")).backgroundColor;
        document.querySelector("meta[name='theme-color']").setAttribute("content", color);
        
    }
    else {
        i++;
    }
}

btn.forEach(item => {
    item.addEventListener("click", clickButton)
})



//--DYNAMIC SCROLLBAR-----------------------------------
var winheight, docheight, trackLength, throttlescroll;
 
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

function getmeasurements(){
    winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    docheight = getDocHeight()
    trackLength = docheight - winheight
}
 
function amountscrolled(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    return pctScrolled;
}
 
getmeasurements()
 
window.addEventListener("resize", function(){
    getmeasurements()
}, false)
 
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
        amountscrolled()
    }, 50)

    document.querySelector(".scrollbar").setAttribute("style", "transform: translateY("+( amountscrolled() -99.5)+"vh)");

}, false)


//loading elemnts on scroll-----------------------------

var parent=document.getElementById("parent-div");
const element = document.querySelectorAll(".opacity");

window.onscroll = function(){
    element.forEach(item => {
       
        if(document.documentElement.scrollTop>=item.offsetTop -800){
            item.classList.add("no-opacity");
        }
        /*
        else if(document.documentElement.scrollTop<=item.offsetTop-900){
            item.classList.remove("no-opacity");
        }
        */
        

    })

};

