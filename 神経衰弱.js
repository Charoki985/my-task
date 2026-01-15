// カード配置のゲームエリア
const game = document.getElementById("game");
// タイマー表示
const timerEl = document.getElementById("timer");
// リセットボタン
const resetBtn = document.getElementById("reset");
// ゲームクリア時のメッセージ
const clearMessage = document.getElementById("clearMessage");
// クリア時間表示
const clearTime = document.getElementById("clearTime");
// クリア画面内の"もう一度遊ぶ"ボタン
const restartBtn = document.getElementById("restart");

// ペアになる数字(8ペア＝16枚)
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// 最初にめくったカードを記憶する変数
let firstCard = null;
// 処理中に他のカードをクリックできないようにするフラグ
let lock = false;
// 揃ったカードの枚数をカウント
let matchedCount = 0;

// タイマー
let time = 0;
let timerId = null;

// タイマー開始
function startTimer() {
  if (timerId !== null) return; // すでにタイマーが動いていたら何もしない
  // 1秒ごとに時間を増やす
  timerId = setInterval(() => {
    time++;
    timerEl.textContent = `時間:${time} 秒`;
  }, 1000);
}

// タイマー停止
function stopTimer() {
  // タイマーを止める
  clearInterval(timerId);
  timerId = null;
}

// ===== ゲーム初期化 =====
function initGame() {
  game.innerHTML = ""; // ゲームエリアを空にする

  // 状態のリセット
  firstCard = null;
  lock = false;
  matchedCount = 0;

  // タイマーをリセット
  stopTimer();
  time = 0;
  timerEl.textContent = "時間:0 秒";

  // クリアメッセージを非表示
  clearMessage.style.display = "none";

  // ランダムに並び替える
  numbers.sort(() => Math.random() - 0.5);

  // 数字の数だけカードを作成
  numbers.forEach(num => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.number = num;
    card.textContent = ""; // 最初は数字を表示しない

    // カードクリック時の処理
    card.addEventListener("click", () => {
      if (lock) return; // 処理中ならなにもしない
      if (card.textContent !== "") return; // すでに開いてるカードは無視
      
      // 最初のクリックでタイマー開始
      startTimer();
      // 数字を表示してカードを開く
      card.textContent = card.dataset.number;
      card.classList.add("open");

      // 1枚目のカードなら記憶して終了
      if (firstCard === null) {
        firstCard = card;
        return;
      }

      // 2枚目が選ばれたのでロック
      lock = true;
      const secondCard = card;
      
      // 数字が一致した場合
      if (firstCard.dataset.number === secondCard.dataset.number) {
        matchedCount += 2; // 揃った枚数を加算
        // 状態を解除
        firstCard = null; 
        lock = false;

        // 全部揃ったらゲームクリア
        if (matchedCount === numbers.length) {
          stopTimer();
          // 少し待ってからクリア画面を表示
          setTimeout(() => {
            clearTime.textContent = time;
            clearMessage.style.display = "flex";
          }, 300);
        }
      } else {
        // 数字が違った場合、1秒後にもどす
        setTimeout(() => {
          firstCard.textContent = "";
          secondCard.textContent = "";
          firstCard.classList.remove("open");
          secondCard.classList.remove("open");
          firstCard = null;
          lock = false;
        }, 1000);
      }
    });

    // ゲームエリアにカードを追加
    game.appendChild(card);
  });
}

// リセット
resetBtn.addEventListener("click", initGame);

// クリア画面内　再スタート
restartBtn.addEventListener("click", initGame);

// 初回起動
initGame();