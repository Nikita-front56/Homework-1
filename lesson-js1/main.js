// МАССИВЫ

// const numbers = [1,'2',true,[1,2,3],5]

// console.log(numbers)

// +++++++++++++++++++++++++++++++++++++++++++

// const numbers = [1, 2, 3, 4, 5]

// numbers[4] = 6

// console.log(numbers)

// +++++++++++++++++++++++++++++++++++++++++++

// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log (numbers[i] + 1)
// }

// ФУНКЦИИ

// function sumNumbers() {
//     return 5 + 5
// }

// const result = sumNumbers()
// console.log(result)

// +++++++++++++++++++++++++++++++++++++++++++

// function helloName(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = helloName(3, 10)
// console.log(result)
// console.log(helloName(-2, 2))

// +++++++++++++++++++++++++++++++++++++++++++

// const users = ['Jonh', 'Ann', 'Alex', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }

// console.log(checkForCopyItem(users, 'Alex'))
// const users = ['Jonh', 'Ann', 'Alex', 'Max']


// +++++++++++++++++++++++++++++++++++++++++++

// ДЗ
// 1

function helloName(name) {
    return ('Hello, ' + name + '!')
}

console.log (helloName("Max"))

// +++++++++++++++++++++++++++++++++++++++++++
// 2

const numbers = [ 1, 3, 5, 7, 12, 17, 11, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

// +++++++++++++++++++++++++++++++++++++++++++
// 3

function sumNumbers(num1, num2, minus) {
    switch (minus.toLowerCase()) {
        case 'minus':
        case '-':
            return num1 - num2;
    }
}
console.log(sumNumbers(2, 3, 'minus'));

// +++++++++++++++++++++++++++++++++++++++++++
function sumNumbersPlus(num1, num2, plus) {
    switch (plus.toLowerCase()) {
        case 'plus':
        case '+':
            return num1 + num2;
    }
}
console.log(sumNumbersPlus(10, 5, 'plus'));

// +++++++++++++++++++++++++++++++++++++++++++
function sumNumbersDividedby(num1, num2, dividedby) {
    switch (dividedby.toLowerCase()) {
        case 'dividedby':
        case '/':
            return num1 / num2;
    }
}
console.log(sumNumbersDividedby(10, 2, 'dividedby'));

// +++++++++++++++++++++++++++++++++++++++++++
function sumNumbersMultiply(num1, num2, multiply) {
    switch (multiply.toLowerCase()) {
        case 'multiply':
        case '*':
            return num1 * num2;
    }
}
console.log(sumNumbersMultiply(10, 2, 'multiply'));

// +++++++++++++++++++++++++++++++++++++++++++

function sumNumbersFool(num1, num2, operator) {
    switch (operator.toLowerCase()) {
        case 'minus':
        case '-':
            return num1 - num2;
        case 'plus':
        case '+':
            return num1 + num2;
        case 'dividedby':
        case '/':
            return num1 / num2;
        case 'multiply':
        case '*':
            return num1 * num2;
    }
}
console.log(sumNumbersFool(2, 3, 'minus'));
console.log(sumNumbersFool(10, 5, 'plus'));
console.log(sumNumbersFool(10, 2, 'dividedby'));
console.log(sumNumbersFool(10, 3, 'multiply'));


















