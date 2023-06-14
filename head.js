const assertEqual = function (acutal, expected) {

  if (acutal === expected) {
    console.log(`✅ Assertion Passed: ${acutal} === ${expected}`);
  }

  if (acutal !== expected) {
    console.log(`❌ Assertion Failed: ${acutal} !== ${expected}`);
  }

};

const head = function (input) {
  return input[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);