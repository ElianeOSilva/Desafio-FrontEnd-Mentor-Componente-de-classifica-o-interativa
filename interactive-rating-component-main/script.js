const numeroSelecionado = document.querySelectorAll('.numeros');
const containerPrincipal = document.querySelector('#principalContainer');
const containerThank = document.querySelector('#container2');
const resultadoNumero = document.querySelector('#numero');

let bnt_ativado;

containerThank.style.display = "none";

function selecionar(number) {

    numeroSelecionado.forEach((item) => {
        item.classList.remove('selecionado');
    });

    const Selecionado = numeroSelecionado[number - 1];
    Selecionado.classList.add('selecionado');
    bnt_ativado = number;
}


function submit() {
    if (!bnt_ativado) return;

    containerPrincipal.style.display = 'none';
    containerThank.style.display = 'block';

    resultadoNumero.textContent = bnt_ativado;
}
