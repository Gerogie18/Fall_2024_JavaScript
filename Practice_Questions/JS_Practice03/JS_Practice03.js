//1. write a function that reverses a number
let s = 12345

function reverseString (string) {
    return string.split("").reverse().join("")
}

function reverseNumber (number) {
    return parseInt(reverseString(number.toString()))
}
console.log(`this number reversed: ${s}`)
console.log(reverseNumber(s))


//2. write a function that returns a string in alphebetical order
s = "Hello, World"

function sort_Alphebetical (string) {
    return string.split("").sort().join("")
}

console.log(`This phrase: "${s}" in alphebetial order`)
console.log(sort_Alphebetical(s))

//3. write a function to get the extension of a filename
let filename = "JS_Practice03.js"
function getExtension (filename) {
    return filename.split(".").pop()
}
console.log(`Extension of the file: ${filename}`)
console.log(getExtension(filename))

//4. write a function that returns the current date (mm-dd-yyyy)
function getCurrentDate () {
    let date = new Date()
    let mm = date.getMonth() + 1
    let dd = date.getDate()
    let yyyy = date.getFullYear()

    mm = (mm<10) ? '0' + mm : mm
    dd = (dd<10) ? '0' + dd : dd

    return mm + '-' + dd + '-' + yyyy
}
console.log("Current date:")
console.log(getCurrentDate())

//5. Write a string that returns the string with its' first letter as a capital
s = "hello"
console.log(`Capitalise ${s}`)
function stringCapitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(stringCapitalizeFirstLetter)

//6. write a function that returns "contain period" or "no period" if it contains a period

function containsPeriod (string) {
    return string.includes(".") ? "contain period" : "no period"
}
console.log(`Does the string contain a period: ${s}`)
console.log(containsPeriod(s))

//7. Write a function in JavaScript “putSuffix(num)” that takes a number “num” as
//parameter and puts a suffix with it. For example, if num is 22 then the function
//returns 22nd, if num is 23 then function returns 23rd and so on. If user does not
//provide a parameter, then it should return without anything.

function putSuffix (num) { 
    let exceptions = [11, 12, 13]
    if (!num) return num;
    if (isNaN(num)) return;
    if (exceptions.includes(num % 100)) return num + 'th'; // special cases for 11, 12, 13
    let suffix = '';
    switch (num % 10) {
        case 1: suffix = 'st'; break;
        case 2: suffix = 'nd'; break;
        case 3: suffix = 'rd'; break;
        default: suffix = 'th';
    }
    return num + suffix;
}
console.log(`suffix of ${s} is ${putSuffix(s)}`);
s = 1
console.log(`suffix of ${s} is ${putSuffix(s)}`);
s = 2
console.log(`suffix of ${s} is ${putSuffix(s)}`);
s = 3
console.log(`suffix of ${s} is ${putSuffix(s)}`);
s = 4
console.log(`suffix of ${s} is ${putSuffix(s)}`);
s = 111
console.log(`suffix of ${s} is ${putSuffix(s)}`);
