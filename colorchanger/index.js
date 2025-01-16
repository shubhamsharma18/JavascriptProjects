const startbutton=document.querySelector("#start")
const body=document.querySelector("body")
const stopbutton=document.querySelector("#stop")
let random=function(){
    const hex='0123456789abcdef'
    let color='#'
    for(let i=0;i<6;i++){
        color=color+hex[Math.round(Math.random()*16)]
    }
    return color
}
let interval;
const startcolor=function(){
   
   
      function bgcolorchange() {
        document.body.style.backgroundColor=random()
    }
    interval=setInterval(bgcolorchange,1000)
  
   
}

let stopcolor=function(){
clearInterval(interval);

}
startbutton.addEventListener('click',startcolor)
stopbutton.addEventListener('click',stopcolor)
