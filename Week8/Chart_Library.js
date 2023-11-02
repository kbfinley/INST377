// Put the currency into labels


// Put the USD Rate into Data

async function getData(){
// Get Data from the API
    var data = await fetch("https://api.coincap.io/v2/assets")
        .then((response) => response.json());
    var objectData = data.data
    labels = []
    prices = []
    objectData.forEach(element => {
        if(element.priceUsd > 1 & element.priceUsd < 250) {
            labels.push(element.symbol)
            prices.push(element.priceUsd)
    }
    });
    console.log("Labels: ", labels)
    console.log("Prices: ", prices)


const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: labels, //symbols
        datasets: [{
            label: 'USD Rate',
            data: prices, //numbers
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}  
window.onload = getData; 
