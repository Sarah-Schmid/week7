/*
---------------------

This is a collection of coding challenges I completed from https://www.codewars.com/

You can view my account and all of these challenges at https://www.codewars.com/users/sarahschmid

---------------------
*/

/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var str = "";

var countSheep = function (num) {
  if (num >= 1) {
    for (let i = 1; i <= num; i++) {
      str += `${i} sheep...`;
    }
  }
  return str;
};

console.log(countSheep(2));

/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

function makeNegative(num) {
  if (num > 0) {
    return 0 - num;
  } else {
    return num;
  }
}

/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/*You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/

function index(array, n) {
  if (n <= array.length - 1) {
    return Math.pow(array[n], n);
  } else {
    return -1;
  }
}

/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
  let num = 0;
  for (let i = 0; i < numbers.length; i++) {
    num += Math.pow(numbers[i], 2);
  }
  return num;
}

console.log(squareSum([1, 2, 3]));

/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += s;
  }
  return string;
}

console.log(repeatStr(2, "Hello"));

/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

*/

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("hello"));

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

function solution(number) {
  let resultArray = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      resultArray.push(i);
    } else if (i % 5 === 0) {
      resultArray.push(i);
    }
  }
  return resultArray.reduce((a, b) => a + b, 0);
}

console.log(solution(10));

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string) {
  const splitWords = string.split(" ");
  let reversedArry = [];
  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length >= 5) {
      let reversedWord = "";
      for (let n = splitWords[i].length - 1; n > -1; n--) {
        reversedWord += splitWords[i][n];
      }
      reversedArry.push(reversedWord);
    } else {
      reversedArry.push(splitWords[i]);
    }
  }
  let sentence = reversedArry.join(" ");
  return sentence;
}

console.log(spinWords("hello there my friend bye"));
console.log(spinWords("Welcome"));

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

example: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  const zeros = arr.filter((value) => value === 0);
  console.log(zeros);
  console.log(arr);
  return arr.concat(zeros);
}

console.log(moveZeros([9, 0, 8, 7]));
