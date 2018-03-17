
export function getLibrary (coords) {
  return $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://api.calil.jp/library",
    data: {
      appkey: "e669768ee20f978197cfd3a43b1375c1",
      geocode: coords.longitude+","+coords.latitude,
      limit: 5,
      format: "json"
    }
  })
}

export function accessLibrary (isbn, systemid) {
  console.log(isbn)
  console.log(systemid)
  return $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://api.calil.jp/check",
    data: {
      appkey: "e669768ee20f978197cfd3a43b1375c1",
      isbn: isbn,
      systemid: systemid,
      format: "json"
    }
  })
}
