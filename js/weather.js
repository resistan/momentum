const API_KEY = "3aad675abb5a1b5b1d049a1ce174debe";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather .condition');
        const city = document.querySelector('#weather .city');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    });
}

function onGeoErr() {
    alert('Oops, Something Wrong. Use default position');
    // lat = '37.583';
    // lng = '127.0544';
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);



