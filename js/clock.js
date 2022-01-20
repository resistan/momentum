const clock = document.querySelector('#clock');

function clockFormat(val) {
    return String(val).padStart(2, "0")
}

function getClock() {
    const date = new Date();
    const HH = clockFormat(date.getHours());
    const MM = clockFormat(date.getMinutes());
    const SS = clockFormat(date.getSeconds());

    clock.innerText = `${HH}:${MM}:${SS}`;
}

getClock();
setInterval(getClock, 1000)
// setTimeout(sayHello, 2000)
