/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// arr = 0;
const container = document.getElementById('output-container');
 content = [
    {
      index: 0,
      completed: true,
      task: 'wash the dishes'
    },
    {
      index: 1,
      completed: false,
      task: 'wash the dishes'
    },
    {
      index: 2,
      completed: true,
      task: 'wash the dishes'
    },
    {
      index: 3,
      completed: false,
      task: 'wash the dishes'
    },
 ];

    function displayTask() {
    content.forEach((task) => { 
      const li = document.createElement('li');
      li.className = 'list-container';
      li.id = `${task.index}`;
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `${task.index}`;
      // checkbox.addEventListener('change', () => {
      //   if(i === 'change') {
      //     checkbox = task.completed;
      //     p.style.textDecoration = 'linethrough';
      //   }
      // })

      const p  =  document.createElement('p');
      p.className = 'task-output';
      p.innerHTML = `${task.description}`;

      const item = document.createElement('i');
      item.classList = 'far fa-ellipsis-v fa-2x';
      item.addEventListener('click', () => {
        const deleteTask = document.createElement('i');
        deleteTask.classList = 'fas fa-trash fa-2x';
    })
      li.append(checkbox, p, item);
      container.appendChild(li);
      container.innerHTML = '';
  });
  }

  console.log(displayTask());

  window.onload = displayTask();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvTGlzdCB3aXRoIHdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXJyID0gMDtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dC1jb250YWluZXInKTtcclxuIGNvbnRlbnQgPSBbXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiAwLFxyXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIHRhc2s6ICd3YXNoIHRoZSBkaXNoZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbmRleDogMSxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgdGFzazogJ3dhc2ggdGhlIGRpc2hlcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiAyLFxyXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIHRhc2s6ICd3YXNoIHRoZSBkaXNoZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbmRleDogMyxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgdGFzazogJ3dhc2ggdGhlIGRpc2hlcydcclxuICAgIH0sXHJcbiBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkge1xyXG4gICAgY29udGVudC5mb3JFYWNoKCh0YXNrKSA9PiB7IFxyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9ICdsaXN0LWNvbnRhaW5lcic7XHJcbiAgICAgIGxpLmlkID0gYCR7dGFzay5pbmRleH1gO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgY2hlY2tib3guaWQgPSBgJHt0YXNrLmluZGV4fWA7XHJcbiAgICAgIC8vIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgLy8gICBpZihpID09PSAnY2hhbmdlJykge1xyXG4gICAgICAvLyAgICAgY2hlY2tib3ggPSB0YXNrLmNvbXBsZXRlZDtcclxuICAgICAgLy8gICAgIHAuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZXRocm91Z2gnO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSlcclxuXHJcbiAgICAgIGNvbnN0IHAgID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcC5jbGFzc05hbWUgPSAndGFzay1vdXRwdXQnO1xyXG4gICAgICBwLmlubmVySFRNTCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2ZhciBmYS1lbGxpcHNpcy12IGZhLTJ4JztcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0ID0gJ2ZhcyBmYS10cmFzaCBmYS0yeCc7XHJcbiAgICB9KVxyXG4gICAgICBsaS5hcHBlbmQoY2hlY2tib3gsIHAsIGl0ZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhkaXNwbGF5VGFzaygpKTtcclxuXHJcbiAgd2luZG93Lm9ubG9hZCA9IGRpc3BsYXlUYXNrKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9