
export function getLibrary (coords) {
  return $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://api.calil.jp/library?appkey=e669768ee20f978197cfd3a43b1375c1",
    data: {
      geocode: coords.longitude+","+coords.latitude,
      limit: 5,
      format: "json"
    }
  })
}