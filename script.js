// validação do botão enviar:

const btnlogin = document.querySelector('#btnlogin');
const email = document.querySelector('#emailLogin');
const senha = document.querySelector('#senha');

function validacaoEmail() {
  const emailInvalido = email.value.length < 10 || email.value.length > 50;
  const senhaInvalida = senha.value.length < 6 || senha.value.length > 20;
  if (emailInvalido || senhaInvalida) {
    return false;
  }
}

btnlogin.addEventListener('click', (event) => {
  event.preventDefault();
  const validacao = validacaoEmail();
  if (validacao === false) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  email.value = '';
  senha.value = '';
});

// inserindo os radios de avalização
// id=avaliation
const radioBox = document.querySelector('#avaliation');

function radiosAvaliacao() {
  for (let i = 0; i <= 10; i += 1) {
    const labelOpt = document.createElement('label');
    labelOpt.innerHTML = i;
    labelOpt.htmlFor = i;
    const rateOpt = document.createElement('input');
    rateOpt.type = 'radio';
    rateOpt.name = 'rate';
    rateOpt.value = i;
    rateOpt.id = i;
    rateOpt.className = 'rate';
    radioBox.appendChild(rateOpt);
    radioBox.appendChild(labelOpt);
  }
}

radiosAvaliacao();
<<<<<<< HEAD
// // 15. Crie uma textarea.
// const counter = document.querySelector('#counter');
// const textArea = document.querySelector('#textarea');
=======

// 15. Crie uma textarea.
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
>>>>>>> 5fa02501d0cad228d0eaa078bccc49f37574b755

// function updateTextArea() {
//   counter.innerText = 500 - textArea.value.length;
// }

<<<<<<< HEAD
// textArea.addEventListener('input', updateTextArea);
=======
textArea.addEventListener('input', updateTextArea);

//17. Crie um botão de "Enviar" para submeter o formulário//
>>>>>>> 5fa02501d0cad228d0eaa078bccc49f37574b755
