const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const hamburgerNav = document.querySelector('.links');

hamburgerBtn.addEventListener("click", () => {
    hamburgerNav.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    hamburgerNav.style.display = "none";
});

const douglas = document.querySelector('.douglas');
const mark = document.querySelector('.mark');
const victor = document.querySelector('.victor');
const ansari = document.querySelector('.ansari');
const commander = document.querySelector('.cmdBtn');
const specialist = document.querySelector('.speBtn');
const pilot = document.querySelector('.pilBtn');
const engineer = document.querySelector('.engBtn');

commander.addEventListener("click", () => {
    douglas.style.display = "flex";
    mark.style.display = "none";
    victor.style.display = "none";
    ansari.style.display = "none";
});

specialist.addEventListener("click", () => {
    mark.style.display = "flex";
    douglas.style.display = "none";
    victor.style.display = "none";
    ansari.style.display = "none";
});

pilot.addEventListener("click", () => {
    victor.style.display = "flex";
    mark.style.display = "none";
    ansari.style.display = "none";
    douglas.style.display = "none";
});

engineer.addEventListener("click", () => {
    ansari.style.display = "flex";
    douglas.style.display = "none";
    mark.style.display = "none";
    victor.style.display = "none";
});
