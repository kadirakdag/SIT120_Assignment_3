// variables

const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "468971e7efe84593816bd69e7bd2ae62";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    fetchTechnologyNews();
};

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="frame";

        var frame = document.createElement('div');
        frame.className = "frame-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var frameBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "news-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="button";
        link.href = news.url;
        link.innerHTML="Read more";

        frameBody.appendChild(newsHeading);
        frameBody.appendChild(dateHeading);
        frameBody.appendChild(discription);
        frameBody.appendChild(link);

        frame.appendChild(image);
        frame.appendChild(frameBody);

        col.appendChild(frame);

        newsdetails.appendChild(col);
    });

}