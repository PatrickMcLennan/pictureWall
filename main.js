const nasaKey = "https://api.nasa.gov/planetary/apod?api_key=hnReIst50ddj32BBbcm5dkbpPT3XpyusdPwXYf17";
const unsplashKey = "https://api.unsplash.com/photos/?client_id=48ccb7bdf03ecfcfa3702027cf44a1a82a54947daedc60147dbb4af9b7690980";
const catKey = "b04b6cc1-241a-443e-821d-a71c6a83a89d";
const catUserId = "ttfd3r"  // ??
const googleCanadaKey = "https://newsapi.org/v2/top-headlines?country=canada&apiKey=8baaf90261984e748f990e495360e903"


    // NASA 
    // fetch(getNasa)
    //     .then(response => {
        //         const nasaInfo = response.json();
        //         console.log(nasaInfo);
        //     });

function getJSON(apiKey) {
    fetch(apiKey)
        .then(response => {
            
        })
}

getJSON(nasaKey);
getJSON(unsplashKey);
getJSON(googleCanadaKey);
        
        
// async function nasaRequest() {
//     try {
//         const getNasa = new Request(nasaKey);
//         await getNasa;
//         const nasaInfo = getNasa.json();
//         return nasaInfo;
//     } catch (error) {
//         console.log('Something went wrong :(');
//     }
// }
// nasaRequest();

// {
    //     "copyright": "John Entwistle",
    //     "date": "2018-10-02",
    //     "explanation": "Yes, but can your rainbow do this?  After the remnants of Hurricane Florence passed over Jersey Shore, New Jersey, USA last month, the Sun came out in one direction but something quite unusual appeared in the opposite direction: a hall of rainbows.  Over the course of a next half hour, to the delight of the photographer and his daughter, vibrant supernumerary rainbows faded in and out, with at least five captured in this featured single shot.  Supernumerary rainbows only form when falling water droplets are all nearly the same size and typically less than a millimeter across.  Then, sunlight will not only reflect from inside the raindrops, but interfere, a wave phenomenon similar to ripples on a pond when a stone is thrown in. In fact, supernumerary rainbows can only be explained with waves, and their noted existence in the early 1800s was considered early evidence of light's wave nature.   Follow APOD on: Facebook,  Google Plus,  Instagram, or Twitter",
    //     "hdurl": "https://apod.nasa.gov/apod/image/1810/SupernumeraryRainbows_Entwistle_1362.jpg",
    //     "media_type": "image",
    //     "service_version": "v1",
    //     "title": "Supernumerary Rainbows over New Jersey",
    //     "url": "https://apod.nasa.gov/apod/image/1810/SupernumeraryRainbows_Entwistle_960.jpg"
    // }
    
    // UNSPLASH
    
    
    
    // CAT PICS
    
// GOOGLE CANADA
// const getGoogle = new Request(googleCanadaKey);
// fetch(getGoogle)
//     .then(function(response) {
//         console.log(response.json());
//     })