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


const without = function (source, itemsToRemove) {
  let sourceWithout = [];
  for (let i = 0; i < source.length; i++) {
    // console.log(itemsToRemove[i]);
    if (itemsToRemove[i] !== source[i]) {
      sourceWithout.push(source[i]);
    }

  }

  console.log('sourceWithout', sourceWithout);
  return sourceWithout;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]