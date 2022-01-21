const days = document.querySelector('#date');
const clock = document.querySelector('#clock');

function clockFormat(val) {
    return String(val).padStart(2, "0")
}

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const YY = date.getFullYear();
    const HH = clockFormat(date.getHours());
    const MM = clockFormat(date.getMinutes());
    const SS = clockFormat(date.getSeconds());

    days.innerText = `${year}년 ${month+1}월 ${day}일`;
    clock.innerText = `${HH}:${MM}:${SS}`;
}

getClock();
setInterval(getClock, 1000)
// setTimeout(sayHello, 2000)
