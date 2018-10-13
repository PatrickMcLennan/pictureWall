'use strict';

const DOM = {
  nasa: document.querySelector('.nasa'),
  unsplash: document.querySelector('.unsplash'),
  cat: document.querySelector('.cat'),
  dog: document.querySelector('.dog'),
  gfycat: document.querySelector('.gfycat'),
  nyt: document.querySelector('.nyt'),
};

async function getJSON(apiKey) {
  const response = await fetch(apiKey);
  const data = response.json();
  return data;
}

async function nasa() {
  const nasaKey = 'https://api.nasa.gov/planetary/apod?api_key=hnReIst50ddj32BBbcm5dkbpPT3XpyusdPwXYf17';
  const json = await getJSON(nasaKey);
  DOM.nasa.style.backgroundImage = `url(${json.url})`;
  DOM.nasa.querySelector('.pic__description').innerText = json.explanation;
}

async function unsplash() {
  const unsplashKey = 'https://api.unsplash.com/photos/?client_id=48ccb7bdf03ecfcfa3702027cf44a1a82a54947daedc60147dbb4af9b7690980';
  const jsonList = await getJSON(unsplashKey);
  const json = jsonList[Math.floor(Math.random() * jsonList.length)];
  DOM.unsplash.style.backgroundImage = `url(${json.urls.regular})`;
}

async function cat() {
  const catKey = 'https://api.thecatapi.com/v1/images/search?';
  const jsonArray = await getJSON(catKey);
  const json = jsonArray[0];
  DOM.cat.style.backgroundImage = `url(${json.url})`;
}

async function dog() {
  const dogKey = 'https://api.thedogapi.com/v1/images/search?';
  const jsonArray = await getJSON(dogKey);
  const json = jsonArray[0];
  DOM.dog.style.backgroundImage = `url(${json.url})`;
}

async function gfycat() {
  const gfycatKey = 'https://api.gfycat.com/v1/reactions/populated?tagName=trending';
  const jsonObj = await getJSON(gfycatKey);
  const json = jsonObj.gfycats[0];
  DOM.gfycat.style.backgroundImage = `url(${json.gifUrl})`;
  DOM.gfycat.querySelector('.pic__description').innerText = `"${json.title}"`;
}

async function nyt() {
  const nytKey = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=f998c2f8d35d49f3b989c46064c38e74';
  const jsonObj = await getJSON(nytKey);
  const jsonResults = jsonObj.results;
  const json = jsonResults[Math.floor(Math.random() * jsonResults.length)];
  DOM.nyt.style.backgroundImage = `url(${json.multimedia[4].url})`;
  DOM.nyt.querySelector('.pic__description').innerText = `${json.abstract}`;
}

nasa();
unsplash();
cat();
dog();
gfycat();
nyt();
