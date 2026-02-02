const wrapper = document.querySelector(".image-wrapper");
const crackImages = ["img/crack-1.png", "img/crack-2.png", "img/crack-3.png"];

wrapper.addEventListener("click", () => {

    const crack = document.createElement("div");
    crack.classList.add("crack");

    const randomImage =
        crackImages[Math.floor(Math.random() * crackImages.length)];

    crack.style.backgroundImage = `url(${randomImage})`;

    const rotation = Math.random() * 360;
    const scale = 0.8 + Math.random() * 0.5;

    crack.style.transform = `rotate(${rotation}deg)  scale(${scale})`;
    crack.style.opacity = 0.3 + Math.random() * 0.7;

    wrapper.appendChild(crack);
});