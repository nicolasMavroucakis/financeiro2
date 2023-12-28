function dolarMercado() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then(response => response.json())
        .then(data => {
            const usdData = data.USDBRL
            const dolarDisplay = document.querySelector('#dolarMercadoVal')
            const pctChangeDisplay = document.querySelector('#dolarMercadoPor')
            const dolarMax = document.querySelector('#dolarMercadoVarMax')
            const dolarMin = document.querySelector('#dolarMercadoVarMin')
  
            const dolarValue = parseFloat(usdData.bid).toFixed(2)
            const dolarMaxDisplay = parseFloat(usdData.high)
            const dolarMinDisplay = parseFloat(usdData.low)

            dolarMin.textContent = dolarMinDisplay
            dolarMax.textContent = dolarMaxDisplay
            dolarDisplay.textContent = `R$ ${usdData.bid}`
            pctChangeDisplay.textContent = `${usdData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
  }

function dolarCadMercado() {
    fetch('https://economia.awesomeapi.com.br/last/CAD-BRL')
        .then(response => response.json())
        .then(data => {
            const usdCadData = data.CADBRL
            const dolarCadDisplay = document.querySelector('#dolarCadMercadoVal')
            const pctChangeDisplay = document.querySelector('#dolarCadMercadoPor')
            const dolarCadMax = document.querySelector('#dolarCadMercadoVarMax')
            const dolarCadMin = document.querySelector('#dolarCadMercadoVarMin')

            const dolarCadValue = parseFloat(usdCadData.bid).toFixed(2)
            const dolarCadMaxDisplay = parseFloat(usdCadData.high)
            const dolarCadMinDisplay = parseFloat(usdCadData.low)

            dolarCadMin.textContent = dolarCadMinDisplay
            dolarCadMax.textContent = dolarCadMaxDisplay
            dolarCadDisplay.textContent = `R$ ${usdCadData.bid}`
            pctChangeDisplay.textContent = `${usdCadData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function euroMercado() {
    fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
        .then(response => response.json())
        .then(data => {
            const euroData = data.EURBRL
            const euroDisplay = document.querySelector('#euroMercadoVal')
            const pctChangeDisplay = document.querySelector('#euroMercadoPor')
            const euroMax = document.querySelector('#euroMercadoVarMax')
            const euroMin = document.querySelector('#euroMercadoVarMin')
    
            const euroValue = parseFloat(euroData.bid).toFixed(2)
            const euroMaxDisplay = parseFloat(euroData.high)
            const euroMinDisplay = parseFloat(euroData.low)

            euroMin.textContent = euroMinDisplay
            euroMax.textContent = euroMaxDisplay
            euroDisplay.textContent = `R$ ${euroData.bid}`
            pctChangeDisplay.textContent = `${euroData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function libraMercado() {
    fetch('https://economia.awesomeapi.com.br/last/GBP-BRL')
        .then(response => response.json())
        .then(data => {
            const libraData = data.GBPBRL
            const libraDisplay = document.querySelector('#libraMercadoVal')
            const pctChangeDisplay = document.querySelector('#libraMercadoPor')
            const libraMax = document.querySelector('#libraMercadoVarMax')
            const libraMin = document.querySelector('#libraMercadoVarMin')
    
            const libraValue = parseFloat(libraData.bid).toFixed(2)
            const libraMaxDisplay = parseFloat(libraData.high)
            const libraMinDisplay = parseFloat(libraData.low)

            libraMin.textContent = libraMinDisplay
            libraMax.textContent = libraMaxDisplay
            libraDisplay.textContent = `R$ ${libraData.bid}`
            pctChangeDisplay.textContent = `${libraData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function bitcoinMercado() {
    fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
        .then(response => response.json())
        .then(data => {
            const bitData = data.BTCBRL
            const bitcoinDisplay = document.querySelector('#bitcoinMercadoVal')
            const bitcoinPctChangeDisplay = document.querySelector('#bitcoinMercadoPor')
            const bitcoinMax = document.querySelector('#bitcoinMercadoVarMax')
            const bitcoinMin = document.querySelector('#bitcoinMercadoVarMin')
    
            const bitValue = parseFloat(bitData.bid).toFixed(2)
            const bitcoinMaxDisplay = parseFloat(bitData.high)
            const bitcoinMinDisplay = parseFloat(bitData.low)

            bitcoinMin.textContent = bitcoinMinDisplay
            bitcoinMax.textContent = bitcoinMaxDisplay
            bitcoinDisplay.textContent = `R$ ${bitData.bid}`
            bitcoinPctChangeDisplay.textContent = `${bitData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function ethMercado() {
    fetch('https://economia.awesomeapi.com.br/last/ETH-BRL')
        .then(response => response.json())
        .then(data => {
            const ethData = data.ETHBRL
            const ethDisplay = document.querySelector('#ethMercadoVal')
            const ethPctChangeDisplay = document.querySelector('#ethMercadoPor')
            const ethMax = document.querySelector('#ethMercadoVarMax')
            const ethMin = document.querySelector('#ethMercadoVarMin')
    
            const ethValue = parseFloat(ethData.bid).toFixed(2)
            const ethMaxDisplay = parseFloat(ethData.high)
            const ethMinDisplay = parseFloat(ethData.low)

            ethMin.textContent = ethMinDisplay
            ethMax.textContent = ethMaxDisplay
            ethDisplay.textContent = `R$ ${ethData.bid}`
            ethPctChangeDisplay.textContent = `${ethData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function xrpMercado() {
    fetch('https://economia.awesomeapi.com.br/last/XRP-BRL')
        .then(response => response.json())
        .then(data => {
            const xrpData = data.XRPBRL
            const xrpDisplay = document.querySelector('#xrpMercadoVal')
            const xrpPctChangeDisplay = document.querySelector('#xrpMercadoPor')
            const xrpMax = document.querySelector('#xrpMercadoVarMax')
            const xrpMin = document.querySelector('#xrpMercadoVarMin')
    
            const xrpValue = parseFloat(xrpData.bid).toFixed(2)
            const xrpMaxDisplay = parseFloat(xrpData.high)
            const xrpMinDisplay = parseFloat(xrpData.low)

            xrpMin.textContent = xrpMinDisplay
            xrpMax.textContent = xrpMaxDisplay
            xrpDisplay.textContent = `R$ ${xrpData.bid}`
            xrpPctChangeDisplay.textContent = `${xrpData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function chinaMercado() {
    fetch('https://economia.awesomeapi.com.br/last/CNY-BRL')
        .then(response => response.json())
        .then(data => {
            const chinaData = data.CNYBRL
            const chinaDisplay = document.querySelector('#chinaMercadoVal')
            const chinaPctChangeDisplay = document.querySelector('#chinaMercadoPor')
            const chinaMax = document.querySelector('#chinaMercadoVarMax')
            const chinaMin = document.querySelector('#chinaMercadoVarMin')
    
            const chinaValue = parseFloat(chinaData.bid).toFixed(2)
            const chinaMaxDisplay = parseFloat(chinaData.high)
            const chinaMinDisplay = parseFloat(chinaData.low)

            chinaMin.textContent = chinaMinDisplay
            chinaMax.textContent = chinaMaxDisplay
            chinaDisplay.textContent = `R$ ${chinaData.bid}`
            chinaPctChangeDisplay.textContent = `${chinaData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}

function jpMercado() {
    fetch('https://economia.awesomeapi.com.br/last/JPY-BRL')
        .then(response => response.json())
        .then(data => {
            const jpData = data.JPYBRL
            const jpDisplay = document.querySelector('#jpMercadoVal')
            const jpPctChangeDisplay = document.querySelector('#jpMercadoPor')
            const jpMax = document.querySelector('#jpMercadoVarMax')
            const jpMin = document.querySelector('#jpMercadoVarMin')
    
            const jpValue = parseFloat(jpData.bid).toFixed(2)
            const jpMaxDisplay = parseFloat(jpData.high)
            const jpMinDisplay = parseFloat(jpData.low)

            jpMin.textContent = jpMinDisplay
            jpMax.textContent = jpMaxDisplay
            jpDisplay.textContent = `R$ ${jpData.bid}`
            jpPctChangeDisplay.textContent = `${jpData.pctChange}%`
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error)
        })
}
jpMercado()
setInterval(jpMercado, 30000)

chinaMercado()
setInterval(chinaMercado, 30000)

xrpMercado()
setInterval(xrpMercado, 30000)

ethMercado()
setInterval(ethMercado, 30000)

bitcoinMercado ()
setInterval(bitcoinMercado, 30000)

libraMercado()
setInterval(libraMercado, 30000)

euroMercado()
setInterval(euroMercado, 30000)

dolarCadMercado()
setInterval(dolarCadMercado, 30000)

dolarMercado ()
setInterval(dolarMercado, 30000)