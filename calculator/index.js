let input=document.getElementById("input-box")
let buttons=document.querySelectorAll("input[type='button']")
let string=""
let arr=Array.from(buttons)
arr.forEach(buttons=>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.value==="="){
            string=eval(string);
            input.style.color="rgb(18, 247, 18)";
            input.value=string;
        }
        else if(e.target.value=="AC" || e.target.value=="Del"){
            if(e.target.value=="AC"){
                string="";
                input.value=string
            }
            else{
                string=string.slice(0,-1);
                input.value=string
            }
        }
        else{
        string+=e.target.value;
        input.value=string;
        }    
          
    }
         
)

})

