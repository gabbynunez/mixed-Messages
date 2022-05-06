import { funFacts } from "./fun-facts.mjs";
import { funnyQuotes } from "./funny-quotes.mjs";
import { motivationalQuotes } from "./motivational-quotes.mjs";


function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let findQuote = (quotes) =>{
    let i = parseInt(getRandomInt(0,quotes.length));
    console.log(i);
    let frase = quotes[i];
    document.getElementById('phrase').innerHTML = `${frase}`;

  }

let getMotivationalQuote = () => {
 findQuote(motivationalQuotes);
};
let getFunnyQuote = () => {
    findQuote(funnyQuotes);
};
let getFunFact = () => {
    findQuote(funFacts);
};


document.getElementById("button-mot").addEventListener("click", getMotivationalQuote);
document.getElementById("button-fun").addEventListener("click", getFunnyQuote);
document.getElementById("button-fact").addEventListener("click", getFunFact);





//document.getElementById('phrase').innerHTML = "Click one of the buttons to get a new phrase";

