var on = document.querySelector(".btn-on")
var off = document.querySelector(".btn-off")
var span = document.querySelector(".container-btn span")
var box = document.querySelector(".box-btn")
var imgLight = document.querySelector(".container-img img")
var body = document.querySelector("body")


function checkOnOff (){
    if(imgLight.getAttribute("src")== "./light-off.png"){
        imgLight.setAttribute("src", "./light-on.png")
        document.querySelector("body").style.cssText = " background-color: #ebe687;"
    }else{
        imgLight.setAttribute("src", "./light-off.png")
        body.style.cssText = "background-color: bluesky;"
    }
}



off.addEventListener("click", function(){
    span.style.cssText = "left:50%;"
    checkOnOff()
})
on.addEventListener("click", function(){
    span.style.cssText = "left: var(--parameters);"
    checkOnOff()
})

span.addEventListener("click", function(){
    if (span.style.left == "50%"){
        span.style.left = "var(--parameters)" 
        checkOnOff()
    }
    else{    
        span.style.left = "50%"
        checkOnOff()
    }
})
