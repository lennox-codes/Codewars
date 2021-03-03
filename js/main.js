// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  let myStr = "";
  let myPhoneNumber;
  for (i = 0; i < numbers.length; i++) {
    myStr += numbers[i];
  }
  myPhoneNumber = `(${myStr.substr(0, 3)}) ${myStr.substr(3, 3)}-${myStr.substr(
    6
  )}`;

  return myPhoneNumber;
}

// Take in a number and determines if it is a square number
function isSquare(n) {
  if (Number.isInteger(Math.sqrt(n)) === true) {
    return true;
  }
  return false;
}

//write function that counts the total number of adjacent repeating element sint an array for repeats of the direction
function totalRepeatDirection(walk) {
  //counts total repeat of adjacent elements
  let totalRepeat = 0;
  let firstDirection = walk[0];
  for (let i = 1; i < walk.length; i++) {
    //if the two next elements are the same, then it adds 1 to the total repeat
    if (walk[i] === firstDirection) {
      totalRepeat += 1;
      //otherwise, it then goes to the next section to check
    }
    firstDirection = walk[i];
  }
  return totalRepeat;
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  totalDirection = 0;
  // Varible to determine the starting total direction
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") totalDirection += 1;
    if (walk[i] === "s") totalDirection -= 1;
    if (walk[i] === "w") totalDirection += 2;
    if (walk[i] === "e") totalDirection -= 2;
    //Check to see if the walk length is equal to 10 miles and the totalDirection is 0
  }

  return walk.length === 10 && totalDirection === 0;
}

//Alternate Solution
/*
function isValidWalk(walk) {
  dx = 0;
  dy = 0;
  // Varible to determine the starting total direction
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") dy += 1;
    if (walk[i] === "s") dy -= 1;
    if (walk[i] === "w") dx += 1;
    if (walk[i] === "e") dx -= 1;
    //Check to see if the walk time is equal to 10 minutes and that direction in both axis is equal to 0
  }
  return walk.length === 10 && dx === 0 && dy === 0;
}
*/
//test
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "w", "s", "e"]));
// console.log(isValidWalk(["n", "w", "n", "w", "n", "w", "n", "w", "n", "w"]));

//make fibonacci sequnece
//take number array with two values and make a fibonacci sequence from it up to a specified length

function makeFibonacci(startingSequence, n) {
  let newArray = startingSequence; //defines the starting sequence as given by the function
  let firstElement = startingSequence[0];
  for (let i = 1; i <= n; i++) {
    newArray.push((firstElement += startingSequence[i]));
    firstElement = startingSequence[i];
  }
  console.log(newArray.splice(0, n));
}

//function call
makeFibonacci([0, 1], 10);

//make tribonacci sequence
//signature is the building block of the new Array
/*
function tribonacci(signature,n) {
  let tribonacci = signature
  let firstNumber = signature[0]
  let secondNumber = signature[1]
  for (let i = 2; i <= n; i++) {
    tribonacci.push(firstNumber + secondNumber + signature[i])
    firstNumber = signature[i-1]
    secondNumber = signature[i]
  //splices tribonacci to report appropriate array length based on n
} return tribonacci.splice(0,n);
*/

//alternate solution
// function tribonacci(signature, n) {
//   for (let i = 0; i < n - 3; i++) {
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
//   }
//   return signature.splice(0, n); //splices tribonacci to report appropriate array length based on n
// }

// // console.log(tribonacci([1, 1, 1], 5));

// //code that accumulates each letter of a string in increasing number as such:
// //accum("abcd") -> "A-Bb-Ccc-Dddd"
// //accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// //accum("cwAt") -> "C-Ww-Aaa-Tttt"

// // //function to repeat a letter a n number of times
// // function repeatLetter(letter, n) {
// //   let repeatString = "";
// //   for (let i = 0; i < n; i++) {
// //     repeatString += letter;
// //   }

// //   return repeatString;
// // }

// // //accumulate string using repeatLeter function but also append a dash before the next index
// // function accum(string) {
// //   let newString = "";
// //   let repeatString = "";
// //   for (let i = 0; i < string.length; i++) {
// //     newString +=
// //       "-" + string[i].toUpperCase() + repeatLetter(string[i], i).toLowerCase();
// //   }
// //   return newString.substring(1);
// // }

// // console.log(accum("GREEN"));
// // accum("cwAt");

// // // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// // var moveZeros = function (arr) {
// //   let zeroArr = [];
// //   let nonZeroArr = [];
// //   let finalArray;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === 0) {
// //       zeroArr.push(arr[i]); //removes the zero value and then stores it in the zero array
// //     } else {
// //       nonZeroArr.push(arr[i]); //removes the non zero value and then stores it in the non-zero array
// //     }
// //   }
// //   finalArray = nonZeroArr.concat(zeroArr); //combines both arrays
// //   return finalArray;
// // };
// // moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
// // moveZeros([1, false, 0, 1, 0, 1, 0, 3, false, 1, []]);
// // moveZeros([
// //   "a",
// //   0,
// //   "b",
// //   null,
// //   "c",
// //   "d",
// //   1,
// //   false,
// //   1,
// //   3,
// //   1,
// //   9,
// //   0,
// //   [],
// //   0,
// //   9,
// //   0,
// //   0,
// //   0,
// //   0,
// //   0,
// //   0,
// //   0,
// // ]);
// // moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

// // // The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// // // Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// // // The following are examples of expected output values:

// // //get whole value first
// // function getValues(num) {
// //   let getFirst = parseInt(num / 16);
// //   let result = "";
// //   const getSecond = num < 255 ? num % 16 : 255 % 16; //accounts for values over 16
// //   //inner function to get the hex values of a number
// //   function getHexValues(num) {
// //     if (num <= 0) result = 0;
// //     if (num < 10 && num > 0) result = num;
// //     if (num >= 10) {
// //       if (num === 10) result = "A";
// //       if (num == 11) result = "B";
// //       if (num == 12) result = "C";
// //       if (num == 13) result = "D";
// //       if (num == 14) result = "E";
// //       if (num >= 15) result = "F"; //to account for values over 15
// //     }
// //     return result;
// //   }
// //   //get first hex value
// //   result += getHexValues((num = getFirst));
// //   //get second hex value
// //   result += getHexValues((num = getSecond));
// //   return result;
// // }

// // //Now to make a function where the rgb is put in so it can yield a hexadecimal value
// // function rgb(r, g, b) {
// //   let hexadecimal = getValues(r) + getValues(g) + getValues(b);
// //   return hexadecimal;
// // }

// // // console.log(rgb(0, 0, 0))
// // // console.log(rgb(173,255,47))
// // // console.log(rgb(300,255,255));
// // // console.log(rgb(0, 0, -20));

// // // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// // // most impressive feat yet
// // function persistence(num) {
// //   let count = 0;
// //   //convert the number to an array of numbers
// //   let numArray = Array.from(String(num)).map((numberString) =>
// //     Number(numberString)
// //   );
// //   while (numArray.length > 1) {
// //     //while the number array.lenght is greatere than 1, reduce it and increase count by 1
// //     //while numArray.length is greater than 1, reduce it and increase the count by 1
// //     let product = numArray.reduce((product, current) => product * current);
// //     numArray = Array.from(String(product)).map((numberString) =>
// //       Number(numberString)
// //     );
// //     count++;
// //   }
// //   return count;
// // }
// // // way easier way to approach the problem
// // // function persistence(num) {
// // //   let count = 0
// // //   while(num.toString().length > 1) {
// // //     num = num.toString().split("").reduce((product, current) => product * current)
// // //     count ++
// // //   }
// // // return count
// // // }
// // console.log(persistence(20));

// // // Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
// // //
// // // The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// // function toWeirdCase(string) {
// //   //first step is to convert the string into an array of words then the words into arrays of letters
// //   const arrayedString = string.split(" ").map((word) => word.split(""));
// //   //then change of each letter
// //   let result = arrayedString.map((wordArray, item) => {
// //     return wordArray.map((letter, index) => {
// //       if (index % 2 === 0) return letter.toUpperCase();
// //       else return letter.toLowerCase();
// //     });
// //   });
// //   //revert it back to the original way it was
// //   return result.join(" ").split(",").join("");
// // }

// // console.log(toWeirdCase("this is a test"));

// // // Given: an array containing hashes of names
// // //
// // // Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// // function list(names) {
// //   //turn them into an array of names
// //   let people = names.map((person) => person.name);
// //   let peoplePunctuated = people
// //     .map((person, index, array) => {
// //       if (index !== array.length - 1 && index !== array.length - 2) {
// //         return `${person},`;
// //       } else if (index !== array.length - 1) {
// //         return `${person} &`;
// //       } else return person;
// //     })
// //     .join(" ");
// //   return peoplePunctuated;
// // }

// // console.log(
// //   list([
// //     { name: "Bart" },
// //     { name: "Lisa" },
// //     { name: "Maggie" },
// //     { name: "Lisa" },
// //     { name: "Maggie" },
// //   ])
// // );

// // //Utility Fucntion
// // //This took way longer than it shoould have but let's get it
// // function getSum(arr) {
// //   //this sums up the arr
// //   let sum = arr.reduce((a, b) => a + b);
// //   return sum;
// // }
// // console.log(getSum([1, 2, 3, 4, 5, 6, 7]));

// // function Xbonacci(signature, n) {
// //   //this takes the length of the array
// //   let original = signature.length;
// //   for (let i = 0; i < n; i++) {
// //     signature.push(getSum(signature.slice(-original)));
// //   }
// //   return signature.slice(0, n);
// // }

// // console.log(Xbonacci([1, 2, 3, 4, 5, 6, 7], 10));
// // console.log(Xbonacci([1, 1], 10));
// // console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10));

// // // Build Tower by the following given argument:
// // // number of floors (integer and always greater than 0).

// // // Tower block is represented as *

// // // function dashatize(num) {
// // //   num = num > 0 ? num : -num
// // //   let splitNum = num.toString().split("").map(number => Number(number))
// // //   let result = splitNum.map((item, index, array) => {
// // //     if (index === 0 && item  % 2 == 0)  return `${item}`
// // //     if (item  % 2 === 0) return `${item}`
// // //     if (item  % 2 !== 0) {
// // //           if (array[index + 1] % 2 == 0) {
// // //             return `-${item}-`
// // //           } else return `-${item}`
// // //     }
// // //   }).join("")
// // //   return result
// // // }

// // // //fix it after class and see how people appraoched the problem

// // // console.log(dashatize(NaN));

// // // console.log(dashatize(27489086));

// // // console.log(dashatize(0));
// // // console.log();

// // // console.log(dashatize(974302));
// // // console.log(dashatize(86320));
// // // console.log(dashatize(5311));
// // // console.log(dashatize(-28369));
// // // console.log(dashatize(383));

// // // Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// // // function sumPairs(ints, s) {
// // //   let result = [];
// // //   //first  make a code that loops through the numbers after i to find a sum pair
// // //   for (let i = 0; i < ints.length; i++) {
// // //     //this is the second loop that looks through other values after i
// // //     for (let j = i + 1; j < ints.length; j++) {
// // //       if (ints[i] + ints[j] === s) {
// // //         result.push([ints[i], ints[j], j - i]); //this is to compare the one which comes first
// // //       }
// // //     }
// // //   }
// // //   //what this does it make sure to return a value that
// // //   let sortedResult = result.sort((a, b) => a[2] - b[2])[0];
// // //   return sortedResult === undefined ? undefined : sortedResult.slice(0, 2);
// // // }

// // function sumPairs(ints, s) {
// //   let result = [];
// //   //first  make a code that loops through the numbers after i to find a sum pair
// //   for (let i = 0; i < ints.length; i++) {
// //     //this is the second loop that looks through other values after i
// //     for (let j = i + 1; j < ints.length; j++) {
// //       if (ints[i] + ints[j] === s) {
// //         result.push([ints[i], ints[j], j]); //this is to compare the one which comes first
// //       }
// //     }
// //   }
// //   // //what this does it make sure to return a value that
// //   // let sortedResult = result.reduce((a, b) => if(a );
// //   // return sortedResult === undefined ? undefined : sortedResult.slice(0, 2);
// // }

// // sumPairs([1, 2], 3);
// // sumPairs([1, 4, 8, 7, 3, 15], 8);
// // sumPairs([0, 2, 0], 0);
// // sumPairs([5, 9, 13, -3], 10);
// // sumPairs([20, -13, 40], -7);
// // sumPairs([1, 2, 3, 4, 1, 0], 2);
// // sumPairs([10, 5, 2, 3, 7, 5], 10);

// // // The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// // // Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// // // Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// // // Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// // function tickets(peopleInLine) {
// //   let twentyFive = 0;
// //   let fifty = 0;
// //   for (let i = 0; i < peopleInLine.length; i++) {
// //     if (peopleInLine[i] === 25) twentyFive++;
// //     else if (peopleInLine[i] === 50) {
// //       fifty++;
// //       twentyFive--;
// //       //this is basically for 100
// //     } else {
// //       if (fifty > 0) {
// //         fifty--;
// //         twentyFive--;
// //       } else twentyFive -= 3;
// //     }
// //     if (twentyFive < 0) console.log("NO");
// //   }
// //   console.log("YES");
// // }

// // tickets([25, 25, 50, 50]);
// // // tickets([50, 50, 25, 100]);

// // // function revrot(str, sz) {
// // //   //let us separate them into chunks first
// // //   str = str.split("");
// // //   let chunks = [];
// // //   let result = [];
// // //   if (str.length >= sz) {
// // //     for (let i = 0; i < str.length; i++) {
// // //       chunks.push(str.slice(0, sz));
// // //       str.splice(0, sz);
// // //     }
// // //   } else console.log(str);
// // //   console.log(chunks);
// // // }
// // // // chunks = chunks.map((chunk) => chunk.map((a) => Number(a)));

// // // // chunks.forEach((chunk) => {
// // // //   let sumCube = chunk.reduce(
// // // //     (accumulator, number) => accumulator + number ** 3,
// // // //     0
// // // //   );
// // // //   if (chunk.length === sz) {
// // // //     if (sumCube % 2 === 0)
// // // //       chunk.reverse().forEach((item) => result.push(item));
// // // //     else
// // // //       chunk
// // // //         .slice(1)
// // // //         .concat(chunk.slice(0, 1))
// // // //         .forEach((item) => result.push(item));
// // // //   } else chunk.forEach((item) => result.push(item));
// // // // });

// // // revrot("12375", 6); //"push234561876549"
// // // revrot("664438756", 4);
// // // revrot("123456779", 8);

// // function kebabize(str) {
// //   let arraySplit = str.split("");
// //   let done = arraySplit
// //     .filter((character) => {
// //       return (
// //         (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) ||
// //         (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)
// //       );
// //     })
// //     .map((character, index, array) => {
// //       if (character !== character.toLowerCase()) {
// //         if (index !== 0) return (character = `-${character.toLowerCase()}`);
// //         else return character.toLowerCase();
// //       } else {
// //         return character;
// //       }
// //     })
// //     .join("");
// //   console.log(done);
// // }

// // kebabize("myCamelCasedString");
// // kebabize("myCamelHas3Humps");
// // let test = "myCamelHas3Hump";

// // // The marketing team is spending way too much time typing in hashtags.
// // // Let's help them with our own Hashtag Generator!

// // // Here's the deal:

// // // It must start with a hashtag (#).
// // // All words must have their first letter capitalized.
// // // If the final result is longer than 140 chars it must return false.
// // // If the input or the result is an empty string it must return false.
// // // Examples

// // function generateHashtag(str) {
// //   let capitalize = str.split("").map((character, index, array) => {
// //     if (array[index - 1] === " " || index === 0) {
// //       return character.toUpperCase();
// //     } else return character;
// //   });
// //   let filterSpace = capitalize
// //     .filter((character) => character !== " ")
// //     .join("");
// //   console.log(
// //     filterSpace.length < 140 && filterSpace.length !== 0 //less than 140 to account for the addition of the hashtag
// //       ? `#${filterSpace}`
// //       : false
// //   );
// // }

// // generateHashtag(" a bjddjd  j ");
// // generateHashtag("    Hello     World   ");

// // // Welcome.

// // // In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// // // If anything in the text isn't a letter, ignore it and don't return it.

// // // character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) ||
// // //         (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)
// // //       );

// // function alphabetPosition(text) {
// //   let lowerCased = text.split("").map((character) => character.toLowerCase());
// //   let result = lowerCased
// //     .filter((character) => {
// //       let ascii = character.charCodeAt();
// //       if (ascii >= 97 && ascii <= 122) {
// //         return character;
// //       }
// //     })
// //     .map((character) => character.charCodeAt() - 96)
// //     .join(" ");
// //   return result;
// // }

// // // console.log(
// // //   alphabetPosition(
// // //     "That boy gotta watch out if he don't wanna get caught by the damn feds soon."
// // //   )
// // // );

// // // Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// // // Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// // // The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// // // Examples:

// // function listSquared(m, n) {
// //   let result = [];
// //   let divisors = [];

// //   //this gets all the numbers from m to n
// //   for (let i = m; i <= n; i++) {
// //     let sum = divisors.reduce((sum, current) => sum + current ** 2, 0);
// //     if (Number.isInteger(Math.sqrt(sum))) result.push([i - 1, sum]);
// //     //return base case again so that things can reset
// //     divisors = [];
// //     sum = 0;
// //     //iterates and finds all the divisors of i and pushes it to the divisor to calculate.
// //     for (let j = 1; j <= i; j++) {
// //       if (i % j === 0) {
// //         divisors.push(j);
// //       }
// //     }
// //   }
// //   return result.slice(1);
// // }

// // listSquared(1, 4);
// // listSquared(42, 250);
// // listSquared(250, 500);

// // function numPrimorial(b) {
// //   let primeNumberList = [];
// //   let num = 2;
// //   while (primeNumberList.length != b) {
// //     if (isPrime(num)) {
// //       primeNumberList.push(num);
// //     }
// //     num++;
// //   }
// //   return primeNumberList.reduce((a, b) => a * b, 1);
// // }

// // function isPrime(n) {
// //   let divisorList = [];
// //   for (let i = 1; i <= n; i++) {
// //     if (n % i === 0) divisorList.push(i);
// //   }
// //   if (divisorList.length === 2) return true;
// //   else return false;
// // }

// // console.log(numPrimorial(7)); //

// // // function zeros(n) {
// // //   let factorial = 1;
// // //   let count = 0;
// // //   for (let i = n; i >= 1; i--) {
// // //     factorial *= i;
// // //   }
// // //   factorial = factorial.toFixed(20); //.toString().split("");
// // //   // console.log(factorial);
// // //   // while (factorial[factorial.length - 1] === "0") {
// // //   //   count++;
// // //   //   factorial.pop();
// // //   // }
// // //   console.log(factorial);
// // // }

// // // zeros(30);

// // // function gap(g, m, n) {
// // //   function isPrime(n) {
// // //     let divisorList = [];
// // //     for (let i = 1; i <= n; i++) {
// // //       if (n % i === 0) divisorList.push(i);
// // //     }
// // //     if (divisorList.length === 2) return true;
// // //     else return false;
// // //   }

// // //   let result = [];
// // //   let lastPrime = 0;
// // //   for (let i = m; i <= n; i++) {
// // //     if (isPrime(i)) {
// // //       if (i - lastPrime === g) result.push(lastPrime);
// // //     } else lastPrime = i;
// // //   }

// // //   console.log(result);

// // // console.log(result.length > 0 ? result : null);
// // //}

// // // gap(2, 100, 110);
// // // gap(10, 300, 400);
// // // gap(6, 100, 110);

// function getConsectiveItems(items, key) {
//   let count = 0;
//   let max = 0;
//   items = items.toString().split("");
//   key = key.toString();
//   for (let i = 0; i < items.length; i++) {
//     //this checks to see it the consecutive letter is the same
//     if (items[i] === key && items[i + 1] === items[i]) {
//       count += 1;
//     } else if (items[i] == key && items[i] !== items[i + 1]) {
//       if (count > max) max = count;
//       else count = 0;
//     }
//   }
//   console.log(max);
// }

// // function getConsectiveItems(items, key) {
// //   items = items.toString();
// //   key = key.toString();
// //   let max = 0,
// //     current = 0;
// //   for (let c of items) {
// //     current = c == key ? current + 1 : 0;
// //     if (current > max) max = current;
// //   }
// //   console.log(max);
// // }

// // getConsectiveItems("ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii", "i");
// // getConsectiveItems(9000, 0);
// // getConsectiveItems("iiiiiiiiii", "i");

//firstly, let us compare if there are multiple letters of that one in the following and then see how we go from there
//take a break and rest because I don't even know what's happening to you right now. It seems like you have been so stressed so far

function alphanumeric(string) {
  if (string.length === 0) {
    string = "_";
  }
  let arrayString = string.toLowerCase().split("");
  let filteredList = arrayString.filter(
    (char) =>
      (char.charCodeAt() < 97 || char.charCodeAt() > 122) &&
      (char.charCodeAt() < 48 || char.charCodeAt() > 57)
  );
  console.log(filteredList);
  console.log(filteredList.length > 0 ? false : true);
}

alphanumeric("Mazinkaiser");
alphanumeric("909Mazinkaiser.?<N");
alphanumeric("   ");
alphanumeric("PassW0rd");
alphanumeric("hello world_");
alphanumeric("VI7k0eV4XN9jk_h2fCCX1LvYvfV");
alphanumeric("");

// function perimeter(n) {
//   n = n + 1;
//   let startSeq = [1, 1];
//   for (let i = 0; i < n - 2; i++) {
//     startSeq.push(startSeq[i] + startSeq[i + 1]);
//   }
//   const fibonacci = startSeq.slice(0, n);
//   let perimeter = fibonacci.reduce((a, b) => a + 4 * b, 0);
//   console.log(fibonacci);
//   console.log(perimeter);
// }

// perimeter(5);
// perimeter(7);

function beeramid(bonus, price) {
  if (price > bonus) console.log(0);
  else {
    let numBeers = Math.floor(bonus / price);
    //Now that I know the number of beers, let
    let i = 1;
    squareList = [];
    let sum = 0;
    while (sum <= numBeers) {
      squareList.push(i ** 2);
      sum = squareList.reduce((a, b) => a + b, 0);
      i++;
    }
    console.log(squareList.length - 1);
  }
}

//Could not get this to work
/*
function add(x, y) {
  if (x > 0) {
    while (x > 0) {
      x--;
      y++;
    }
  }
  if (x < 0) {
    while (x < 0) {
      x++;
      y--;
    }
  }
  return y;
}
*/

// add(5, 6);

//New Question
var moveZeros = function (arr) {
  let nonZero = arr.filter((item) => item !== 0);
  let zero = arr.filter((item) => item === 0);
  return nonZero.concat(zero);
};

function mixedFraction(s) {
  s = s.split("");
  let dividend = "";
  let divisor;

  //first get the dividend
  let i = 0;
  while (s[i] !== "/") {
    dividend += s[i];
    i++;
  }

  //then get the divisor
  s.forEach((char, index, array) => {
    if (char === "/") divisor = Number(array.slice(index + 1).join(""));
  });

  //Return for zero error
  if (divisor === 0) return "yam";
  if (dividend === "0") return "0";

  //Now let's do the evaluation.
  const quotient = dividend / divisor;
  let wholeNumber = quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);

  let remainder = Math.abs(dividend % divisor);
  divisor = Math.abs(divisor);

  let gcd = getGcd(remainder, divisor);
  if (wholeNumber === 0 && quotient < 0) {
    return `-${remainder / gcd}/${divisor / gcd}`;
  } else if (wholeNumber === 0 && quotient > 0) {
    return `${remainder / gcd}/${divisor / gcd}`;
  } else if (wholeNumber !== 0 && remainder === 0) {
    return `${wholeNumber}`;
  } else return `${wholeNumber} ${remainder / gcd}/${divisor / gcd}`;
}

//Utility function
function getGcd(a, b) {
  let r;
  if (a == 0 || b == 0) return 1;
  else {
    while (a % b !== 0) {
      r = a % b;
      a = b;
      b = r;
    }
    return b;
  }
}

//new Question
function isPP(n) {
  let count = 0;

  let result;
  for (let i = 2; i <= n; i++) {
    for (let u = 2; u <= n - 1; u++) {
      if (i ** u === n) {
        result = [i, u];
        count++;
        i = n;
      }
    }
  }
  return count > 0 ? result : null;
}

/*
More efficient solution
function isPP(n) {
  for (let m = 2; m <= Math.floor(Math.sqrt(n)); m++) {
    for (let k = 2; m ** k <= n; k++) {
      if (m ** k === n) return [m, k];
    }
  }
  return null;
}
*/

//Tests
// console.log(isPP(4));
// console.log(isPP(8));
// console.log(isPP(9));
// console.log(isPP(256));
// console.log(isPP(81));
// console.log(isPP(2));
// console.log(isPP(484));
// console.log(isPP(2510));

//New Question
function powerSumDigTerm(n) {
  let powerSum = [];
  for (let i = 2; i < 100; i++) {
    for (let u = 2; u <= 100; u++) {
      if (sumString(i ** u) === i) {
        powerSum.push(i ** u);
      }
    }
  }
  powerSum.sort((a, b) => a - b);
  return powerSum[n];
}

powerSumDigTerm(5);

//Utility function;
function sumString(i) {
  sum = i
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
  return sum;
}

// console.log(sumString(81));
// console.log(Math.sqrt(81));

//New Question
function solution(number) {
  let multiplesOf3And5 = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesOf3And5.push(i);
    }
  }
  return multiplesOf3And5.reduce((a, b) => a + b, 0);
}

// solution(10);

//New Question
function findMissing(arr) {
  let prog = (arr[arr.length - 1] - arr[0]) / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + prog !== arr[i + 1]) return arr[i] + prog;
  }
}

// console.log(findMissing([1, 3, 5, 9, 11]));

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  const secsInYear = 31536000;
  const secsInDay = 86400;
  const secsInHour = 3600;
  const secsInMin = 60;

  let years = Math.floor(seconds / secsInYear);
  let days = Math.floor((seconds % secsInYear) / secsInDay);
  let hours = Math.floor(((seconds % secsInYear) % secsInDay) / secsInHour);
  let minutes = Math.floor(
    (((seconds % secsInYear) % secsInDay) % secsInHour) / secsInMin
  );
  let secs = Math.floor(
    (((seconds % secsInYear) % secsInDay) % secsInHour) % secsInMin
  );

  let yearsStr;
  let daysStr;
  let hoursStr;
  let minutesStr;
  let secsStr;

  if (years >= 0) yearsStr = `${years} year`;
  if (days >= 0) daysStr = `${days} day`;
  if (hours >= 0) hoursStr = `${hours} hour`;
  if (minutes >= 0) minutesStr = `${minutes} minute`;
  if (secs >= 0) secsStr = `${secs} second`;

  //function to append the s if plural
  function appendS(val, str) {
    if (val > 1) return (str += "s");
    else return str;
  }

  yearStr = appendS(years, yearsStr);
  daysStr = appendS(days, daysStr);
  hoursStr = appendS(hours, hoursStr);
  minutesStr = appendS(minutes, minutesStr);
  secsStr = appendS(secs, secsStr);

  function list(time) {
    let timeFormat = time
      .map((time, index, array) => {
        if (index !== array.length - 1 && index !== array.length - 2) {
          return `${time},`;
        } else if (index !== array.length - 1) {
          return `${time} and`;
        } else return time;
      })
      .join(" ");
    return timeFormat;
  }

  //now let's combine them into an array.
  let result = [yearStr, daysStr, hoursStr, minutesStr, secsStr];
  result = result.filter((time) => time.slice(0, 1) !== "0");
  //now lets work on how the results are displayed

  return list(result);
}

console.log(formatDuration(90));

//New Question
const numberToPrice = function (number) {
  if (typeof number !== "number") return `NaN`;

  let numberRounded = number;
  let numberString = numberRounded.toString();
  let decimal = "";
  let sign = "";

  //This handles 3 digit numbers.
  // if (number > -1000 && number < 1000) console.log(numberRounded.toString());

  if (numberString.includes(".")) {
    numberString = numberString + "00";
    let index = numberString.indexOf(".");
    decimal = numberString.slice(index, index + 3);
    numberString = numberString.slice(0, index);
  } else decimal = ".00";

  if (numberString.slice(0, 1) == "-") {
    sign = "-";
    numberString = numberString.slice(1);
  }

  numberString = addCommas(numberString);

  console.log(sign + numberString + decimal);
};

/*
Test Cases
numberToPrice(-908.5678);
numberToPrice(-5.0);
numberToPrice(-183857984794.5678);
numberToPrice(18247394883382023038938403940349944324);
console.log(numberToPrice(""));
*/
function addCommas(str) {
  str = str.split("").reverse();
  modified = [];

  modified = str.map((item, index, array) => {
    if (index === 0) return item;
    if (index % 3 === 0) {
      return item + ",";
    } else return item;
  });

  return modified.reverse().join("");
}

function perimeter(n) {
  n = n + 1;
  let startSeq = [1, 1];
  for (let i = 0; i < n - 2; i++) {
    startSeq.push(startSeq[i] + startSeq[i + 1]);
  }
  const fibonacci = startSeq.slice(0, n);
  let perimeter = fibonacci.reduce((a, b) => a + 4 * b, 0);
  console.log(fibonacci);
  console.log(perimeter);
}

//Another question
function sumDivRev(n) {
  function reverse(num) {
    return Number(num.toString().split("").reverse().join(""));
  }

  let i = 0;
  count = 0;
  let result;
  while (count != n) {
    let sum = reverse(i) + i;
    let diff = Math.abs(i - reverse(i));
    if (
      sum % diff === 0 &&
      reverse(i).toString().length === i.toString().length
    ) {
      count++;
      result = i;
    }
    i++;
  }
  return result;
}

sumDivRev(65);

//Utility Function
function reverse(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverse(90208383030));

//Another question

function zero(operator) {
  return operator === undefined ? 0 : Math.floor(eval(0 + operator));
}
function one(operator) {
  return operator === undefined ? 1 : Math.floor(eval(1 + operator));
}
function two(operator) {
  return operator === undefined ? 2 : Math.floor(eval(2 + operator));
}
function three(operator) {
  return operator === undefined ? 3 : Math.floor(eval(3 + operator));
}
function four(operator) {
  return operator === undefined ? 4 : Math.floor(eval(4 + operator));
}
function five(operator) {
  return operator === undefined ? 5 : Math.floor(eval(5 + operator));
}
function six(operator) {
  return operator === undefined ? 6 : Math.floor(eval(6 + operator));
}
function seven(operator) {
  return operator === undefined ? 7 : Math.floor(eval(7 + operator));
}
function eight(operator) {
  return operator === undefined ? 8 : Math.floor(eval(8 + operator));
}
function nine(operator) {
  return operator === undefined ? 9 : Math.floor(eval(9 + operator));
}

function plus(value) {
  return "+" + value;
}
function minus(value) {
  return "-" + value;
}
function times(value) {
  return "*" + value;
}
function dividedBy(value) {
  return "/" + value;
}

/*Test Cases
console.log(one(dividedBy(one())));
console.log(seven(times(five())));
console.log(six(dividedBy(five())));
*/

/* 
Cleaner iteration of the function
function zero(operator) {
  return operator ? operator(0) : 0; //this just check to see if the operator exists
}

function one(operator) {
  return operator ? operator(1) : 1;
}

function two(operator) {
  return operator ? operator(2) : 2;
}

function three(operator) {
  return operator ? operator(3) : 3;
}

function four(operator) {
  return operator ? operator(4) : 4;
}

function five(operator) {
  return operator ? operator(5) : 5;
}

function six(operator) {
  return operator ? operator(6) : 6;
}

function seven(operator) {
  return operator ? operator(7) : 7;
}
function eight(operator) {
  return operator ? operator(8) : 8;
}

function nine(operator) {
  return operator ? operator(9) : 9;
}

function plus(rightVal) {
  return function (leftVal) {
    return leftVal + rightVal;
  };
}

function minus(rightVal) {
  return function (leftVal) {
    return leftVal - rightVal;
  };
}

function times(rightVal) {
  return function (leftVal) {
    return leftVal * rightVal;
  };
}

function dividedBy(rightVal) {
  return function (leftVal) {
    return leftVal / rightVal;
  };
}
*/
