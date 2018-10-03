const nasaKey = "https://api.nasa.gov/planetary/apod?api_key=hnReIst50ddj32BBbcm5dkbpPT3XpyusdPwXYf17";
const unsplashKey = "https://api.unsplash.com/photos/?client_id=48ccb7bdf03ecfcfa3702027cf44a1a82a54947daedc60147dbb4af9b7690980";
const catKey = "b04b6cc1-241a-443e-821d-a71c6a83a89d";
const catUserId = "ttfd3r"  // ??
const googleCanadaKey = "https://newsapi.org/v2/top-headlines?country=canada&apiKey=8baaf90261984e748f990e495360e903"


function getNasa(apiKey) {
    fetch(apiKey)
        .then(response => {
            if (response.status !== 200) {
                console.log(`${apiKey} status is ${response.status} -- it's supposed to be 200`);
                return;
            };
        response.json()
            .then(data => {
                const nasa = document.querySelector('.nasa');
                console.log(data.hdurl);
                nasa.innerHTML = 
                `<img src="${data.hdurl}" alt="Nasa Picture of the Day"`;
            });  
    });
}

// getNasa(nasaKey);