/*
-------------------Class 3 Coding Challenge----------------------------
Source: https://www.coderbyte.com/editor/First%20Reverse:JavaScript
First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the 
string in reversed order. For example: if the input string is "Hello World and Coders" then your program 
should return the string sredoC dna dlroW olleH.

Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I


*/

function FirstReverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }  
  // keep this function call here 
  console.log(FirstReverse(readline()));