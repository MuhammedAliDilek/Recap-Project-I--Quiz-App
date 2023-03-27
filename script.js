/* // Function to toggle between two images
function toggleImage(Bookmarks) {
  // Get the image element
  let image = document.getElementById("./assets/bookmark.png");

  // Check if the image source is the first image
  if (image.src.includes("bookmark.png")) {
    // Change the source to the second image
    image.src = "bookmark_filled.png";
  } else {
    // Change the source to the first image
    image.src = "bookmark.png";
  }
}
 */
//Bookmark toggle
const bookmarkButton = document.querySelector(".card__bookmark");
let toggle = true;
bookmarkButton.addEventListener("click", function () {
  console.log(bookmarkButton.getAttribute("src"));
  toggle = !toggle;
  if (toggle) {
    bookmarkButton.setAttribute("src", "./assets/bookmark.png");
  } else {
    bookmarkButton.setAttribute("src", "./assets/bookmark_filled.png");
  }
  console.log(toggle);
});

const card_button = document.querySelector(".card__button");
let toggle1 = true;
card_button.addEventListener("click", () => {
  answer_text.classList.toggle("hide");
  if (answer_text.classList.contains("hide")) {
    card_button.textContent = "show";
  } else {
    card_button.textContent = "hide";
  }
  card_button.textContent = answer_text.classList.contains("hide")
    ? "Show answer!"
    : "Hide answer!";

  console.log("something: ", card_button);

  /*   if (card_button.hasAttribute("toggle")) {
    card_button.textContent = "Show answer";
  } else {
    card_button.textContent = "Hide Answer";
  } */
});
