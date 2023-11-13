// This is for the table. Grabbing the Top 5 Stocks
async function topFiveStocks() {
  var table = document.getElementById("table");
  data = fetch("https://tradestie.com/api/v1/apps/reddit")
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < 5; i++) {
        var row = document.createElement("tr");
        var ticker = document.createElement("td");
        var commentSection = document.createElement("td");
        var sentiment = document.createElement("td");
        ticker.innerHTML = `<a href=https://finance.yahoo.com/quote/${res[i].ticker}>${res[i].ticker}</a>`;
        commentSection.innerHTML = res[i].no_of_comments;
        if (res[i].sentiment == "Bullish") {
          console.log(res[i].sentiment);
          console.log(res[i].sentiment == "Bullish");
          var imgBullish = document.createElement("img");
          imgBullish.src = "./bullish.jpeg";
          imgBullish.style.width = "100px";
          imgBullish.style.height = "100px";
          imgBullish.style.display = "flex";
          imgBullish.style.margin = "auto";
          sentiment.appendChild(imgBullish);
        } else {
          var imgBearish = document.createElement("img");
          imgBearish.src = "./bearish.jpeg";
          imgBearish.style.width = "100px";
          imgBearish.style.height = "100px";
          imgBearish.style.display = "flex";
          imgBearish.style.margin = "auto";
          sentiment.appendChild(imgBearish);
        }
        //sentiment.innerHTML = res[i].sentiment
        row.appendChild(ticker);
        row.appendChild(commentSection);
        row.appendChild(sentiment);
        table.appendChild(row);
      }
    });
  await data;
}

// This is for the line chart. Grabbing the data to display on chart
async function getData() {
  // Get Data from the API
  var date = new Date();
  var endDate = date.toISOString().split("T")[0];
  const stockSymbol = document.getElementById("stockSymbol");

  date.setDate(date.getDate() - document.getElementById("daysOptions").value);
  var startDate = date.toISOString().split("T")[0];

  await fetch(
    `https://api.polygon.io/v2/aggs/ticker/${stockSymbol.value}/range/1/day/${startDate}/${endDate}?adjusted=true&sort=asc&limit=116&apiKey=cWOQsIg6a6LlfCyK98MkWRZKmDQWC_AH`
  )
    .then((response) => response.json())
    .then((res) => {
      datesOnGraph = [];
      pricesOnGraph = [];
      for (let i = 0; i < res.results.length; i++) {
        const date = new Date(res.results[i].t);
        var formattedDate = date.toISOString().split("T")[0];
        const prices = res.results[i].v;
        datesOnGraph.push(formattedDate);
        pricesOnGraph.push(prices);
      }
    });
  graphData(datesOnGraph, pricesOnGraph);
}

function graphData(datesOnGraph, pricesOnGraph) {
  const ctx = document.getElementById("myChart");
  var chart = Chart.getChart("myChart");

  const background = document.getElementById("myChart");
  background.style.backgroundColor = "white";

  if (chart != undefined) {
    chart.destroy();
  }
  new Chart(ctx, {
    type: "line",
    data: {
      labels: datesOnGraph,
      datasets: [
        {
          label: "($) Stock Prices",
          data: pricesOnGraph,
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

//////////////////////////
var navToPage = function (page) {
  if (page == "stocks") {
    document.location.href = `Stocks.html`;
  } else if (page == "dogs") {
    document.location.href = `Dogs.html`;
  } else if (page == "home") {
    document.location.href = `Home.html`;
  } else {
    alert(`Could Not Recognize Page!`);
  }
};
var changeColor = function (color) {
  document.body.style.backgroundColor = color;
};
var lookUpStock = async function (stock) {
  // Lookup it up in the chart
  document.getElementById("stockSymbol").value = stock;
  await getData();
};

// Let's define a command.
function loadCommands() {
  if (annyang) {
    const commands = {
      hello: () => {
        alert(`Hello World!`);
      },
      "navigate to *page": navToPage,

      "change color to *color": changeColor,

      "look up *stock": lookUpStock,
    };
    // Add our commands to annyang then start it
    annyang.addCommands(commands);
    startRecognition();
  }
}

// Start listening.
function startRecognition() {
  annyang.start({ autoRestart: false });
}
function finishRecogition() {
  annyang.abort();
}

window.onload = function () {
  topFiveStocks();
  loadCommands();
};
