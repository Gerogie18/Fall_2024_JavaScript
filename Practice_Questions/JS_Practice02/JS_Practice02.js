//1. log area of a circle
function calcCircleArea(radius) {
    return Math.PI * Math.pow(2, radius)
}
let x = math.random() * 0.5
console.log(`radius = ${x}`)
console.log(calcCircleArea(x));

//2. imulate rolling a dice using random(). The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) (50 sided, return number between 1 and 50).[You might need Math class or specifically Math.random() to produce a random number in JavaScript]
function rollDice(numbeOfSides) {
    numberOfSides ? numberOfSides = numberoOfSides : numbeOfSides = 6
    return Math.floor(Math.random() * numberOfSides) + 1
}
let dice = math.random() * 10
console.log(`rolling a ${dice} sided dice...`)
console.log(rollDice(dice));

//3. convert celcius to farenheight
function convertCelciusToFarenheight(celcius) {
    farenheight =  (celcius *9/5) + 32
    return farenheight + " f"
}
let temp = 0
console.log(`celcius temperature = ${temp} c`)
console.log(convertCelciusToFarenheight(temp));

//4. convert temp to either celcius or farenheight
function convertTemp(temp, measurement) {
 if (measurement === "c") {
    farenheight =  (temp *9/5) + 32
    return farenheight + " f"
 } else if (measurement === "f") {
    celcius = (temp - 32) * 5/9
    return celcius + " c"
 } else {
     return "invalid measurement"
 }}
 console.log(convertTemp(temp, c))
 console.log(convertTemp(temp, f))

 //5. Function taking any number of arguments (Numbers), returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.

 function isUnder50(...numbers){
    return numbers.every(num => num < 50)
 }
console.log(isUnder50(1, 2, 3, 5, 4, 65))

//6. Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.
function sumOf(...numbers) {
    let sum = 0
    for (x=0; x<numbers.length; x++) {
        sum += numbers[x]
    }
    return sum
}
console.log(sumOf(1, 2, 3))

//7. Function to check if a number is a multiple of 3 (returns true or false)
function multipleOf3(number) {
    return number % 3 === 0 ? true : false;
}
console.log(multipleOf3(3))

//8.	Function to subtract a discount % from a total. If no % is given, return the original value.
function subtractDiscount(total, discount = 0) {
    return total - (total * discount / 100);
}
console.log(subtractDiscount(100, 10))

//9. Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest minute.
function secondsToTime(seconds) {
    let days = Math.floor(seconds / 86400)
    let hours = Math.floor((seconds % 86400) / 3600)
    let minutes = Math.round((seconds % 3600) / 60)
    return `${days} Days, ${hours} Hours, ${minutes} Minutes`
}
console.log(secondsToTime(3661))

//10. Modify your solution above to only include units that make sense: "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc
function secondsToTimeShort(seconds) {
    let days = Math.floor(seconds / 86400)
    let hours = Math.floor((seconds % 86400) / 3600)
    let minutes = Math.round((seconds % 3600) / 60)
    days ?  days = `${days} Days,` : days = " "
    hours ? hours = `${hours} Hours,` : hours = " "
    minutes? minutes = `${minutes} Minutes` : minutes = " "
    return `${days}${hours}${minutes}`
}

console.log(secondsToTimeShort(3661))