/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/

const sevenBoom = (arr) => arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7 in the array";




// Tower of Hanoi
/*
There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
*/

var towerHanoi = function (discs) {
    let moves = 0;
    (function play(discs) {
        if (discs > 0) {
            play(discs - 1);
            moves++;
            play(discs - 1);
        }
    }(discs));

    return moves;
}



// Is It a Probability Matrix?
/*
In probability theory, a probability matrix is a matrix such that:

The matrix is a square matrix (same number of rows as columns).
All entries are probabilities, i.e. numbers between 0 and 1.
All rows add up to 1.
The following is an example of a probability matrix:

[
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]
Note that though all rows add up to 1, there is no restriction on the columns, which may or may not add up to 1.

Write a function that determines if a matrix is a probability matrix or not.

Notes
Fun fact: for most probability matrices M (for example, if M has no zero entries), the matrix powers M^n converge (as n increases) to a matrix where all rows are identical.
*/


function isProbMatrix(arr) {
    const isProb = arr.flat(Infinity).filter((item) => item >= 0 && item <= 1);
    const numItems = arr.flat(Infinity).length;

    if (numItems !== isProb.length) return false;

    if (!arr.every((row) => row.length === arr.length)) return false;

    const sumRows = arr.map(row => row.reduce((acc, value) => acc + value), 0)

    if (!sumRows.every(rowTotal => rowTotal === 1)) return false;

    return true;
}


/*
Catalan Number

Create a function that returns the nth catalan number.In combinatorial mathematics, the Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects. They are named after the Belgian mathematician Eugène Charles Catalan (1814–1894). For more info, check out the resource tab.

getCatalanNumber(0) ➞ 1

getCatalanNumber(6) ➞ 132

getCatalanNumber(8) ➞ 1430
*/

f = n => n > 1 ? n * f(n - 1) : n
function getCatalanNumber(n) {
    return n ? 1 / (n + 1) * (f(2 * n) / f(n) ** 2) : 1
}


/*
Number of Boomerangs

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:[3, 7, 3], [1, -1, 1], [5, 6, 5]

Create a function that returns the total number of boomerangs in an array.
To illustrate:[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

Be aware that boomerangs can overlap, like so:[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

Notes
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
*/