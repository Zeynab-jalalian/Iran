const wrapper = document.querySelector(".image-wrapper");
const wrapperImg = document.querySelector(".image-wrapper img");
const frame = document.querySelector(".frame");
let hits = 0;
const crackImages = [
  "img/crack-1.png",
  "img/crack-2.png",
  "img/crack-3.png",
  "img/blood.png",
];
const sounds = [new Audio("sounds/s1.mp3"), new Audio("sounds/s2.mp3")];
let brightness = 1;

wrapper.addEventListener("click", () => {
  frame.classList.remove("shake");
  void frame.offsetWidth; 
  frame.classList.add("shake");
  hits++;
  if (hits === 15) {
    wrapper.classList.add("breakAll");
    frame.classList.add("none");
  }
  const crack = document.createElement("div");
  crack.classList.add("crack");

  const randomImage =
    crackImages[Math.floor(Math.random() * crackImages.length)];
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  randomSound.currentTime = 0;
  randomSound.play();

  crack.style.backgroundImage = `url(${randomImage})`;

  const rotation = Math.random() * 360;
  const scale = 0.8 + Math.random() * 0.5;

  crack.style.transform = `rotate(${rotation}deg)  scale(${scale})`;
  crack.style.opacity = 0.3 + Math.random() * 0.7;

  wrapper.appendChild(crack);

  brightness -= 0.1;
  wrapperImg.style.filter = `brightness(${brightness})`;
});
