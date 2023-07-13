/* OPERATORS */
/*
let a = 2
let b = 3
let c = 5

// c = c + a
// c = c - a
// c = c / a
// c = c * a

// c += a
// c -= a
// c *= a
// c /= a
*/

/* DATA  TYPES */
/*
const age = 20 // number
const name = 'Same' // string
const isProgrammer = true // boolean
let x // undefined
null // null
NaN // not a number
console.log(typeof NaN) // typeof check to type
*/

/* Priority */
/*
const fullAge = 29
const birthYear = 1993
const currentYear = 2023

// > < <= >=

const isFullAge = currentYear - birthYear >= fullAge

console.log(isFullAge)

const num1 = 30
const num2 = '30'

console.log(num1 === num2)
*/

/* Arrays */
/*
const myArray = [1, 2, true, 'Name', 90, null, undefined]

console.log(myArray)
*/

/* Array methods */
/*
const names = ["Jhon", "Mike", "Anna", "Nina"];
console.log(names.slice(0, 3)) // 1- index, 2 - el

names.push('Viki')
names.unshift('Viki')
names.shift()
names.pop('Viki')

console.log('Names: ', names)
console.log(names.reverse())
console.log(names.toReversed())



const letters = ['b', 'c', 'a', 'd', 'f']

console.log(letters)

console.log(letters.sort())

console.log(names.splice(0, 2))
 console.log(names.toSplice(0, 2))

const greatName = 'Anna'
const index = names.indexOf(greatName)

console.log(index)
names.with(index, 'Anna Quer')

names[index] = 'Anna Quer'
console.log(names[index])
console.log(names)

const capitalNames = names.map(function(name, index){
 if(index === 2){
    return true
 }
 return name
})

console.log(capitalNames)

console.log(names.includes('J  '))

console.log(names)

const people = [
    {name: 'Nick',age: 21},
    {name: 'Mia',age: 19},
    {name: 'Orea',age: 24},
    {name: 'Jeck',age: 22},
]

 let findedPerson 

for (let person of people){
    if (person.age > 20){
        findedPerson = person
    }
 }

const findedPerson = people.find(function(person){
    if (person.age <= 24){
        return true
    }

   // console.log(person.age)
})

console.log(people.includes('Jeck'))
console.log(people.indexOf('Jeck') !== - 1)

console.log(findedPerson)

const people = [
  {name: "Leo",age: 20,},

  {name: "Mia",age: 23,},

  {name: "Anna", age: 18,},

  {name: "Dima", age: 28,},
];

let findedPerson

for(let person of people){
    if(person.age === 23){
findedPerson = person
    }
}

const findedPerson = people.findIndex(function(person){

    return person.age === 20

// if(person.age === 28){
//     return true
// }

})

const findedPerson = people.find((person) => person.age === 23)

console.log(findedPerson)

const filtered = people.filter((person) => person.age < 20)

console.log(filtered)

console.log(people)

const people = [
    {name: "Leo",age: 20,},

    {name: "Mia",age: 23,},

    {name: "Anna", age: 18,},

    {name: "Dima", age: 28,},
  ];

  const sumAge = people.filter((p) => p.age > 20)
*/

/* Number, string, data */
/*

const num = 9 // integer
const float = 9.66 // float
const pow = 10e3
const big = 1_000_000
const negative = -999


console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53)-1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(1 / 0)
console.log(Number.isFinite(1))
console.log(Number.NEGATIVE_INFINITY)
console.log(9 / 'hello') // not a number
const weird = (66 / undefined) 
const weirdNum = 45
console.log(Number.isNaN(weirdNum))
*/


/*
const strInt = '90'
const strFloat = '56.87'

console.log(Number(strInt))
console.log(Number(strFloat))
console.log(parseInt(strInt))
console.log(parseInt(strFloat))
console.log(parseFloat(strFloat))

console.log(+strInt, +strFloat) + with string

const fixed = (0.3 + 0.4).toFixed(2)

console.log(parseFloat(fixed))
*/

/* BigInt */
/*
console.log(BigInt(Number.MAX_SAFE_INTEGER + 786756754))

console.log(typeof -678n)
//console.log(8.0097n) //SyntaxError: Invalid or unexpected token
//console.log(67n - 9) //SyntaxError: Invalid or unexpected token

console.log(parseInt(87n))
console.log(10n - BigInt(8))

console.log(5n / 2n)
console.log(5 / 2)
*/

/* Math */
/*
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(49))
console.log(Math.pow(7, 2))
console.log(Math.abs(-89.08))
console.log(Math.max(8676, 88, 53, 5, 123, 0))
console.log(Math.min(8676, 88, 53, 5, 123, 0))
*/

/* 
const myNum = 3.96

console.log(Math.floor(myNum))
console.log(Math.ceil(myNum))
console.log(Math.round(myNum))
console.log(Math.trunc(myNum))
console.log(Math.random())
*/

/*
function getRondomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomNum = getRondomNumber(100, 1)

console.log(randomNum)

*/

/* Strings */
/*
const myName = "Bob";
const age = 8;

const output = `any string ${myName} and age ${
  age > 18 ? "can drive" : "can't drive"
} `;

console.log(output);
*/
/*
const firstName = 'Anna'

console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2))
console.log(firstName.indexOf('p'))
console.log(firstName.toLowerCase().startsWith('an'))
console.log(firstName.endsWith('na'))
console.log(firstName.repeat(10))

const password = '    gvg jnj'

console.log(password)
console.log(password.trim())
console.log(password.padStart(10))
*/

/* Functions */

/* Function Declaration

//#1
function sum( a, b) {
    console.log(a + b)
}
sum (5, 6)

//#2
function greet(myName){
   console.log(`Hello my name is ${myName}`)
}

greet('Jhon')

*/

/* Function Expertion

const myFn = function () {
    // console.log('hello!')
}

myFn()
*/

/* Function setTimeout & setInterval
setTimeout(function() {
    console.log('hello!')
}, 5000)
let counter = 0

const interval = setInterval(function () {
if (counter === 3){
    clearInterval(interval)
}else{
    console.log(++counter)
}
}, 1000)
*/

/* Arrow Function
//#syntax
const myArrowFn = () => {

}

const greet = (name) =>  console.log('hello it worked', name)

greet('Anna')
*/

/* Default Parameters */
/*
const sum = (a = 2, b = 8 / a) => {
console.log(a + b)
}
sum()
*/

/* Rest Parameters */
/*
function sum(... numbers) {
 let res = 0
for(let num of numbers){
    res += num
}
 return res
}

console.log(sum())
*/
/*
function testWhile(a) {
let x = 0
let y = 0
while(y <= a){
    y%2===0 ? x =(y + x) :null
   y++
}
    return x;
}
console.log(testWhile(x))
*/