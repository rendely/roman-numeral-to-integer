const numeralConversion = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function romanNumeral(string) {
  values = Array.from(string).map(s => numeralConversion[s]);
  values_with_subtractions = values.map((n,i) => {
    if (values[i+1] > n) return values[i+1] - n
    if (n > values[i-1]) return 0
    return n
  });
  return values_with_subtractions.reduce((curr, agg) => curr + agg, 0)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 3");
  console.log(romanNumeral('III'));

  console.log("");

  console.log("Expecting: 1900");
  console.log(romanNumeral('MCM'));

  console.log("");

  console.log("Expecting: 1999");
  console.log(romanNumeral('MCMXCIX'));

  console.log("");

  console.log("Expecting: 44");
  console.log(romanNumeral('XLIV'));

  console.log("");

  console.log("Expecting: 223");
  console.log(romanNumeral('CCXXIII'));

  console.log("");

  console.log("Expecting: 3848");
  console.log(romanNumeral('MMMDCCCXLVIII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

// I, V, X, L, C, D, and M, standing respectively for 1, 5, 10, 50, 100, 500, and 1,000
//A symbol placed after another of equal or greater value adds its value
 //a symbol is placed before one of greater value to subtract its value
