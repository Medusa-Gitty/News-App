//Displaying top News
// 8d7efe63885640cc97feb0e6f3731bc0

var news_box = document.getElementById(`news_box`);

fetch(
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=8d7efe63885640cc97feb0e6f3731bc0`
).then(function (res) {
  res.json().then(function (res) {
    res = res.articles;
    showNews(res);
    console.log(res);
  });
});

var newsData;

function showNews(news) {
  news_box.innerHTML = null;
  news.forEach((el) => {
    let div = document.createElement(`div`);
    div.style.cursor = `pointer`;

    let img = document.createElement(`img`);
    img.src = el.urlToImage;

    let title = document.createElement(`p`);
    title.textContent = el.title;

    let hr = document.createElement(`hr`);

    div.append(img, title, hr);
    news_box.append(div);

    div.addEventListener(`click`, function () {
      newsData = el;
      window.localStorage.setItem(`newsData`, JSON.stringify(newsData));
      window.location.href = `news.html`;
      // console.log(newsData);
    });
  });
}
///////////////////////////////
function goto() {
  window.location.href = `search.html`;
}
