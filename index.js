const API_KEY = '6ca6d996-2865-4211-a021-fd4e7a0aaeed'
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites?api_key=${API_KEY}`;

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

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happened:' + res.status + data.message; 
  } else {
    data.forEach(cat => { 
      const section = document.getElementById('favoritesCats')
      const article = document.createElement('article')
      const img = document.createElement('img')
      const btn = document.createElement('button')
      const btnText = document.createTextNode('Delete cat form Favorite section')
      
      btn.appendChild(btnText)
      img.src = cat.image.src
    })
  }
  console.log('Favorites',data)

};

const saveFavoriteCats = async () => {
  const res = await fetch(API_URL_FAVORITES,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: '12',
    }),
  })
  const data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happened:' + res.status + data.message; 
  }
  console.log({data})
};

loadRandomCats();
loadFavoritesCats();

