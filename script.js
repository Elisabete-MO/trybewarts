/* <script src="script.js"></script> footer */
// id="evatuation-form"
// validação do botão enviar:
// necessário incluir o id btnlogin ao botao de login, email ao campo email e senha ao campo senha

const btnlogin = document.querySelector('#btnlogin');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

btnlogin.addEventListener('click', function(event) {
  event.preventDefault();
  const validacao = validacaoEmail();
  if (validacao === false) {
    alert('Dados inválidos');
  } else {
    alert('Login realizado com sucesso!');
  }
  email.value = "";
  senha.value = "";
});

function validacaoEmail() {
  const emailInvalido = email.value.length < 10 || email.value.length > 50;
  const senhaInvalida = senha.value.length < 6 || senha.value.length > 20;
  if (emailInvalido || senhaInvalida) {
    return false;
  }
  else {
    return true;
  }
}

// inserindo os radios de avalização
// id=avaliation
const radioBox = document.querySelector('#avaliation');

function radiosAvaliacao() {
  for(let i = 0; i <= 10; i += 1) {
    let labelOpt = document.createElement('label');
    labelOpt.innerHTML = i;
    labelOpt.htmlFor = i;
    let rateOpt = document.createElement('input');
    rateOpt.type ="radio";
    rateOpt.name = "rate";
    rateOpt.value = i;
    rateOpt.id = i;
    rateOpt.className = "rate";
    radioBox.appendChild(rateOpt);
    radioBox.appendChild(labelOpt);
  }
}

radiosAvaliacao();