const sideBar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const signUpButton = document.getElementById('btn-inscrever');
const btnTresPontos = document.getElementById('btn-tres-pontos');
const modalOverlay = document.getElementById('modal-overlay');

let inscrito = false;

menuIcon.addEventListener('click', function () {
    sideBar.classList.toggle('expandida')
});

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

// TRES PONTINHOS CELULAR FUNCTION
btnTresPontos.addEventListener('click', function () {
    modalOverlay.classList.add('ativo');
});

modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('ativo');
    }
})