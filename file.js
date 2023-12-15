const container = document.querySelector('#container');
const buttonGrid = document.querySelector('#gridnumber');
const buttonReset = document.querySelector('#gridreset');
const buttonColor = document.querySelector('#randomcolor')
const row = document.querySelector('.row');

buttonColor.addEventListener('click', () => {
  if(buttonColor.classList.contains('.randomize')) {
    buttonColor.classList.remove('.randomize');
    buttonColor.removeAttribute('style', `background: #e5e5e5; 
    outline: none; 
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1; 
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1; 
    box-shadow: inset 0px 0px 5px #c1c1c1;`
    )
  }
  else {
    buttonColor.classList.add('.randomize');
    buttonColor.setAttribute('style', `background: #00BFFF; 
    outline: none; 
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1; 
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1; 
    box-shadow: inset 0px 0px 5px #c1c1c1;`)
  }
});

buttonReset.addEventListener('click', ()=> {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const container = document.querySelector('#container');
removeAllChildNodes(container)
});


buttonGrid.addEventListener('click', () => {
const numBox = prompt("What's the grid size?");

if(numBox <= 100 && document.querySelector('.box') < 10000) {
function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      container.appendChild(row);

      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
      };
    };
  }
};

createBoxes(numBox);

//Paint the boxes
const square = document.querySelectorAll('.box');

square.forEach((div) => {
  div.addEventListener('mouseover', () => { 
    const colors = [];

    if(buttonColor.classList.contains('.randomize')) {
      for(let i = 0; i < 10; i ++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        div.setAttribute('style', `background-color: ${randomColor};`);
      }
  }
    else {
      div.classList.add('paint');
      }
    });
  });
});