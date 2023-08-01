"use strict";

// debugger

/* Make Calculator */

/*
const input1 = document.getElementById("input1"),
  input2 = document.getElementById("input2"),
  plusBtn = document.getElementById("plus"),
  minusBtn = document.getElementById("minus"),
  resultBox = document.getElementById("result"),
  calculateBtn = document.getElementById("calculateBtn");
let action



plusBtn.addEventListener('click', () => {
  action = '+'
})

minusBtn.addEventListener('click', () => {
  action = '-'
})

const getResult = (result) => {
  resultBox.textContent = result
}

const computeWithAction = (value1, value2, actionSymbol) => {
  const num1 = Number(value1.value)
  const num2 = Number(value2.value)

  return actionSymbol == '+' ? num1 + num2 : num1 - num2
}



calculateBtn.addEventListener('click', () => {

  if (action == '+') {
    const result = computeWithAction(input1, input2, action)
    getResult(result)

  } else if (action == '-') {
    const result = computeWithAction(input1, input2, action)
    getResult(result)
  }



})

*/

/* Make notes list */
/** 
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


const notes = [
  {
    title: 'write your text',
    completed: true,
  },

  {
    title: 'go to school',
    completed: false,
  }
]

function render() {
  listElement.innerHTML = ''
  if(notes.length === 0){
    listElement.innerHTML = '<p> Not new notes</p>'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML(
      'beforeend',
      getNoteComplate(notes[i], i),

    )
  }

}

render()



function getNoteComplate(note, index) {
  return `
        <li class="notes__wrapper">
             <span class="${note.completed ? 'text-decoration-line-through' : ''}"
             >${note.title}</span>
               <div >
              <span 
              class="notes__btn btn-${note.completed ? 'yelow' : 'green'} " 
              data-index="${index}"
              data-type="toggle"
              >&#10003;</span>

               <span 
               class="notes__btn btn-red" 
               data-index="${index}"
               data-type="remove"
               >&#935;</span>
              </div>
              </li>
        `
}

createBtn.addEventListener('click', () => {
  if (inputElement.value.length === 0) {
    return
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  }

  notes.push(newNote)
  render()
  inputElement.value = ''


})


listElement.addEventListener('click', (e) => {

  if (e.target.dataset.index){
    const index = parseInt(e.target.dataset.index)
    const type = e.target.dataset.type

    if (type === 'toggle'){
      notes[index].completed = !notes[index].completed
    }
    else if ( type === 'remove'){
      notes.splice(index, 1)
    }
  }

  render()

})

*/

/* Reduce
function sumAll(... numbers) {
  // let res = 0 
  // for(let num of numbers){
  //  res += num
  // }

  //  return res

 
return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 3, 4, 2, 9))
*/

/* Closures Замыкание*/
/*
function createPerson(name) {
 return function (lastName) {
  console.log(name + ' ' + lastName)
 }
}

const addLastName = createPerson('Yuri')

addLastName('Martirosyan')
addLastName('Adams')
*/


/* Number, string, data */

/* Date() 


let mode = 'time'
const output = document.getElementById('output')
const btnFull = document.getElementById('full')
const btnDate = document.getElementById('date')
const btnTime = document.getElementById('time')

// btnFull.onclick = () => {mode = 'full', update()}
// btnDate.onclick = () => {mode = 'date', update()}
// btnTime.onclick = () => {mode = 'time', update()}

function bindMode(name) {
  return () => {
    mode = name
    update()
  }
}

btnFull.onclick = bindMode('full')
btnTime.onclick = bindMode('time')
btnDate.onclick = bindMode('date')

setInterval(update, 10000)
update()

function update(){
  output.textContent = format(mode)
}

function format(formatMode) {

  const now = new Date()

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString()
      
    case 'date':
      return now.toLocaleDateString()
      
    case 'full':
      return now.toLocaleTimeString() + ' ' + now.toLocaleDateString();
     
    default: now.toLocaleTimeString();

  }
}

*/

/* Destructuring assignment */
/*
let userName = 'Jhon'
let userAge = 23
let userCity = 'New York'

let user = {
  name: 'Jhon',
  age: 23,
  city: 'New York',
}

let {age, city} = user

console.log(age, city)

*/
/*
function createParamForm(obj) {
  const form = document.createElement('form')
  const input = document.createElement('input')
  const btn = document.createElement('button')

let {placeholder, type, btnText} = obj

  input.placeholder = placeholder
  input.type = type

  btn.textContent = btnText

  form.append(input, btn)

  return {
    form,
    input,
    btn,
  }
}
const {form, input, btn} = createParamForm({
  placeholder: 'age',
  type: 'number',
  btnText: 'get'
})

input.style.borderRadius = '12px'
btn.style.borderRadius = '12px'
input.style.padding = '5px'
input.style.marginRight = '10px'
btn.style.padding = '5px'
btn.style.backgroundColor = 'white'
btn.style.color = 'black'

document.getElementById('app').append(form)
 */