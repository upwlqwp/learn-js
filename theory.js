// /* OPERATORS */

// let a = 2
// let b = 3
// let c = 5

// // c = c + a
// // c = c - a
// // c = c / a
// // c = c * a

// // c += a
// // c -= a
// // c *= a
// // c /= a

// /* DATA TYPES */

// const age = 20 // number
// const name = 'Same' // string
// const isProgrammer = true // boolean
// let x // undefined
// null // null
// NaN // not a number
// console.log(typeof NaN) // typeof check to type

// /* Priority */

// const fullAge = 29
// const birthYear = 1993
// const currentYear = 2023

// // > < <= >=

// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)

// const num1 = 30
// const num2 = '30'

// console.log(num1 === num2)

// /* Arrays */

// const myArray = [1, 2, true, 'Name', 90, null, undefined]

// console.log(myArray)

// Array methods

const names = ["Jhon", "Mike", "Anna", "Nina"];

//names.push('Viki')
//names.unshift('Viki')
//names.shift()
//names.pop('Viki')

//console.log('Names: ', names)
//console.log(names.reverse())
//console.log(names.toReversed())

//console.log(names)

// const letters = ['b', 'c', 'a', 'd', 'f']

// console.log(letters)

// console.log(letters.sort())

// console.log(names.splice(0, 2))
// console.log(names.toSplice(0, 2))

// const greatName = 'Anna'
// const index = names.indexOf(greatName)

// console.log(index)
// names.with(index, 'Anna Quer')

// names[index] = 'Anna Quer'
// console.log(names[index])
// console.log(names)

// const capitalNames = names.map(function(name, index){
//  if(index === 2){
//     return true
//  }
//  return name
// })

// console.log(capitalNames)

//console.log(names.includes('J  '))

//console.log(names)

// const people = [
//     {name: 'Nick',age: 21},
//     {name: 'Mia',age: 19},
//     {name: 'Orea',age: 24},
//     {name: 'Jeck',age: 22},
// ]

/* let findedPerson 

// for (let person of people){
//     if (person.age > 20){
//         findedPerson = person
//     }
 }*/

// const findedPerson = people.find(function(person){
//     if (person.age <= 24){
//         return true
//     }

//    // console.log(person.age)
// })

//console.log(people.includes('Jeck'))
// console.log(people.indexOf('Jeck') !== - 1)

//console.log(findedPerson)

const people = [
  {name: "Leo",age: 20,},

  {name: "Mia",age: 23,},

  {name: "Anna", age: 18,},

  {name: "Dima", age: 28,},
];

//let findedPerson

/*for(let person of people){
    if(person.age === 23){
findedPerson = person
    }
}*/

const findedPerson = people.findIndex(function(person){

    return person.age === 20

// if(person.age === 28){
//     return true
// }

})

//const findedPerson = people.find((person) => person.age === 23) 

//console.log(findedPerson)

// const filtered = people.filter((person) => person.age < 20) 

// console.log(filtered)

// console.log(people)