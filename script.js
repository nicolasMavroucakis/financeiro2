function dolar() {
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
      .then(response => response.json())
      .then(data => {
          const usdData = data.USDBRL
          const dolarDisplay = document.querySelector('.dolar_valor_display')
          const pctChangeDisplay = document.querySelector('.pctChange')

          const dolarValue = parseFloat(usdData.bid).toFixed(2)
          dolarDisplay.textContent = `R$ ${usdData.bid}`
          pctChangeDisplay.textContent = `${usdData.pctChange}%`
      })
      .catch(error => {
          console.log('Ocorreu um erro:', error)
      })
}

function bitcoin() {
    fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
        .then(response => response.json())
        .then(data => {
            const bitData = data.BTCBRL
            const bitcoinDisplay = document.querySelector('.bitcoin_valor_display')
            const bitcoinPctChangeDisplay = document.querySelector('.pctChangeBitcoin')
  
            const bitValue = parseFloat(bitData.bid).toFixed(2)
            bitcoinDisplay.textContent = `R$ ${bitData.bid}`
            bitcoinPctChangeDisplay.textContent = `${bitData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function euro() {
    fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
        .then(response => response.json())
        .then(data => {
            const euroData = data.EURBRL
            const euroDisplay = document.querySelector('.euro_valor_display')
            const euroPctChangeDisplay = document.querySelector('.pctChangeEuro')
  
            const euroValue = parseFloat(euroData.bid).toFixed(2)
            euroDisplay.textContent = `R$ ${euroData.bid}`
            euroPctChangeDisplay.textContent = `${euroData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function libra() {
    fetch('https://economia.awesomeapi.com.br/last/GBP-BRL')
        .then(response => response.json())
        .then(data => {
            const libraData = data.GBPBRL
            const libraDisplay = document.querySelector('.libra_valor_display')
            const libraPctChangeDisplay = document.querySelector('.pctChangeLibra')
  
            const libraValue = parseFloat(libraData.bid).toFixed(2)
            libraDisplay.textContent = `R$ ${libraData.bid}`
            libraPctChangeDisplay.textContent = `${libraData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

libra()
setInterval(libra, 30000)

euro ()
setInterval(euro, 30000)

dolar ()
setInterval(dolar, 30000)

bitcoin()
setInterval(bitcoin, 30000)

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => nav.classList.toggle("active"))

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Função para remover a classe 'active' quando um link é clicado
    function hideNavList() {
        nav.classList.remove('active');
    }

    // Adiciona o evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener('click', hideNavList);
    });
});


