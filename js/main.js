const btnCalcular = document.querySelector('#btnCalcular');
const inputValor = document.querySelector('#campoValor');
const listaNotas = document.querySelector('#listaNotas');
const listaMoedas = document.querySelector('#listaMoedas');

const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
const notas = [100, 50, 20, 10, 5, 2];

function insereNotaNaLista(notas, qt_notas) {
    const liNota = document.createElement('li');
    liNota.innerText = `${qt_notas} notas(s) de R$ ${notas.toFixed(2)}`;
    listaNotas.appendChild(liNota);
    liNota.classList.add('list-group-item');
    
}

function insereMoedaNaLista(moedas, qt_moedas) {
    const liMoeda = document.createElement('li');
    liMoeda.innerText = `${qt_moedas} moedas(s) de R$ ${moedas.toFixed(2)}`;
    listaMoedas.appendChild(liMoeda);
    liMoeda.classList.add('list-group-item');
    
}

btnCalcular.addEventListener('click', (event) => {
    let valor = parseFloat(inputValor.value);
    listaNotas.innerHTML = '';
    notas.forEach((notas) => {
        let qt_notas = parseInt(valor / notas);
        valor -= qt_notas * notas;
        insereNotaNaLista(notas,qt_notas);

    });

    listaMoedas.innerHTML = '';
    moedas.forEach((moedas) => {
        let qt_moedas = parseInt(valor / moedas);
        valor -= qt_moedas * moedas;
        insereMoedaNaLista(moedas,qt_moedas);

    });  
});