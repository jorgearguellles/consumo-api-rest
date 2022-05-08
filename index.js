const API_KEY = '6ca6d996-2865-4211-a021-fd4e7a0aaeed'
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites?limit=2&api_key=${API_KEY}`;

const spanError = document.getElementById('error')

const loadRandomCats = async () => {
  const res = await fetch(API_URL_RANDOM),
        data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happened:' + res.status + res.message; 
  } else { 
    const img1 = document.getElementById('img1'),
    img2 = document.getElementById('img2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
};

const loadFavoritesCats = async () => {
  const res = await fetch(API_URL_FAVORITES),
        data = await res.json();

  console.log(data)
  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happened:' + res.status + data.message; 
  } else { 
    
  }
};

const addFavoriteCat = async () => {
  const res = await fetch(API_URL_FAVORITES,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: 12,
    }),
  })
  const data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happened:' + res.status + data.message; 
  } else { 
    
  }
  console.log(data)
};

loadRandomCats();
loadFavoritesCats();

