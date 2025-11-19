let fname = document.querySelector("#name")
let courses = document.querySelector(".courses")
let password = document.querySelector("#password")
let form=document.querySelector("form")
let pname = document.querySelector(".pname")
let pcourse = document.querySelector(".pcourse")
let ppassword = document.querySelector(".ppassword")
let showbtn=document.querySelector(".show")



// password show hide module
showbtn.addEventListener("click",(e)=>{
    
    
    if(e.target.textContent==="show"){
password.setAttribute("type","text")
 showbtn.textContent="hide"

    }
    else{
        password.setAttribute("type","password")
        showbtn.textContent="show"
    }
    
})



function textDisplay(text) {
    pname.textContent = "Name-" + text
}
function courseDisplay(text) {
    pcourse.textContent = "Course-" + text
}
function passwordStrength(password) {
    if (!password) {
            ppassword.textContent = "Password Strength-"
            return
    }
     if (/\d/.test(password) && /_/.test(password) && password.length>6) {
            ppassword.textContent = "Password Strength-" + "Hard"
        }
        else if ((/\d/.test(password) || /_/.test(password)) && password.length>5) {
            ppassword.textContent = "Password Strength-" + "Medium"
        }
       else if (password.length <= 4) {
            ppassword.textContent = "Password Strength-" + "Weak"
        }
    }



fname.addEventListener("input", (e) => {
    textDisplay(e.target.value)

})
courses.addEventListener("change", (e) => {
    courseDisplay(e.target.value);

})
password.addEventListener("input", (e) => {
    passwordStrength(e.target.value)
})


console.log(form);
form.addEventListener("submit",(e)=>{
e.preventDefault()


})