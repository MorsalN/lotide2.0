const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      return true;
    } else {
      return false;
    }
  }
}

const assertArraysEqual = function (acutal, expected) {

  if (eqArrays(acutal, expected)) {
    console.log(`✅ Assertion Passed: ${acutal} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${acutal} !== ${expected}`);
  }

}




const middle = function (array) {
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    let index = array.length / 2;
    return [array[index - 1], array[index]];
  }

  if (array.length % 2 !== 0) {
    let index = Math.floor(array.length / 2);
    return [array[index]];
  }
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2,3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3,4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);