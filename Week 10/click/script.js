const catButton = document.querySelector("#cat-button");
console.log(catButton);
catButton.addEventListener("click", increaseLikes);

let likeCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

function increaseLikes() {
  console.log("im clicked");
  // likeCount = likeCount + 1;
  likeCount++;
  // likes.textContent = likeCount;
  likes.innerHTML = `<h3>${likeCount} </h3`;
}
