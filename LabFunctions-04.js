/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Lab 4: more functions and closures
*/

// Using For loop to count the number of letters in a string
function countLetters (str) {
    let numOfLetters = 0;
    
    for (let i = 0; i < str.length; i++) {
        let letterInString = str.charAt(i)
        let count = isAlpha (letterInString);

        // counts the number of letters based on them being true with the switch below
        if (count == true) {
            numOfLetters += 1;
        }
    }

    return numOfLetters;
}

// Using While loop to count the number of letters in a string
function countLettersWhile (str) {
    let numOfLetters = 0;
    let i = 0;
    
    while (i < str.length) {
        let letterInString = str.charAt(i)
        let count = isAlpha (letterInString);

        i ++;

        if (count == true) {
            numOfLetters += 1;
        }
    }

    return numOfLetters;
}


function countLettersDoWhile (str) {
    let numOfLetters = 0;
    let i = 0;
    
    do {
        let letterInString = str.charAt(i)
        let count = isAlpha (letterInString);

        i ++;

        if (count == true) {
            numOfLetters += 1;
        }
    } while (i < str.length);

    return numOfLetters;
}

// determines if a character is an alphabet
function isAlpha (char) {
    if (('a' <= char && char <= 'z') || ('A' <= char && char <= 'z')){
        return true;
    } else {
        return false;
    }
} 

// practice inputs:
countLetters("LB/FB!!");

countLettersWhile("Hundo p -- let's split an Uber!");

// Part 3: counts how often a character repeats ina string
function countOccurrences (str, position) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == position) {
            sum += 1;
        }
    }
    return sum;
}

// practice inputs: 
countOccurrences("TBH, JavaScript is not boring!", "e");

countOccurrences("TBH, JavaScript is not boring!", "a");

countOccurrences("TBH, JavaScript is not boring!", "T");

countOccurrences("The albatross just ate your lunch!!", "!");

// Part 4: closure practice
function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
      likeCount += step;
      return likeCount;
    }
  }
  
const like = handleLikePost(1);
const doubleLike = handleLikePost(2);

//practice input: 
like();
like();

doubleLike();
doubleLike();