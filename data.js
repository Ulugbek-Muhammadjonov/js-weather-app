const api = {
    key: '012a6e7ebbacdc984b23c66ca28a6bda',
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
}

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keyup',setQuery);

function setQuery(e) {

if (e.keyCode === 13){

    getResults(searchBox.value);
    // console.log(searchBox.value);
}

}

function getResults(query) {

    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`).then((weather) => {

        return weather.json();

    }).then(displayResults);

}

function displayResults(weather){
    console.log(weather);

    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');

    date.innerHTML = dateBulider(now);

    let temp = document.querySelector('.main-temp .temp');

    temp.innerHTML = `${Math.round(weather.main.temp)}<span> °C</span>`;

    let weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${weather.main.temp_min} °C / ${weather.main.temp_max} °C`;

}

function dateBulider(now) {

    let months = ['January','February','Martch','April','May','June','July','August','September','October','November','December'];

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let day  = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}