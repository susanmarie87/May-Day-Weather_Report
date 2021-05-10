const api = {
    key: "3868ebac95625426ec49b0031e0e6a5c",
    base:"https://home.openweathermap.org/"
}

const searchbox = document.querySelector('search-box');
searchbox.addEventListener('keypress', setQuery);

function set(evt) {
    if (evt.keyCode == 13 ) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch (`${api.base}weather?q=${query}&units=imperial&APPID=${apikey}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
}