

let inputemail=document.getElementById('inputemail')
let inputpass=document.querySelector("#inputpassword")
let erroremail=document.querySelector(".erroremail")
let errorpass=document.querySelector(".errorpass")
console.log(inputpass);

let btn=document.querySelector("button")
console.log(btn);

btn.addEventListener("click",()=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;

    let emailans=emailRegex.test(inputemail.value)
    let passans=passwordRegex.test(inputpass.value)

    erroremail.textContent=""
    errorpass.textContent=""
let v=true

    if(!emailans){
erroremail.textContent="invalid email"
erroremail.style.color="red"
v=false
    }

        if(!passans){
errorpass.textContent="invalid password"
errorpass.style.color="red"
v=false
    }


    if(v){
        Swal.fire({
            title: "Waiting for confirmation...",
            icon: "info",
            showConfirmButton: false,
            scrollbarPadding: false,   // ✅ REQUIRED FIX
        });

        
        setTimeout(() => {
         window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        },3000);      

}
})