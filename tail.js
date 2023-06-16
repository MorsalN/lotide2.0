const assertEqual = function (acutal, expected) {

  if (acutal === expected) {
    console.log(`✅ Assertion Passed: ${acutal} === ${expected}`);
  }

  if (acutal !== expected) {
    console.log(`❌ Assertion Failed: ${acutal} !== ${expected}`);
  }

};

assertEqual('lighthouse', 'bootcamp');
assertEqual(1, 1);


const tail = function (input) {
  let newTail = input.slice(1);
  console.log(input);
  console.log(newTail);
}

assertEqual(tail(['one', 'two', 'three']));