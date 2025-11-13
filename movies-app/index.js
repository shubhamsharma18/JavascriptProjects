const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const getDataPopularMovies=async(api)=>{
    const response=await fetch(api)
    const data= await response.json()

    popularMovies(data.results)

    
}
getDataPopularMovies(APIURL)

function popularMovies(moviesData){
    //   let baseUrl ="https://image.tmdb.org/t/p/w500/"

      //trying on existing card to change image to know everything works fine...
const cards=document.querySelector(".cards")
// const img=document.querySelector(".img-card img")
// img.setAttribute("src",`${baseUrl}${moviesData[0].poster_path}`)
// console.log(moviesData[0].poster_path);

moviesData.forEach(movie => {
        let baseUrl ="https://image.tmdb.org/t/p/w342"

    let div=document.createElement("div")
    div.classList.add("img-container")
    let imgCard=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",`${baseUrl}${movie.poster_path}`)
    img.style.height="380px"  //because height of img-container 370 i want fit img in div


    let imgInfo=document.createElement("div")
    imgInfo.classList.add("img-info")


    
    let titlediv=document.createElement("div")
    titlediv.classList.add("title")

    let h3=document.createElement("h3")
    h3.textContent=`${movie.title}`
    h3.style.color="#8b040aff"

    let rating=document.createElement("div")
    rating.classList.add("rating")
    rating.textContent=`${movie.vote_average}`
    rating.style.color="orange"

    titlediv.append(h3)
    titlediv.append(rating)


    let h4=document.createElement("h4")
    h4.textContent="Overview"
    
    let p=document.createElement("p")
    p.textContent=`${movie.overview}`

    // Now we append everything in correct order and parent is img-contaner


    imgCard.append(img)
    imgInfo.append(titlediv)

    imgInfo.append(h4)
    imgInfo.append(p)
    imgCard.append(imgInfo)
    div.append(imgCard)
    cards.append(div)


});

}
