const assertEqual = function(acutal, expected) {

  if (acutal === expected) {
    console.log(`✅ Assertion Passed: ${acutal} === ${expected}`);
  }

  if (acutal !== expected) {
    console.log(`❌ Assertion Failed: ${acutal} !== ${expected}`);
  }

};

assertEqual('lighthouse', 'bootcamp');
assertEqual(1, 1);