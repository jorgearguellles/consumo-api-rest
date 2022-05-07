console.log('Connected')
// fetch(URL)
//   .then(res => res.json())
//   .then(data => {
//     const img = document.querySelector('img');
//     img.src = data[0].url;
//   });

// const API_KEY = "6ca6d996-2865-4211-a021-fd4e7a0aaeed";

const reload = async () => {
  const URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=6ca6d996-2865-4211-a021-fd4e7a0aaeed';

  const res = await fetch(URL);
  const data = await res.json();

  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');

  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;

};

reload();