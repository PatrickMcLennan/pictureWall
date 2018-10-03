
async function getJSON(apiKey) {
    const response = await fetch(apiKey);
    const data = await response.json();
    return data;
}

async function nasa() {
    const nasaKey = "https://api.nasa.gov/planetary/apod?api_key=hnReIst50ddj32BBbcm5dkbpPT3XpyusdPwXYf17";
    const json = await getJSON(nasaKey);
    const nasa = document.querySelector('.nasa');
    nasa.style.backgroundImage = `url(${json.url})`;
    nasa.querySelector('.pic__description').innerText = json.explanation;
}

async function unsplash() {
    const unsplashKey = "https://api.unsplash.com/photos/?client_id=48ccb7bdf03ecfcfa3702027cf44a1a82a54947daedc60147dbb4af9b7690980";
    const jsonList = await getJSON(unsplashKey);
    const json = jsonList[Math.floor(Math.random() * jsonList.length)];
    const unsplash = document.querySelector('.unsplash');
    unsplash.style.backgroundImage = `url(${json.urls.regular})`;
}

async function cat() {
    const catKey = 'https://api.thecatapi.com/v1/images/search?'
    const json = await getJSON(catKey);
    const cat = document.querySelector('.cat');
    console.log(json[0]);
    cat.style.backgroundImage = `url(${json[0].url})`;
}

nasa();
unsplash();
cat();