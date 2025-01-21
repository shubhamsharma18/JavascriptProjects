// Define the API key for accessing the News API
const apiKey = '5f3ff090194047638a3ca4eaf2799803';

// Get references to DOM elements
const main = document.getElementById("main");
const searchField = document.querySelector(".search-box"); // Use querySelector for a single element
const searchBtn = document.getElementById("search-btn");

// Event listener for the search button
searchBtn.addEventListener("click", async () => {
    // Get the search query from the input field
    const query = searchField.value;

    // Proceed only if the query is not empty
    if (query !== "") {
        try {
            // Fetch articles based on the search query
            const articles = await fetchNewsQuery(query);
            // Display the fetched articles
            displayBlogs(articles);
        } catch (error) {
            console.error("Fetching problem in search:", error);
        }
    }
});

// Function to fetch news articles based on a search query
async function fetchNewsQuery(query) {
    try {
        // Construct the API URL with the search query
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=15&apikey=${apiKey}`;
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Return the articles from the response
        return data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        return []; // Return an empty array in case of an error
    }
}

// Function to fetch random news articles
async function randomNews() {
    try {
        // Construct the API URL for top headlines
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`;
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Return the articles from the response
        return data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        return []; // Return an empty array in case of an error
    }
}

// Function to display the articles in the main section
function displayBlogs(articles) {
    // Clear the existing content in the main section
    main.innerHTML = "";

    // Iterate over each article to create and append blog cards
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        // Create and append the image element
        const img = document.createElement("img");
        img.src = article.urlToImage; // Set the image source
        img.alt = article.title; // Set the alt text

        // Create and append the title element
        const title = document.createElement("h2");
        title.textContent = article.title; // Set the title text

        // Create and append the description element
        const description = document.createElement('p');
        description.textContent = article.description; // Set the description text

        // Append image, title, and description to the blog card
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);

        // Append the blog card to the main section
        main.appendChild(blogCard);

        // Add a click event to open the article in a new tab
        blogCard.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });
    });
}

// Immediately invoked function to fetch and display random news on page load
(async () => {
    try {
        // Fetch random news articles
        const articles = await randomNews();
        // Display the fetched articles
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
})();