// 1. Initialize the Array
let numbers = [5, 3, 8, 1, 2];
console.log("Initial array:", numbers);

// 2. Functions to Implement

// Add a Number
function addNumber(array, number) {
    array.push(number);
    return array;
}

// Remove a Number
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Sort the Numbers
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Calculate Sum
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Calculate Average
function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = calculateSum(array);
    return sum / array.length;
}

// 3. Main Program

// Add a number
numbers = addNumber(numbers, 4);
console.log("After adding 4:", numbers);

// Remove a number
numbers = removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

// Sort the numbers
let sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

// Calculate the sum of the numbers
let sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

// Calculate the average of the numbers
let average = calculateAverage(numbers);
console.log("Average of numbers:", average);
