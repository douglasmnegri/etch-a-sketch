const container = document.querySelector('#container');
const button = document.querySelector('#gridnumber');
const buttonReset = document.querySelector('#gridreset');
const row = document.querySelector('.row');

buttonReset.addEventListener('click', ()=> {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
removeAllChildNodes(container);
});


button.addEventListener('click', () => {
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
    div.classList.add('paint');
  });
});

});
