// formを探して、変数formに入れてる
const form = document.querySelector("form");
// document⇒HTML全体
// form変数に保存して後で使えるようにしてる

const resultDiv = document.querySelector("#result");

// 送信ボタンが押されたときに動く処理を登録
form.addEventListener("submit", (event) => {
// formがsubmit(送信)された瞬間に、この中の処理が実行

  event.preventDefault();// ページのリロードを止める、fetch通信に必要
// 名前の取得
  const nameValue = document.querySelector("input[name='name']").value;
// inputタグのname="name"を探す
// .valueで入力された文字を取得

// メッセージの取得
  const messageValue = document.querySelector("textarea[name='message']").value;

// 通信するサーバーのURLを指定
const url = "http://localhost:3000/api/echo";

// サーバーへ送信
 fetch(url, {

// POST送信を指定
// データを送る際に使用
    method: "POST",

// サーバーにJSON形式で送ると伝える
    headers: { "Content-Type": "application/json" },

// 送るデータ本体
// JSON.stringifyでJSON文字列に変換
    body: JSON.stringify({ name: nameValue, message: messageValue })
  })
  
// サーバーから返ってきたデータをJSON形式に変換
  .then((response) => response.json())

// サーバーの返事をコンソールに表示  
  .then((data) => { 
    console.log("サーバーからの返事:", data); 
    resultDiv.innerText = `名前: ${data.echo.name}\nメッセージ: ${data.echo.message}`;
    })

// エラーが起きた時に表示
   .catch((err) => { 
    console.error("通信エラー:", err);
    resultDiv.innerText = "エラーが発生しました: " + err;
     });

// fetchを実行したことの確認ログ
  console.log("headers（Content-Type: application/json）を付けました。");
});