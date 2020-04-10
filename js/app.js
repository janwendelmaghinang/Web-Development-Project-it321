
   
   let selectionCountry = document.getElementById('selectCountry');
   let selectionCategory = document.getElementById('selectCategory');
   let selectionSources = document.getElementById('selectSources');
   let searchQuery = document.getElementById('search');
   let btnSearch = document.querySelector('#searchbtn');
   const res = document.querySelector('.resultCount')
   
   const source = document.querySelector('.form-source');
   const country = document.querySelector('.form-country');
   const category = document.querySelector('.form-category');
   const themeBtn = document.querySelector('.theme-change');
   const btnChange = document.querySelector('.source');
   const themes = document.querySelector('#theme');
   const toggle = document.querySelector('.fas');


 themeBtn.onclick = function (){
     themes.classList.toggle('light')
     themes.classList.toggle('dark')
     toggle.classList.toggle('fa-toggle-off')
     toggle.classList.toggle('fa-toggle-on')
 }

 btnChange.onclick = function (){
      
      source.classList.toggle('form-show')
      country.classList.toggle('fhide')
      category.classList.toggle('fhide')

      source.classList.toggle('form-source')
      country.classList.toggle('form-country')
      category.classList.toggle('form-category')

      selectionCategory.options.selectedIndex = 0;
      selectionCountry.options.selectedIndex = 6;

       if(source.className == "form-source"){
         a();
        }
        if(source.className == "form-show"){
         b();
        }
     }
        if(source.className == "form-source"){
            a();
        } 

         // const URL = 'https://newsapi.org/v2/top-headlines?&apiKey=ff55591e19c74c018563bc1852ae1dde&country=ph&category=health&page=1&pageSize=50'
         // const news = document.querySelector('.news')
         // fetch(URL)
         //    .then(data => data.json())
         //    .then(response => {
         //       const articles = response.articles
         //       console.log(articles)
         //       let newsItem = ''
         //       articles.forEach(article => {
         //          newsItem += `
         //          <div class="news-item">
         //             <div class="news-image">
         //                   <img src = "${article.urlToImage}"></img>
         //             </div>
         //          <div class="news-title">   
         //             <h1> ${article.title} </h1> 
         //          </div>
         //          <div class="news-source"> 
         //             <h1>${article.source.name}</h1>
         //             </div>
         //          <div class="news-desc">
         //             <p> ${article.description}</p>   
         //          </div>
         //          <div class="news-url"> 
         //             <a href="${article.url}">Go To Page</a>
         //          </div>  
         //          <div class="news-published">
         //               <h1>${article.publishedAt}</h1>
         //          </div>
         //       </div>`
         //       });
         //       news.innerHTML = newsItem;
         //    })
         //    .catch(error => {
         
         //    })


   function a(){
            btnSearch.onclick = function loadUsers(){ 
                var country = selectionCountry.options[selectionCountry.selectedIndex].value;  
                var category = selectionCategory.options[selectionCategory.selectedIndex].value;

                const URL = 'https://newsapi.org/v2/top-headlines?q='+searchQuery.value+'&apiKey=ff55591e19c74c018563bc1852ae1dde&country='+country+'&category='+category+'&q=&page=1&pageSize=50'
                const news = document.querySelector('.news')
                
                fetch(URL)
                   .then(data => data.json())
                   .then(response => {
                      const articles = response.articles
                      //console.log(articles[0])
                      localStorage.setItem('bookmarks', JSON.stringify(articles))
                      let resu=''
                       resu += `<h1>You have${response.totalResults} Results</h1>`
                     res.innerHTML = resu;
                      let newsItem = ''
                      articles.forEach(article => {
                         newsItem += `
                         <div class="news-item">
                            <div class="news-image">
                                  <img src = "${article.urlToImage}"></img>
                            </div>
                         <div class="news-title">   
                            <h1> ${article.title} </h1> 
                         </div>
                         <div class="news-source"> 
                            <h1>${article.source.name}</h1>
                            </div>
                         <div class="news-desc">
                            <p> ${article.description}</p>   
                         </div>
                         <div class="news-url"> 
                            <a href="${article.url}"target="_blank">Go To Page</a>
                            <button class= "btn-bookmarks"><i class="fas fa-bookmark"></i></button>
                         </div>  
                         <div class="news-published">
                              <h1>${article.publishedAt}</h1>
                         </div>
                      </div>`
                      });
                      news.innerHTML = newsItem;
                      console.log(JSON.parse(localStorage.getItem('bookmarks')))

                      const book = document.querySelector('.news-url');
                     console.log(book.classList)
                      book.onclick = function (){
                        console.log('hhhhhhh')
                        localStorage.setItem('bookmarks', JSON.stringify(articles))
                      }
                   })
                   .catch(error => {
                
                   })
                 }
               }
   
               function b(){
                  btnSearch.onclick = function loadUsers(){
                      console.log('hello')
                      var source = selectionSources.options[selectionSources.selectedIndex].value;  
                  
                      const URL = 'https://newsapi.org/v2/top-headlines?q='+searchQuery.value+'&sources='+source+'&&apiKey=ff55591e19c74c018563bc1852ae1dde&country=&category=&q=&page=1&pageSize=50'
                      const news = document.querySelector('.news')
                      fetch(URL)
                         .then(data => data.json())
                         .then(response => {
                           const articles = response.articles
                           //console.log(articles[0])
                           localStorage.setItem('bookmarks', JSON.stringify(articles))
                           let resu=''
                            resu += `<h1>You have${response.totalResults} Results</h1>`
                          res.innerHTML = resu;
                           let newsItem = ''
                           articles.forEach(article => {
                              newsItem += `
                              <div class="news-item">
                                 <div class="news-image">
                                       <img src = "${article.urlToImage}"></img>
                                 </div>
                              <div class="news-title">   
                                 <h1> ${article.title} </h1> 
                              </div>
                              <div class="news-source"> 
                                 <h1>${article.source.name}</h1>
                                 </div>
                              <div class="news-desc">
                                 <p> ${article.description}</p>   
                              </div>
                              <div class="news-url"> 
                                 <a href="${article.url}"target="_blank">Go To Page</a>
                                 <button class= "btn-bookmarks"><i class="fas fa-bookmark"></i></button>
                              </div>  
                              <div class="news-published">
                                   <h1>${article.publishedAt}</h1>
                              </div>
                           </div>`
                           });
                           news.innerHTML = newsItem;
                           console.log(JSON.parse(localStorage.getItem('bookmarks')))
     
                           const book = document.querySelector('.news-url');
                          console.log(book.classList)
                           book.onclick = function (){
                             console.log('hhhhhhh')
                             localStorage.setItem('bookmarks', JSON.stringify(articles))
                           }
                        })
                        .catch(error => {
                     
                        })
                      }
                    }
