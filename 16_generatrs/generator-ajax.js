/*
 * API reference: https://shkspr.mobi/blog/2014/04/wanted-simple-apis-without-authentication/
 */
function* fetchApis () {
  const bbcEndpoint = 'http://www.bbc.co.uk/radio1/playlist.json';
  const mapsEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20U    niversity,%20uk&sensor=false';
  const booksEndpoint = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699v';
  
  // each yield won't run until the previous is done
  const bbc = yield ajax(bbcEndpoint);
  const maps = yield ajax(mapsEndpoint);
  const books = yield ajax(booksEndpoint);
}

// fetch and parse as json and move on to the next api call
function ajax (url) {
  fetch(url)
    .then(res => res.json())
    .then(data => dataGenerator.next(data))
}

const dataGenerator = fetchApis();
dataGenerator.next(); // kick it off
