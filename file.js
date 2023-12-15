const container = document.querySelector('#container');

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      container.appendChild(row);

      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
      }
    }
  }
  
  
  createBoxes(50);

  /* Learning .forEach()
  const companyNames = ["Douglas", "Gabrielli", "Duda", "Dudinha", "Junior"];

  companyNames.forEach((element, index) => {
    let listQt = `There are ${index + 1} names in this list`;
    console.log(listQt);
  });
*/
  const square = document.querySelectorAll('.box');
  square.forEach((div) => {
    div.addEventListener('mouseover', () => { 
      div.classList.add('paint');
    });
  });