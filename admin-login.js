const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username === 'admin' && password === 'admin'){
        window.location.href = "https://docs.google.com/spreadsheets/d/1C_BiGRBXCkEPbrUAx2U_5rKdhdoTv9P1RqOWp_wwPqI/edit#gid=0";
    }else{
        alert('Not a good day, Sir!');
    }
});