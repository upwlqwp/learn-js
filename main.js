"use strict";

/* Make Calculator */

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

/* Make notes list */


const inputElement = document.getElementById('title'),
  createBtn = document.getElementById('create'),
  listElement = document.getElementById('list');



createBtn.addEventListener('click', () => {

  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
    title: inputElement.value,
    completed:false,
  }

  listElement.insertAdjacentHTML('beforeend',getNoteTemplate(newNote))

  inputElement.value = ''

})


const notes = [
  {
    title: 'wirte some text',
    completed: false,
  },

  {
    title: 'ack some questions',
    completed: true,
  }
]

function render() {
  for (let note of notes){
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
  }
}

render()


 
function getNoteTemplate(note) {
  
  return `
          <li class="notes__wrapper">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <div >
              <span class="notes__btn btn-${note.completed ? 'orange' : 'green' }">&#10003;</span>
              <span class="notes__btn btn-red">&#935;</span>
            </div>
          </li>
`
  
}
