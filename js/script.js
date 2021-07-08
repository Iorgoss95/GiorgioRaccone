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

    if (i > 6) {
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





