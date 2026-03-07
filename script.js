const sideBar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const signUpButton = document.getElementById('btn-inscrever');

let inscrito = false;

// FUNÇÃO INSCRITO OU NÃO //
if (localStorage.getItem('inscrito') === 'true') {
    inscrito = true;
    signUpButton.classList.add('inscrito');
    signUpButton.textContent = 'Inscrito ✔';
}

signUpButton.addEventListener('click', function () {
    if (inscrito === false) {
        inscrito = true;
        signUpButton.classList.add('inscrito');
        signUpButton.textContent = 'Inscrito ✔';
        localStorage.setItem('inscrito', 'true'); // salva
    } else {
        inscrito = false;
        signUpButton.classList.remove('inscrito');
        signUpButton.textContent = 'Inscrever-se';
        localStorage.setItem('inscrito', 'false'); // salva
    }
});