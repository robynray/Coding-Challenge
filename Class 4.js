/*
-------------------Class 4 Coding Challenge----------------------------
Source: https://www.coderbyte.com/editor/Longest%20Word:JavaScript
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/
function LongestWord(sen) {
    let words = sen.replace(/[^\w\s]/gi, '').split(' ');
    let longestWord = '';
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        if(words[i].length > longestLength) {
            longestWord = words[i];
            longestLength = words[i].length;
        }
    }
        return longestWord;
}


