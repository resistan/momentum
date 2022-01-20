// background
const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg'
]

const todaysImage = images[Math.floor(Math.random() * images.length)];
const bodyElement = document.querySelector('body');
bodyElement.style.backgroundImage = 'url("./images/' + todaysImage + '")';

// clock
const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const HH = String(date.getHours()).padStart(2, "0");
    const MM = String(date.getMinutes()).padStart(2, "0");
    const SS = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${HH}:${MM}:${SS}`;
}

getClock();
setInterval(getClock, 1000)

// greetings
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-input');
const userInfo = document.querySelector('.userinfo');
const userInfoTitle = document.querySelector('.userinfo h1');
const logOut =  document.querySelector('.userinfo button');
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreenting(username) {
    userInfo.classList.remove(HIDDEN_CLASSNAME);
    userInfoTitle.innerText = `Hello ${username}`;
}
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreenting(username);
}
function onLogOut(event) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    userInfo.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername != null) {
    paintGreenting(savedUsername);
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}

logOut.addEventListener('click',onLogOut);

// quotes
const quotes = [
    { text: "하나. 당신이 특별하다고 생각하지 마라.", from: "Janteloven" },
    { text: "둘. 당신이 남들만큼 좋은 사람이라고 생각하지 마라.", from: "Janteloven" },
    { text: "셋. 당신이 남들보다 똑똑하다고 생각하지 마라.", from: "Janteloven" },
    { text: "넷. 당신이 남들보다 낫다고 생각하지 마라.", from: "Janteloven" },
    { text: "다섯. 당신이 남들보다 많이 안다고 생각하지 마라.", from: "Janteloven" },
    { text: "여섯. 당신이 남들보다 중요하다고 생각하지 마라.", from: "Janteloven" },
    { text: "일곱. 당신이 모든 일을 잘한다고 생각하지 마라.", from: "Janteloven" },
    { text: "여덟. 남들을 비웃지 마라.", from: "Janteloven" },
    { text: "아홉. 누군가 당신을 걱정하리라 생각하지 마라.", from: "Janteloven" },
    { text: "열. 남들에게 무엇이든 가르칠 수 있으리라 생각하지 마라.", from: "Janteloven" },
]

const quote = document.querySelector("#quote p q")
const from = document.querySelector("#quote p cite")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.text;
from.innerText = todaysQuote.from;

// todo
const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const item = event.target.closest('li');
    item.remove();
    toDos = toDos.filter( el => el.id !== parseInt(item.id) );
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const icon = document.createElement("i");
    icon.classList.add('icon-clear');
    const button = document.createElement("button");
    button.setAttribute("title","Delete");
    button.appendChild(icon);
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

todoForm.addEventListener('submit', handleToDoSubmit);