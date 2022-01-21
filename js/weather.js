const API_KEY = "3aad675abb5a1b5b1d049a1ce174debe";
const weatherIcons = ['Clear', 'Cloud', 'Rain', 'Snow'];

function onGeoOk(position) {
    const lat = position.coords.latitude ? position.coords.latitude : 37.583;
    const lon = position.coords.longitude ? position.coords.longitude : 127.0544;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather .condition span');
        const icon = document.createElement('i');
        const city = document.querySelector('#weather .city');
        // console.log(data);
        city.innerText = data.name;
       
        if( weatherIcons.includes(data.weather[0].main) ) {
            weather.appendChild(icon);
            icon.classList.add(data.weather[0].main);
        }
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    });
}

function onGeoErr() {
    alert('Oops, Something Wrong. Use default position');
    // lat = '37.583';
    // lng = '127.0544';
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);



