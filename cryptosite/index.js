let main = document.querySelector("html")
var crsr=document.querySelector(".cursor")
main.addEventListener("mousemove",function(event){
    
   crsr.style.top=event.clientY+"px"
   crsr.style.left=event.clientX+"px"
});