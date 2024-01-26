/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(number) {
    return number > 0 ? -number : number;
}
/*
rock paper scissors
*/
const rps = (p1, p2) => {
    const choices = ["rock", "paper", "scissors"];
    if (p1 === p2) {
        return "Draw!";
    }

    if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissors" && p2 === "paper")
    ) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

/*
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?


*/
class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }
    guess(userGuess) {
        if (this.lives <= 0) {
            throw new Error("Error: Already dead. Game over!");
        }
        let correctGuess = false;
        for (let i = 0; i < this.lives; i++) {
            if (userGuess === this.number) {
                correctGuess = true;
                break;
            } else {
                this.lives--;
            }
        }
        return correctGuess;
    }
} /*preguntar this no pude hacerlo
/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/
function divisibleBy(numbers, divisor) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}
/*
Even or odd
*/

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
function getDrinkByProfession(param) {
    const lowerInput = param.toLowerCase();

    switch (lowerInput) {
        case "jabroni":
            return "Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer";
    }
} /*preguntar break
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/


function sum(numbers) {
    "use strict";

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number') {
            result += numbers[i];
        }
    }

    return result;
}

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

function hero(bullets, dragons) {
    for (let i = 0; i < dragons; i++) {
        if (bullets >= 2) {
            bullets -= 2;
        } else {
            return false;
        }
    }
    return true;
}

/*
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
*/

function enough(cap, on, wait) {
    if (cap >= on + wait) {
        return 0;
    } else {
        let passengersLeft = (on + wait) - cap;
        return passengersLeft;
    }
}

/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let yearsAgo = dadYearsOld - (sonYearsOld * 2);

    if (yearsAgo >= 0) {
        return yearsAgo;
    } else {
        return -yearsAgo;
    }
}
