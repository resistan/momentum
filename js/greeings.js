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
