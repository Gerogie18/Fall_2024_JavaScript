// Question 1
let school = 'keyincollege'; 
let ltd = '.ca';
let domainName = school + ltd;
console.log(domainName);

//Question 2
let isKeyin;
if (domainName === 'keyincollege.ca') {
    isKeyin = true;
} else {iskeyin = false;
}
console.log(isKeyin);

//Question 3
isNotKeyin = !isKeyin;
console.log(isNotKeyin);

//Question 4
let byte1 = rand = Math.floor(Math.random() * 256);
let byte2 = rand = Math.floor(Math.random() * 256);
let byte3 = rand = Math.floor(Math.random() * 256);
let byte4 = rand = Math.floor(Math.random() * 256);
console.log(byte1);
console.log(byte2);
console.log(byte3);
console.log(byte4);

//Question 5
let ipAddress = byte1 + '.' + byte2 + '.' + byte3 + '.' + byte4;
console.log(ipAddress);

//Question 6
let table = 15;
for (let i = 0; i <= 10; i++){
    console.log(`${table} X ${i} = ${table * i}`)
}

//Question 7
let evenList = []; 
let oddList = [];
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0 ) {
        evenList.push(i);
    }
    else {
        oddList.push(i);
    }
}
console.log(evenList);
console.log(oddList);

//Question 8
let evenSum = 0;
for (let i = 0; i < evenList.length; i++) {
    evenSum += evenList[i];
}
console.log(evenSum);

//Question 9 and 10
let num = Math.floor(Math.random() * 100);
//let num = 28 //perfect number testing
//let num = 7; //prime testing
console.log(num);
let divisors = [];
for (i = 1; i < num; i++) {
    if (num % i === 0) {
        divisors.push(i);
    }
}; 
let sumDivisors = 0;
for (let i = 0; i < divisors.length; i++) {
    sumDivisors += divisors[i];
}
console.log(divisors);
if (sumDivisors === num) {
    console.log(`${num} is a perfect number`);
}
else if (divisors.length === 1) {
    console.log(`${num} is a prime number`);
}
else {
    console.log(`${num} is neither a perfect number nor a prime number`);
}


