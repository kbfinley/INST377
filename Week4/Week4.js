/* COMPARISON OPERATORS */
let x = '8';
document.getElementById("comparator").innerHTML = (x === '5'); //false
//document.getElementById("comparator").innerHTML = (x == '5'); <- true

/* IF/ELSE IF/ELSE STATEMENTS */
if(x == 6){
    console.log("It's not 5")
} else if (x == 5){
    console.log("It's 5")
}else{
    console.log("Well I don't know")
}
/* TERNARY OPERATOR */
(x > 7) ? console.log("It's more than 7") : console.log("It's less than 7");

const coolWords = ["Swag", "Yeet"]
console.log(coolWords[0]) 
console.log(coolWords[coolWords.length-1]) 
coolWords.push("Hallo")
console.log(coolWords[coolWords.length-1])
coolWords.pop()
console.log(coolWords[coolWords.length-1])

/* OBJECTS */
const object = {name: "Kristina"}
console.log(object)

/* FOR LOOPS + FUNCTIONS */
function printNumber(number){
    for(let i = 0; i < number; i++){
        if(i == 5){
            continue;
        }
        console.log(i)
    } 
}
printNumber(10)

/* BUILT-IN FUNCTIONS */
for(let i = 0; i < coolWords.length; i++){
    console.log("Word["+i+"]: " + coolWords[i].toUpperCase())
}

/* EVENTS */
function changeColor(){
    document.body.style.backgroundColor = "red"
}

/* ASYNC FUNCTIONS */
/*setTimeout(function callAfterTimeout(){
    changeColor();
    },5000);
    console.log("This is a test"); */

/* ASYNC/AWAIT - THE SHINY NEW WAY */
function firstAsync(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Now it's done!")
            const randomNum = Math.floor(Math.random() * 10)
            if(randomNum <= 5){
                reject('THIS NUMBER IS TOO LOW')
            }else{
                resolve(randomNum)
            }
        }, 1000)
    })
}

async function doMath(){
    try{
        const newNum = await firstAsync();
        console.log("New Num: " + newNum)
    }catch(err){
        console.log("ERROR: " + err);
    }
}
doMath();


