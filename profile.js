const bio = document.getElementById("bio");
const toggleBtn = document.getElementById("toggleBioBtn");

const shortText = "現在転職活動の為にプログラミングを勉強中";
const fullText = "現在転職活動の為にプログラミングを勉強中。基礎的なことは学べてきているのでこのまま精進してエンジニアになりたい"

bio.textContent = shortText;

toggleBtn.addEventListener("click", () => {
    if (bio.textContent === shortText) {
        bio.textContent = fullText;
        toggleBtn.textContent = "閉じる";
    } else {
        bio.textContent = shortText;
        toggleBtn.textContent = "もっと見る";
    }
});

const themeBlue = document.getElementById("themeBlue");
const themeGreen = document.getElementById("themeGreen");
const themePink = document.getElementById("themePink");

const body = document.body;

function changeTheme(themeClass) {
    body.classList.remove("theme-blue", "theme-green", "theme-pink");
    body.classList.add(themeClass);
}

themeBlue.addEventListener("click", () => changeTheme("theme-blue"));
themeGreen.addEventListener("click", () => changeTheme("theme-green"));
themePink.addEventListener("click", () => changeTheme("theme-pink"));