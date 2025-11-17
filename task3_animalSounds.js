const buttons = document.querySelectorAll(".animalBtn");
const result = document.getElementById("result");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const animal = btn.dataset.animal;
      let sound = "";

      if (animal === "dog") {
        sound = "わんわん";
      } else if (animal === "cat") {
        sound = "にゃ－ん";
      } else if (animal === "bird") {
        sound = "ぴよぴよ";
      } else if (animal === "frog") {
        sound = "げろげろ";
      }

      result.textContent = sound;
    })
})