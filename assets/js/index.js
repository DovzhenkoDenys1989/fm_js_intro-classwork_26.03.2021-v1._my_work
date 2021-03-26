'use strict'

let counter = 0;

while(counter < 10){
  if(counter %2 === 0){
    console.log (counter)
  }
  counter++;
}
console.log("final");




const GOOD_PASSWORD = "qwerty123";
let index = 0;

while(index < 5){
  const userInput = prompt("введите пароль: ");
  if (userInput === GOOD_PASSWORD){
    console.log("OK");
    break;
  }
    console.log("ERROR");
    index++;
  }

const userInput2 = +prompt("Введите факториал: ");
let count = 1;
let result = 1;

while (count <= userInput2){

  count++;
  result *= count;
  
}
console.log(result);











