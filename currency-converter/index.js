
const baseurl="https://latest.currency-api.pages.dev/v1/currencies"

const dropdowns=document.querySelectorAll('.dropdown select')
const btn=document.querySelector('button')
const fromcurr=document.querySelector('.from select')
const tocurr=document.querySelector('.to select')

for(let select of dropdowns){
    for(currcode in countryList ){
        let newoption=document.createElement('option')
        newoption.innerText=currcode
        newoption.value=currcode;
        select.append(newoption)
        if(select.name==="from" && currcode==="USD"){
            newoption.selected="selected"
        }
        else if(select.name==="to" && currcode==="INR"){
            newoption.selected="selected"
        }
       
    }
     select.addEventListener("change",(event)=>{
        changeflag(event.target);
        
        })
}



const changeflag=(event)=>{

let currcode=event.value;
let countrycode=countryList[currcode];
let newsrc=`https://flagsapi.com/${countrycode}/shiny/64.png`
let img=event.parentElement.querySelector('img')
img.src=newsrc

}
btn.addEventListener("click",async(event)=>{
    event.preventDefault();
    let ammount=document.querySelector('.ammount input')
    let ammvalue=ammount.value

    if (ammvalue==="" || ammvalue<0) {
        ammvalue=1
        ammount.value="1"
    }
   //console.log(fromcurr.value,tocurr.value);
 const url = `${baseurl}/${fromcurr.value.toLowerCase()}.json`;

let response = await fetch(url);       // ✅ Wait for the response
let data = await response.json();      // ✅ Wait for JSON conversion



// Example: data.usd.inr => 83.12
let fromCurrency = fromcurr.value.toLowerCase(); // e.g. 'usd'
let toCurrency = tocurr.value.toLowerCase();     // e.g. 'inr'
let amount = parseFloat(ammount.value);        // amount entered by user

let conversionRate = data[fromCurrency][toCurrency]; // e.g. data['usd']['inr']


let convertedAmount = amount * conversionRate;
const outputElement=document.querySelector('.msg')
outputElement.innerText = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

   
    
 
    
})