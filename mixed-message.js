import { funFacts } from "./fun-facts.mjs";
import { funnyQuotes } from "./funny-quotes.mjs";
import { motivationalQuotes } from "./motivational-quotes.mjs";

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

let getQuote = (quotes) => {
    let i = getRandomInt(0,quotes.length);
    if(quotes[i] == undefined){
        return getQuote(quotes);
    }
    return quotes[i];
};