var timerId;

let news_SearchList = document.getElementById(`newsBox`);
let mainPage = document.getElementById(`mainPage`);

async function searchNews(q) {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&from=2021-10-18&sortBy=popularity&apiKey=8d7efe63885640cc97feb0e6f3731bc0`
    );

    let data = await res.json();
    data = data.articles;
    //   appendNews(data);
    return data;
    //   console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//   searchNews(`apple`);

function appendNews(news) {
  if (news == undefined) {
    return false;
  }
  news_SearchList.innerHTML = null;
  news.forEach((el) => {
    let div = document.createElement(`div`);
    div.style.cursor = `pointer`;

    let img = document.createElement(`img`);
    img.src = el.urlToImage;

    let title = document.createElement(`p`);
    title.textContent = el.title;

    let hr = document.createElement(`hr`);

    div.append(img, title, hr);
    news_SearchList.append(div);
  });
}

async function main() {
  let name = document.getElementById(`news`).value;

  if (name.length < 3) {
    return false;
  }
  let res = await searchNews(name);
  let news_data = res;
  appendNews(news_data);
}

//debounce
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    func();
  }, delay);
}

///////////////////////////////////////////////////
function goTo() {
  window.location.href = `home.html`;
}
