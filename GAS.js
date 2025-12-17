// NeuroTechCamp - Episode 1 Backend
// 時間判定ロジック：深夜0時台（00:00〜00:59）なら真実を返す

function doGet(e) {
  const now = new Date();
  const hour = now.getHours(); // 現在の「時」を取得 (0-23)
  
  // テスト用：URLに ?debug=true がついていたら強制的に成功させる
  const isDebug = e.parameter.debug === 'true';

  // 判定：深夜0時、またはデバッグモードなら「成功」
  if (hour === 0 || isDebug) {
    const secretData = {
      status: "200_OK",
      message: "⚠️ 接続確立。ようこそ、NeuroTechCampへ。",
      next_clue: "真実は隠されている。コンソールを確認せよ。",
      link: "https://note.com/あなたのNoteのURL" // ここにNoteやDiscordのリンクを入れる
    };
    return createJSON(secretData);
  } 
  
  // それ以外は「ただの404エラー」のふりをするデータを返す
  else {
    return createJSON({
      status: "404_NOT_FOUND",
      message: "Error: Time Lock Active. Access Denied."
    });
  }
}

// JSONデータを返すためのヘルパー関数
function createJSON(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
