function getCurrency(){
    const fromCurrency = document.getElementById('from')
    const toCurrency = document.getElementById('to')
    
    
    fetch("https://www.frankfurter.app/currencies")
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        Object.entries(res).forEach(([countryAbrev, countryName]) => { 
            /* for loop through the object of options */
            console.log(countryName)
             const fromCurrencyOption = document.createElement('option');
             fromCurrencyOption.value = countryAbrev;
             fromCurrencyOption.innerHTML = countryName;

             const toCurrencyOption = document.createElement('option');
             toCurrencyOption.value = countryAbrev;
             toCurrencyOption.innerHTML = countryName;

             fromCurrency.appendChild(fromCurrencyOption);
             console.log(fromCurrencyOption);
             toCurrency.appendChild(toCurrencyOption);
             console.log(toCurrencyOption);
        });
    });
}


function conversion(){
    const fromCurrency = document.getElementById('from')
    const toCurrency = document.getElementById('to')
    const numberToConvert = document.getElementById('numberToConvert')
    const result = document.getElementById('result')

    if(fromCurrency.value == toCurrency.value){
        alert("You cannot convert to and from the same currency!")
        return false;
    }

    fetch(`https://www.frankfurter.app/latest?amount=${numberToConvert.value}&from=${fromCurrency.value}&to=${toCurrency.value}`)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `${numberToConvert.value} ${fromCurrency.value} is equal to ${data.rates[toCurrency.value]} ${toCurrency.value}`;

    });
}

window.onload = getCurrency;