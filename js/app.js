

 let selectionCountry = document.getElementById('selectCountry');
 let selectionCategory = document.getElementById('selectCategory');
 let searchQuery = document.getElementById('search');
 let results = document.getElementById('result');

document.getElementById('searchbtn').addEventListener('click', loadUsers);

function loadUsers(){

  var country = selectionCountry.options[selectionCountry.selectedIndex].value;  
  var category = selectionCategory.options[selectionCategory.selectedIndex].value;

const URL = 'https://newsapi.org/v2/top-headlines?q='+searchQuery.value+'&apiKey=ff55591e19c74c018563bc1852ae1dde&country='+country+'&category='+category+'&q=&page=1&pageSize=50'
const news = document.querySelector('.news')

console.log(URL)
fetch(URL)
   .then(data => data.json())

   .then(response => {
      // const totalArticles = response.totalResults;
       const articles = response.articles

       let newsItem = ''
       articles.forEach(article => {
         newsItem += `
         
     <div class="news-item">
             <div class="news-image">
                  <img src = "${article.urlToImage}"width="320" height="220"></img>
             </div>
          <div class="news-title">   
             <h1> ${article.title} </h1> 
          </div>
          <div class="news-desc">
             <p> ${article.description} </p>   
          </div>
          <div class="news-url"> 
             <a href="${article.url}">Go To This Page</a>
          </div>  
          <div class="news-published"> 
          <a href="${article.published}">Published:</a>
       </div>  
      </div>`
       });
       
       news.innerHTML = newsItem;

   })

   .catch(error => {
  
   })
 }


