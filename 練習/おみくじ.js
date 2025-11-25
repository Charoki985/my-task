const results = ["大吉", "中吉", "小吉", "吉", "凶"];
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * results.length);
    document.querySelector("#result") .innerHTML = results[index];
});