const quotes = [
    { text: "하나. 당신이 특별하다고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "둘. 당신이 남들만큼 좋은 사람이라고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "셋. 당신이 남들보다 똑똑하다고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "넷. 당신이 남들보다 낫다고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "다섯. 당신이 남들보다 많이 안다고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "여섯. 당신이 남들보다 중요하다고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "일곱. 당신이 모든 일을 잘한다고 생각하지 마라.", from: "얀테의 법칙" },
    { text: "여덟. 남들을 비웃지 마라.", from: "얀테의 법칙" },
    { text: "아홉. 누군가 당신을 걱정하리라 생각하지 마라.", from: "얀테의 법칙" },
    { text: "열. 남들에게 무엇이든 가르칠 수 있으리라 생각하지 마라.", from: "얀테의 법칙" },
]

const quote = document.querySelector("#quote p q")
const from = document.querySelector("#quote p cite")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.text;
from.innerText = todaysQuote.from;