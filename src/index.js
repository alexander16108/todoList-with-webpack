import './style.css';
import updateStatus from './status.js'

const container = document.getElementById('output-container');
let content = JSON.parse(localStorage.getItem('taskContent')) || [];

function displayTask() {
  if (content != []) {
    content.forEach((element) => {
     const structure = ` <li class='List-items' id='${element.index}'>
                   <input type='checkbox' class='box' data-id='${element.index
        }'  ${element.completed ? 'checked' : ''}>
                   <input type='text' value='${element.description}' data-index='${element.index
        }' class='description ${element.completed ? 'completed' : ''
        }'>
                   <i class='fas fa-ellipsis-v move-element' data-id='${element.index}'></i>
                   </li>
                   `
                   container.innerHTML += structure;
    });
  }
  const checkbox = document.querySelectorAll('.box');
  checkbox.forEach((chbox) => {
    chbox.addEventListener('change', updateStatus);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem('taskContent')) {
    localStorage.setItem('taskContent', JSON.stringify(content))
  }
});
displayTask();
