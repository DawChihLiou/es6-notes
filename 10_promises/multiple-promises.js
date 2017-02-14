const postPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise= fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetPromise])
  .then(responses => {
    // responses can be in various formats
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return Promise.all(responses.map(res => res.json()))
  })
  .then(responses => {
    console.log(responses);
  });
