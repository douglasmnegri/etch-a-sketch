//Declaring a variable for the container div.
//Declaring boxes to store lines and columns.
const container = document.querySelector('#container');

const boxLine = document.createElement('div');
boxLine.classList.add('boxLine');
container.appendChild(boxLine);

const boxColumn = document.createElement('div');
boxColumn.classList.add('boxColumn');
container.appendChild(boxColumn);


//Function to create the grid

function createGrid () {
    for(let i = 0; i < 15; i++) {
        //Create lines and columns
        const lines = document.createElement('div');
        const columns = document.createElement('div');
        
        //Add a classlist for both of them
        lines.classList.add('lines');
        columns.classList.add('columns');

        //Append them to their parent element
        boxLine.appendChild(lines);
        boxColumn.appendChild(columns);

    }
}
createGrid()


//Change the class of all divs created on lines and columns - add paint
const gridLine = document.querySelectorAll('.lines');
const gridColumn = document.querySelectorAll('.columns');

container.addEventListener('click', ()=> {
gridLine.forEach((div) => { 
    div.classList.add('paint');
});
gridColumn.forEach((div) => {
    div.classList.add('paint');
});
});


//Create new function to insert squared inside the container instead of lines x columns;
const container2 = document.querySelector('#container2');


function printGrid () {
    for(let i = 0; i < 20; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container2.appendChild(square)

    }
};

printGrid();

/*
const container = document.querySelector('#container');

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
      const row = container.appendChild(document.createElement('div'));
      for (let j = 0; j < numBox; j++) {
        const square = document.createElement('div');
        square.className = 'box';
        row.appendChild(square);
      }
    }
  }
  
  
  createBoxes(2);
  */