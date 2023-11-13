async function getDogImages() {
  for (let i = 0; i < 10; i++) {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const blob = await response.json();
    const img = document.createElement("img");
    const simpleSlider = document.getElementById("simpleSlider");
    img.src = blob.message;
    img.style.width = "100%";
    img.style.height = "100%";
    simpleSlider.appendChild(img);
  }
  slideShow();
}

function slideShow() {
  simpleslider.getSlider();
}

async function getDogBreeds() {
  await fetch("https://dogapi.dog/api/v2/breeds")
    .then((res) => res.json())
    .then((res) => {
      var buttonBox = document.getElementById("button-box");
      for (let i = 0; i < res.data.length; i++) {
        const button = document.createElement("button");
        button.innerText = res.data[i].attributes.name;
        button.classList.add("button-74");
        var dogInfo = document.getElementById("dogInfo");
        dogInfo.style.display = "none";
        button.addEventListener("click", function () {
          var dogInfo = document.getElementById("dogInfo");
          dogInfo.style.display = "block";
          var name = document.createElement("p");
          var description = document.createElement("p");
          var minLife = document.createElement("p");
          var maxLife = document.createElement("p");

          name.innerText = "Name: " + res.data[i].attributes.name;
          name.style.fontSize = "40px";
          description.innerText =
            "Description: " + res.data[i].attributes.description;
          description.style.fontSize = "20px";
          minLife.innerText = "Min Life: " + res.data[i].attributes.life.min;
          minLife.style.fontSize = "20px";
          maxLife.innerText = "Max Life: " + res.data[i].attributes.life.max;
          maxLife.style.fontSize = "20px";

          dogInfo.innerHTML = " ";
          dogInfo.appendChild(name);
          dogInfo.appendChild(description);
          dogInfo.appendChild(minLife);
          dogInfo.appendChild(maxLife);
        });
        buttonBox.appendChild(button);
      }
    });
}
//////////////////
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
var loadDogBreed = async function (dogBreed) {
  document.getElementById("dogInfo").value = dogBreed;
  //console.log("Dog Breed: ", dogBreed)
  fetch(`https://dogapi.dog/api/v2/breeds`) // creating
    .then((res) => res.json())
    .then((res) => {
      var buttonBox = document.getElementById("button-box");
      for (let i = 0; res.data.length; i++) {
        if (res.data[i].attributes.name == dogBreed) {
          console.log("Res: ", res.data[i].attributes.name); // what the response is

          var dogInfo = document.getElementById("dogInfo");
          var name = document.createElement("p");
          var description = document.createElement("p");
          var minLife = document.createElement("p");
          var maxLife = document.createElement("p");

          name.innerText = "Name: " + res.data[i].attributes.name;
          name.style.fontSize = "40px";
          description.innerText =
            "Description: " + res.data[i].attributes.description;
          description.style.fontSize = "20px";
          minLife.innerText = "Min Life: " + res.data[i].attributes.life.min;
          minLife.style.fontSize = "20px";
          maxLife.innerText = "Max Life: " + res.data[i].attributes.life.max;
          maxLife.style.fontSize = "20px";
          dogInfo.style.display = "block";

          dogInfo.innerHTML = " "; // eraser
          dogInfo.appendChild(name);
          dogInfo.appendChild(description);
          dogInfo.appendChild(minLife);
          dogInfo.appendChild(maxLife);

          console.log("What I am saying: ", dogBreed); // what you are saying
          /* What I notice is that the voice recognition works on Border Collie and Japanese Terrier
                        but it is difficult more harder words */
        }
      }
    });
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

      "load dog breed *dogBreed": loadDogBreed,
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

window.onload = function () {
  getDogImages();
  getDogBreeds();
  loadCommands();
};
