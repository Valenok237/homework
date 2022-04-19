// Задание 1

const myCity = 'Bugulma';
const myCityCountry = 'Russia';
let myCityPopulation = 80345;
let myCityArena = true;

// Задание 2 

let height = 40;
let width = 70;
const square = height * width;
console.log(square);

// Задание 3

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let distance = (speedOfFirst + speedOfSecond) * time;
console.log(distance);

// Задание 4

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
}   else if (randomNumber > 50) {
        console.log("randomNumber больше 50");
}   else{
    console.log("randomNumber больше 20, и меньше 50");
}

// Задание 5

switch(true) {
    case randomNumber < 20 :
        console.log("randomNumber меньше 20");
        break;
    case randomNumber > 50 :
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20, и меньше 50");
        break;        
}