
if (!navigator.geolocation) alert("この端末では位置情報が取得できません。");
function exeSearch() {
  alert("execute")
}
// 現在地を取得
navigator.geolocation.getCurrentPosition(
  // 取得成功した場合
  (position) => successGetLocation (position),
  // 取得失敗した場合
  (erroe) => failedGetLocation (error)
);

function successGetLocation (position) {
  alert("緯度:"+position.coords.latitude+",経度"+position.coords.longitude);
  callAPI()
}

function failedGetLocation (error) {
  switch(error.code) {
    case 1: //PERMISSION_DENIED
      alert("位置情報の利用が許可されていません");
      break;
    case 2: //POSITION_UNAVAILABLE
      alert("現在位置が取得できませんでした");
      break;
    case 3: //TIMEOUT
      alert("タイムアウトになりました");
      break;
    default:
      alert("その他のエラー(エラーコード:"+error.code+")");
      break;
  }
}
function callAPI () {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://api.calil.jp/check?appkey={e669768ee20f978197cfd3a43b1375c1}&isbn=4834000826&systemid=Aomori_Pref&format=json",
    success: function(msg) {
      console.log(msg);
    }
  })
}

