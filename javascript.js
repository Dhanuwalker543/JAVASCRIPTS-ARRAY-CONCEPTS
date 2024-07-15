// program1

for(let i=1;i<=100;i++)
{
    if(i%3===0 && i%5===0){
        console.log(i);
        console.log("FizzBuzz");
    }
    else if(i%3===0){
        console.log(i);
        console.log("Fizz");
    }
    else if(i%5===0){
        console.log(i);
        console.log("Buzz");
    }
}

// program 2

// let a=prompt();
// let b=a.split("").reverse().join("");;
// if(a===b)
// {
//     console.log("palindrome");
// }
// else
// {
//     console.log("not a palindrome")
// }

// program 3

// let arr=[];
// let size=prompt();
// let temp=0;
// for(let i=0;i<size-1;i++)
// {
//     arr[i]=prompt();
//     if(arr[i]>temp)
//     {
//         temp=arr[i];
//     }
// }
// console.log(arr);
// console.log(temp,"is a greatest number");

// program 4
// function countCharacterOccurrences(str) {
//     let charCount = {};
//     for (let char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }
// let exampleString = "hello world";
// let characterCounts = countCharacterOccurrences(exampleString);
// console.log(characterCounts);

// program 5

// function findLongestWord(str) {
//     let words = str.split(' ');

//     let longestWord = '';
//     let maxLength = 0;
//     for (let word of words) {
//         if (word.length > maxLength) {
//             longestWord = word;
//             maxLength = word.length;
//         }
//     }
//     return longestWord;
// }
// let exString = "hello world";
// let longestWord = findLongestWord(exString);
// console.log("The longest word is:", longestWord);


// program 6

// let num=prompt();
// let fac=1;
// for(let i=1;i<=num;i++)
// {
//     fac=fac*i;
// }
// console.log("the factorial is",fac);

// program 7

// let cel=Number(prompt());
// let faren=((cel*2)+30);
// console.log(faren,"is the farenheit temperature");

// program 8

function findMissingNumber(arr1) {
    let n = arr1.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr1.reduce((acc, num) => acc + num, 0);
    
    return expectedSum - actualSum;
}

let arr1 = [3, 0, 1]; 
let missingNumber = findMissingNumber(arr1);
console.log("The missing number is:", missingNumber); 
