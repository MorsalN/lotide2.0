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
  // console.log(input);
  console.log(newTail);
  return newTail;
}



// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!