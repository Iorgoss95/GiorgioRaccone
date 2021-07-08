

const btn = document.querySelector(".btn-toggle");
let i = 2;

console.log("pre button  " + i);
btn.addEventListener("click", function () {
    document.body.classList.remove("theme-" + (i - 1))
    console.log("removed " + (i - 1), "add " + i);
    document.body.classList.add("theme-" + i);
    if (i > 6) {
        //i > of number oh themes in _colors.scss file
        document.body.classList.remove("theme-" + (i))
        console.log("remove" + i);
        i = 2;
        document.body.classList.add("theme-" + (i - 1));
        console.log("add" + (i - 1));
    }
    else {
        i++;
    }
});