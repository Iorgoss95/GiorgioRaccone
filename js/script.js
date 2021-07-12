//javascript file dor my personal site



//get backgrund color and set to content property of meta tag
let color = window.getComputedStyle(document.querySelector(".top-container")).backgroundColor;
document.querySelector("meta[name='theme-color']").setAttribute("content", color);

const btn = document.querySelector(".btn-toggle");
let i = 2;
btn.addEventListener("click", function () {

    document.body.classList.remove("theme-" + (i - 1))
    document.body.classList.add("theme-" + i);

    //get backgrund color and set to content property of meta tag
    let color = window.getComputedStyle(document.querySelector(".top-container")).backgroundColor;
    document.querySelector("meta[name='theme-color']").setAttribute("content", color);

    if (i > 5) {
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
});



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
    console.log(pctScrolled + ' num % scrolled')
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

    document.querySelector(".scrollbar").setAttribute("style", "transform: translateY("+( amountscrolled() -100)+"vh)");

}, false)

    


