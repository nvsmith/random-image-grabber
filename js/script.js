// Step 5 of 7
// Fetch a Random Image Array

const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  //   Enable async communication between the program and the Lorem Picsum API.
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  //   Parse the data captured in `res` using the json method.
  const images = await res.json();
  //   console.log(images);
  selectRandomImage(images);
};

selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  //   console.log(randomIndex);
  const randomImage = images[randomIndex];
  //   console.log(randomImage);
  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
  getImage();
});
