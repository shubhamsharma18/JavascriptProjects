const apiKey='5f3ff090194047638a3ca4eaf2799803'
const main=document.getElementById("main")

const searchfield=document.getElementsByClassName("search-box")
const searchbtn=document.getElementById("search-btn")



searchbtn.addEventListener("click",async ()=>{
    const query=searchfield.value
    if(query!==""){
        try{
            const articles=await fetchNewsQuery(query)
            displayblogs(articles)

        }
        catch{
            console.log(error,"fetching problem in search")
        }
    }

})
async function fetchNewsQuery(query){

    try{
        const apiUrl=`https://newsapi.org/v2/everything?q=${query}&pageSize=15&apikey=${apiKey}`
       const response= await fetch(apiUrl)
       const data= await response.json();
      return data.articles

    }
    catch(error){
        console.log("error fetching news", error);
        return[]
    }


}

async function randomNews(){
    try{
        const apiUrl='https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey='+ apiKey
       const response= await fetch(apiUrl)
       const data= await response.json();
      return data.articles

    }
    catch(error){
        console.log("error fetching news", error);
        return[]
    }

}
 function displayblogs(articles){
    main.innerHTML=""
    articles.forEach((article) => {
        const blogCard=document.createElement("div")
        blogCard.classList.add("blog-card")

        const img=document.createElement("img")
        img.src=article.urlToImage
        img.alt=article.title


        const title=document.createElement("h2")
        title.textContent=article.title
        const description=document.createElement('p')
        description.textContent=article.description


        blogCard.appendChild(img)
        
        blogCard.appendChild(title)
        
        blogCard.appendChild(description)

        main.appendChild(blogCard)


        blogCard.addEventListener("click",()=>{
            window.open(article.url,"_blank")
        })
    });

}

(async()=>{
    try{    
        const articles=await randomNews()
        displayblogs(articles)

    }
    catch(error){
        console.log("error fetching news", error);
        
    }
})();