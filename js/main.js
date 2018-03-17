import * as calilApi from './calilApi.js'

var coords =""
var inputInsb = document.getElementById('INSB').getElementsByTagName("input");
inputInsb[0].disabled = inputInsb[1].disabled = true;
inputInsb[1].onclick = onClickToSearch;

if (!navigator.geolocation) alert("この端末では位置情報が取得できません。");

function onClickToSearch () {
  calilApi.getLibrary(coords)
    .then(checkBookExist)
    .then((res) => console.log(res))
}

// 
function checkBookExist (librarys) {
  let systemids = ""
  for(let lib of librarys) {
    systemids += (','+lib.systemid)
  } 
  return calilApi.accessLibrary(inputInsb[0].value, systemids.slice(1))
}

// 現在地を取得
navigator.geolocation.getCurrentPosition(_successGetLocation, _failedGetLocation)

function _successGetLocation (pos) {
  coords = pos.coords
  inputInsb[0].disabled = inputInsb[1].disabled = false
  inputInsb[0].placeholder = '本のINSBを入力（本の名前とか受け付けないよ）'
}

function _failedGetLocation (err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}