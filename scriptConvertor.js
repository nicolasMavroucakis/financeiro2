const select2 =  document.querySelector('#select_2')
const input1 = document.querySelector('#input_1')
const botao =  document.querySelector('#button_converter')
const resultado_display = document.querySelector('#resultado_transferencia')

function conta (valor, moedaValor,display) {
    let resultado = valor * moedaValor;
    display.textContent = resultado.toFixed(2);
}

botao.addEventListener('click', function () {
    let valor = select2.value
    let input = input1.value

    if (valor === 'Dolar') {
        valor = 'USD'
    } else if (valor === 'Euro') {
        valor = 'EUR'
    } else if (valor === 'Dolar Canadense') {
        valor = 'CAD'
    } else if (valor === 'Libra') {
        valor = 'GBP'
    } else if (valor === 'Bitcoin') {
        valor = 'BTC'
    } else if (valor === 'Etherium') {
        valor = 'ETH'
    } else if (valor === 'XRP') {
        valor = 'XRP'
    } else if (valor === 'Yen Japonês') {
        valor = 'JPY'
    } else if (valor === 'Yuan Chinês') {
        valor = 'CNY'
    } else {
        valor = 'BRL'
    }

    fetch(`https://economia.awesomeapi.com.br/json/last/${valor}-BRL`)
        .then(response => response.json())
        .then(data => {
            const moedaData = data[`${valor}BRL`].bid
            conta(input, moedaData, resultado_display)
        })
        .catch(error => {
            resultado_display.textContent = "ocorreu um erro"
        });
});