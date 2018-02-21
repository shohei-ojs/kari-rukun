if (!navigator.geolocation) {
  alert("この端末では位置情報が取得できません。");
}

var calil = new Calil({
	'appkey' : 'e669768ee20f978197cfd3a43b1375c1',
	'render': new CalilRender(),
	'isbn' : 4163902309,
	'systemid' : "Tokyo_Setagaya"
});
console.log(calil)
console.log(calil.search());
// 現在地を取得
navigator.geolocation.getCurrentPosition(
  // 取得成功した場合
  function(position) {
      alert("緯度:"+position.coords.latitude+",経度"+position.coords.longitude);
  },
  // 取得失敗した場合
  function(error) {
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
);