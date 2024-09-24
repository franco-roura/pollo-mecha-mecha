const pollo = document.getElementById("pollo") as HTMLImageElement;
if (!pollo) throw new Error("Pollo not found.");
const mecha = document.getElementById("mecha") as HTMLAudioElement;
if (!mecha) throw new Error("Mecha not found.");

let polloComingBack = false;

const animateThePollo = () => {
  const currentPosition = parseInt(pollo.style.left) || 0;
  let desiredDistance = pollo.clientWidth / 2;
  if (polloComingBack) desiredDistance *= -1;

  pollo.style.left = `${currentPosition + desiredDistance}px`;
  const newDistance = parseInt(pollo.style.left);
  if (newDistance < -2 * pollo.clientWidth) {
    pollo.style.transform = "scaleX(1)";
    pollo.style.top = `${Math.random() * window.innerHeight}px`;
    polloComingBack = false;
  }

  if (newDistance > window.innerWidth + pollo.clientWidth) {
    // The return of the pollo
    polloComingBack = true;
    pollo.style.transform = "scaleX(-1)";
    pollo.style.top = `${Math.random() * window.innerHeight}px`;
  }
};

let interval: ReturnType<typeof setInterval>;
mecha.addEventListener("play", () => {
  interval = setInterval(animateThePollo, 300);
});
mecha.addEventListener("pause", () => {
  clearInterval(interval);
});
