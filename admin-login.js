const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username === 'admin' && password === 'admin'){
        alert('Good Day, Sir!')
    }else{
        alert('Not a good day, Sir!');
    }
});