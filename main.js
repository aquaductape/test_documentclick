const btn = document.querySelector("button");
const logger = document.querySelector(".logger");

btn.addEventListener("click", () => {
  document.addEventListener("click", () => {
    logger.innerHTML = `Global click! ${Date.now()}`;
  });
});
