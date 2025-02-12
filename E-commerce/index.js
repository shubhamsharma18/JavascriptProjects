const menu=document.querySelector('.menu');
const sidebar=document.querySelector('.sidebar');
const cancel=document.querySelector('.cancel');
console.log(cancel);

function showbar(){
    sidebar.style.display='block';
}
menu.addEventListener('click',showbar);
function hidebar(){
    sidebar.style.display='none';
}
cancel.addEventListener('click',hidebar);