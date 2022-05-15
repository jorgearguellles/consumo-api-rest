const API_KEY = '6ca6d996-2865-4211-a021-fd4e7a0aaeed'
const API_URL_UPLOAD = `https://api.thecatapi.com/v1/images/upload`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites`;
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2`;
const API_URL_DELETE_FAVORITE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

const spanError = document.getElementById('error')

const loadRandomCats = async () => {
  const res = await fetch(API_URL_RANDOM, {
    headers: {
      'X-API-KEY': '6ca6d996-2865-4211-a021-fd4e7a0aaeed',
    }
  }),
  data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happen on loadRandomCats:' + res.status + res.message; 
  } else { 
    console.log('Random cats loaded')
    const img1 = document.getElementById('img1'),
    img2 = document.getElementById('img2'),
    btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = ()=>{saveFavoriteCat(data[0].id)};
    btn2.onclick = ()=>{saveFavoriteCat(data[1].id)};
  }
};

const loadFavoritesCats = async () => {
  const res = await fetch(API_URL_FAVORITES, {
    headers:{
      'X-API-KEY': '6ca6d996-2865-4211-a021-fd4e7a0aaeed',
    }
  }),
  data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happen on loadFavoritesCats:' + res.status + data.message; 
  } else {
    const section = document.getElementById('favoritesCats')

    section.innerHTML = ''
    const h2 = document.createElement('h2')
    const h2Text = document.createTextNode('Favorites Cats');
    h2.appendChild(h2Text);
    const hr = document.createElement('hr');
    section.appendChild(h2)
    section.appendChild(hr)
    
    data.forEach(cat => { 
      const article = document.createElement('article')
      const img = document.createElement('img')
      const btn = document.createElement('button')
      const btnText = document.createTextNode('Delete cat form Favorite section')
      
      btn.appendChild(btnText)
      img.src = cat.image.url
      img.width = 150
      btn.onclick = () => deleteFavoriteCat(cat.id)
      section.appendChild(img);
      section.appendChild(btn);
      section.appendChild(article);
    })
  }
};

const saveFavoriteCat = async (id) => {
  const res = await fetch(API_URL_FAVORITES,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': '6ca6d996-2865-4211-a021-fd4e7a0aaeed',
    },
    body: JSON.stringify({
      image_id: id,
    }),
  }),
  data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happen on saveFavoriteCat:' + res.status + data.message; 
  } else {
    console.log('Random cat added on Favorites')
    loadFavoritesCats();
  }
};

const deleteFavoriteCat = async (id) => {
  const res = await fetch( API_URL_DELETE_FAVORITE(id), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': '6ca6d996-2865-4211-a021-fd4e7a0aaeed',
    } 
  }),
  data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happen on deleteFavoriteCat:' + res.status + data.message; 
  } else{
    console.log('Favorite cat deleted from Favorites')
    loadFavoritesCats();
  }
};

const uploadCatPhoto = async () => {
  const form = document.getElementById('uploadingForm')
  const formData = new FormData(form);
  console.log(formData.get('file'))

  const res = await fetch(API_URL_UPLOAD,{
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      'X-API-KEY': '6ca6d996-2865-4211-a021-fd4e7a0aaeed',
    },
    body: formData
  }),
  data = await res.json();

  if( res.status !== 200 ){
    spanError.innerHTML = 'Error happen on uploadCatPhoto:' + res.status + data.message; 
  } else {
    console.log('Cat photo uploaded');
    console.log({data});
    console.log(data.url)
  }
}

loadRandomCats();
loadFavoritesCats();

