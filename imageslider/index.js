const slides=document.querySelectorAll(".slide")
let counter=0;
slides.forEach((slide,index)=>{
slide.style.left=`${index*100}%`
})

let goprev=()=>{
    counter--;
    if (counter < 0) { counter = slides.length - 1; }
    slideimage();
}
let gonext=()=>{
    counter++;
    if (counter >= slides.length) { counter = 0; }
    slideimage();
}

let slideimage=()=>{
    slides.forEach(
        (slide)=>{
slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}