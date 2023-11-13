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

// Let's define a command.
function loadCommands() {
  if (annyang) {
    const commands = {
      hello: () => {
        alert(`Hello World!`);
      },
      "navigate to *page": navToPage,

      "change color to *color": changeColor,
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
function finishRecognition() {
  annyang.abort();
}

////////////////

function getQuote() {
  fetch("https://zenquotes.io/api/quotes")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((message) => {
        let quote = message.q;
        let author = message.a;
        const quoteDiv = document.getElementById("quote");
        quoteDiv.innerHTML = `"${quote}" - ${author}`;
      });
    });
}

window.onload = function () {
  loadCommands();
  getQuote();
};
