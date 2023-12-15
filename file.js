const container2 = document.querySelector('#container2');

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = container2.appendChild(document.createElement('div'));
      row.classList.add('row');

      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
      }
    }
  }
  
  
  createBoxes(50);
