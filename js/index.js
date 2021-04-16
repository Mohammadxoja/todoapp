const createBtn =  document.querySelector('.fa-plus-square');
const createdListDiv = document.querySelector('.createdListDiv');
const checked = document.querySelector('#checked');
let h1 = document.querySelector('h1');
let arr = [];

class Todo {
  createList() {
   this.createInputClass = document.querySelector('.create > input');
   this.anotherDiv = document.createElement('div');
   this.trashButton = document.createElement('button');
   this.checkedElement = document.createElement('button');
   this.createdInput = document.createElement('div');

   this.trashButton.classList.add('trashButton');
   this.checkedElement.classList.add('checkedButton');

   this.anotherDiv.classList.add('anotherDiv');
   this.trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
   this.checkedElement.innerHTML = `<i class="fas fa-check"></i>`;
   createdListDiv.appendChild(this.anotherDiv);
   this.anotherDiv.appendChild(this.createdInput);
   this.anotherDiv.appendChild(this.trashButton);
   this.anotherDiv.appendChild(this.checkedElement);
   this.createdInput.classList.add('createdInputClass');
   this.createdInput.innerHTML = this.createInputClass.value;
 }

  storage() {
    arr.push(this.createInputClass.value);
    localStorage.setItem('data', JSON.stringify(arr));
    this.res = localStorage.getItem('data');
    console.log(this.res);

    localStorage.setItem('my', 1);
    console.log(localStorage.getItem('my'));
  }

  checkedFunc() {
      this.checkedElement.addEventListener('click', (e) => {
         e.preventDefault();
         this.anotherDiv.classList.toggle('checkedElem');
      })
  }

  trashFunc() {
    this.trashButton.addEventListener('click', (e) => {
      e.preventDefault();
      if(this.anotherDiv.classList.contains('checkedElem')) {
            console.log('false');
        }else {
          console.log('true');
            this.anotherDiv.remove();
        }
     })

  }

  filter() {
    checked.addEventListener('click', () => {
        if(this.anotherDiv.classList.contains('checkedElem')) {
          this.anotherDiv.style.display = 'block';
        }
    })
  }

  api() {
    
  }
}

const todoComponents = () => {
  const list = new Todo();
  list.createList();
  list.checkedFunc();
  list.trashFunc();
  list.storage();
  list.api();
}

createBtn.addEventListener('click', () => {
   todoComponents();
});

// document.addEventListener('keypress', (e) => {
//    if(e.keyCode == 48){
//    	   e.preventDefault();
//        createList();
//    }
//    console.log(e.keyCode);
// })    э


// add deleted notes to todo app
