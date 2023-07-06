"use strict";

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



