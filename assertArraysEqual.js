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




