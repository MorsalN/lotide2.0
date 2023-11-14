const assertEqual = function (acutal, expected) {

  if (acutal === expected) {
    console.log(`✅ Assertion Passed: ${acutal} === ${expected}`);
  }

  if (acutal !== expected) {
    console.log(`❌ Assertion Failed: ${acutal} !== ${expected}`);
  }

};

const countLetters = function (sentence) {

}

assertEqual(countLetters(countLetters("lighthouse in the house")), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
})