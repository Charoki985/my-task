// expressというライブラリを読み込む
const express = require("express");
const path = require("path"); 

// expressを使ってサーバー本体を作る
const app = express();

const PORT = 3000;

// JSON形式のデータを受け取れるようにする設定、fetchで送ったJSONをreq.bodyで使えるようにする
app.use(express.json());

// ルートURLにアクセスされたとき
app.get("/", (req, res) => {

// index.htmlをブラウザに表示する
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
app.get("/about", (req, res) => res.send("このアプリの説明ページ"));
app.get("/help", (req, res) => res.send("お困りのときはこのページを参照してください"));
app.get("/api/info", (req, res) => res.json({ app: "sample-app", version: 1, ok: true }));

app.post("/api/echo", (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ ok: false, error: "message は必須です" });
  }

  res.json({ ok: true, echo: data });
});

app.listen(PORT, () => console.log("✅ 起動: http://localhost:" + PORT));