const apikey="cb5f1d607fe93a66407d6f5f122bdbf1"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
async function checkweather(city){
    const response=await fetch(apiUrl + city +`&appid=${apikey}`);


    if(response.status== 404){
        document.querySelector(".error").style.display="block"
         document.querySelector(".weather").style.display="none"
    }else{
        var data=await response.json();
  


        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    
        if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png"
        }
    
        
        
        else if(data.weather[0].main=="Clear"){
               weathericon.src="images/sunnny.png"
        }
        else if(data.weather[0].main=="Rain"){
               weathericon.src="images/rainy.png"
        }
        document.querySelector(".weather").style.display="block"
             document.querySelector(".error").style.display="none"
    }
    
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
