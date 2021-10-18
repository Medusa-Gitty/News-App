////////////////////////////////////////////////
var displayPanel = document.getElementById(`display`);

var data = JSON.parse(window.localStorage.getItem(`newsData`));
console.log(data);

function display(el) {
  var img = document.createElement(`img`);
  img.src = el.urlToImage;

  var title = document.createElement(`h3`);
  title.textContent = el.title;

  var author = document.createElement(`i`);
  author.textContent = `- ` + el.author;

  var desc = document.createElement(`h4`);
  desc.textContent = el.description;

  var hr = document.createElement(`hr`);
  hr.style.width = `50%`;

  var content = document.createElement(`p`);
  content.textContent = el.content;

  displayPanel.append(img, title, author, hr, desc, content);
}

display(data);
///////////////////////////////////////////////
function goto() {
  window.location.href = `home.html`;
}

function goTo() {
  window.location.href = `search.html`;
}
