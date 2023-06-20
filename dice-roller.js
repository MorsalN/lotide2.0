// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

const rollDice = function (number) {
  let outputArray = [];

  for (let i = 0; i < number; i++) {
    let num = Math.floor(Math.random() * 7);
    outputArray.push(num);
  }
  console.log('outputArray', outputArray);
  let output = outputArray.map(Number);
  return `Rolled ${number} dice: ${output}`;
}

console.log(rollDice(3));