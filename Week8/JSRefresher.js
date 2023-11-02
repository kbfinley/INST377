function testCode(){


// Variables 

let var1 = 2;
const var2 = 'wordy';
const name = 'Kristina'
console.log('Words....')

//FETCH 
//Fetch is a function that acts like a GET API and gets a value, it is async

//Referencing Variables
const hi = 'Hi ' + name;
console.log(hi)
const text = `Hi this is a super long text variable and there are a lot of words ${name} and 
they are many words around it so I don't want to use they + sign`
console.log(text)


// JSON
fetch("https://www.frankfurter.app/currencies") //Getting a JSON Object which is {} braces
.then((res) => res.json())
.then((res) => {
    console.log(res)
    for(const [key,value] of Object.entries(res)){
        console.log('Key: ', key)
        console.log('Value: ', value)
    }
});
var somethingToChange = document.getElementById('somethingToChange');
console.log('Something to Change:', somethingToChange)
somethingToChange.innerHTML = `My name is: ${name}`
somethingToChange.innerHTML = name

fetch("https://inst377-lab4-server.vercel.app/api/product/all") //Getting an array which is [] Brackets
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        res.forEach(element => {
            console.log(element) //element is an JSON Object {}
            console.log(element.name)
            console.log(element['name'])
        });
    });
}
window.onload = testCode;