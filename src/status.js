export default function updateStatus(event) {
event.target.nextElementSibling.classList.toggle('completed');
 const status = JSON.parse(localStorage.getItem('taskContent'))
 status[event.target.dataset.id].completed = event.target.checked;
 localStorage.setItem('taskContent', JSON.stringify(status))
}

