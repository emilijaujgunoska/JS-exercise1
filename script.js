console.log(2 ** 3 + (-1)); // expected 7
console.log(2 ** 4); // expected 16
console.log(5 *1); // expected 5
console.log(8 **2 - 5 ** 2); // expected 39


console.log(4 * 5 === 20); // true
console.log(6 * 5 == "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 > 4);


let boxWidth = prompt("Enter the width of your new box", 0)
let boxHeight= prompt("Enter the height of your new box", 0)
let boxLenght= prompt("Enter the lenght of your new box", 0)

let volumeOfBox = boxWidth * boxHeight * boxLenght

console.log(parseInt(volumeOfBox));