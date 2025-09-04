// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration 2 | Find the Longest Word

// function findLongestWord(wordArray) {
//   if (wordArray.length === 0) {
//     return null;
//   }
//   longestWord = [];
//   longestWord.push(wordArray[0]);

//   for (i = 0; i < wordArray.length; i++) {
//     const currentArrayElement = wordArray[i];

//     if (currentArrayElement.length > longestWord[0].length) {
//       longestWord.push(currentArrayElement);
//       longestWord.shift();

//       console.log(longestWord);
//     }
//   }
//   return longestWord[0];
// }

// const Newwords = [
//   "mystery",
//   "brother",
//   "aviator",
//   "crocodile",
//   "pearl",
//   "orchard",
//   "crackpot",
// ];

// console.log(findLongestWord(Newwords));

function findLongestWord(wordArray) {
  if (wordArray.length === 0) {
    return null;
  }

  longestWord = wordArray[0];

  for (i = 0; i < wordArray.length; i++) {
    const currentArrayElement = wordArray[i];

    if (currentArrayElement.length > longestWord.length) {
      longestWord = currentArrayElement;

      console.log(longestWord);
    }
  }
  return longestWord;
}

const Newwords = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

console.log(findLongestWord(Newwords));

// Iteration 3 | Sum Numbers
const numbersinter3 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
  let sum = 0;
  for (i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}
console.log(sumNumbers(numbersinter3));

// Iteration 4 | Numbers Average
const Numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(number2) {
  aveNum = sumNumbers(number2) / number2.length;
  return aveNum;
}

console.log(averageNumbers(Numbers2));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordArray2, checkword) {
  if (wordArray2.length === 0) {
    return 0;
  }

  for (i = 0; i < wordArray2.length; i++) {
    if (wordArray2[i] === checkword) {
      return true;
    }
  }

  return false;
}

console.log(doesWordExist(words2, "cat"));
