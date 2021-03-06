const API_KEY = "3aad675abb5a1b5b1d049a1ce174debe";
const weatherIcons = ['Clear', 'Cloud', 'Rain', 'Snow'];

const url = window.location.href;
const alertArea = document.querySelector('.alert');
const alertLine = document.createElement('p');
const alertMessage = "안내: https로 접속해주세요.";
if(url.includes('http://')){
    alertArea.appendChild(alertLine);
    alertLine.innerText = alertMessage;
}

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
    alert('http를 https로 바꿔주세요. 도메인 설정을 잘못해서 죄송합니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);



