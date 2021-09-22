import 'displayTask';

class Task {
  constructor() {
    this.input = document.querySelector('.addTask');
    this.error = document.querySelector('.errorCheck');
  }

  inputCheck() {
    displayTask();
    if(this.input == '') {
      
    }
  }
}

// const error = () => {
//   displayTask();
  

// }