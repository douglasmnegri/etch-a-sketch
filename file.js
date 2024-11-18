//Variables that select elements from html
const container = document.querySelector('#container');
const buttonGrid = document.querySelector('#gridnumber');
const buttonReset = document.querySelector('#gridreset');
const buttonColor = document.querySelector('#randomcolor');
const buttonDark = document.querySelector('#darkcolor');
const buttonEraser = document.querySelector('#eraser');
const allButtons = document.querySelectorAll('#randomcolor, #eraser, #darkcolor');

//I presume it's not needed to create an event listener for the attributes of each button, since they're all the same
//Needs to create a function that changes the button CSS

allButtons.forEach((button) => {
  button.addEventListener('click', () => {
    allButtons.forEach((btn) => {
      btn.removeAttribute('style');
    });

    if (buttonDark.classList.contains('dark') || buttonEraser.classList.contains('eraser') || buttonColor.classList.contains('randomize')) {
      button.style.cssText = '';
    } else {
      button.style.cssText = 'background: #00BFFF; outline: none; -webkit-box-shadow: inset 0px 0px 5px #c1c1c1; -moz-box-shadow: inset 0px 0px 5px #c1c1c1; box-shadow: inset 0px 0px 5px #c1c1c1;';
    }
  });
});


buttonDark.addEventListener('click', () => {
  if(buttonDark.classList.contains('.dark')) {
    buttonDark.classList.remove('.dark');
    buttonDark.style.cssText = '';

  }
  else { 
    buttonDark.classList.add('.dark');
    buttonEraser.classList.remove('.eraser');
    buttonColor.classList.remove('.randomize');
  }
});

buttonEraser.addEventListener('click', () => {
  if(buttonEraser.classList.contains('.eraser')) {
    buttonEraser.classList.remove('.eraser');
    buttonEraser.style.cssText = '';

  }
  else {
    buttonEraser.classList.add('.eraser');
    buttonDark.classList.remove('.dark');
    buttonColor.classList.remove('.randomize');

  }
});

buttonColor.addEventListener('click', () => {
  if(buttonColor.classList.contains('.randomize')) {
    buttonColor.classList.remove('.randomize');
    buttonColor.style.cssText = '';
  }
  else {
    buttonColor.classList.add('.randomize');
    buttonDark.classList.remove('.dark');
    buttonEraser.classList.remove('.eraser');

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
const colorpicker = document.querySelector('#colorpicker');
colorpicker.addEventListener('click', () => {

let currentColor = colorpicker.value;
div.setAttribute('style', `background-color: ${colorpicker.value}`);
});

square.forEach((div) => {
  div.addEventListener('mouseover', () => { 
    let RGB = `rgb(239, 157, 6);`;
    div.setAttribute('style', `background-color: ${RGB}`);


    if(buttonColor.classList.contains('.randomize')) {
      for(let i = 0; i < 5; i ++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        div.setAttribute('style', `background-color: ${randomColor};`);
      }
  }
  if(buttonEraser.classList.contains('.eraser')) {
    div.removeAttribute('data-brightness');
    div.setAttribute('style', `background-color: white};`);
  }

  if(buttonDark.classList.contains('.dark')) {
    let currentBrightness = div.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) - 10;

    if(currentBrightness > 0) {
        div.style.filter = `brightness(${currentBrightness}%)`;
        div.dataset.brightness = currentBrightness;
    }
    else if(currentBrightness === 0) {
      div.style.filter = `brightness(${currentBrightness}%)`;
    }
};
    });
  });
});
