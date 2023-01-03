const gridContainer = document.getElementById('grid-container');

function smallGrid () {
    for (let i = 0; i < 144; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-content');
      gridContainer.appendChild(square);
   }
}

smallGrid ()

//hover event
const allDivs = document.querySelectorAll('.grid-content');
allDivs.forEach((div) => {
  div.addEventListener('mouseover', (event) => {
    div.style.backgroundColor = 'red';
  });
})

function deleteGrid () {
  const grid = document.querySelectorAll('.grid-content');
  grid.forEach(grid => {
    grid.remove();
  })
}

const smallSketch = document.getElementById('small-grid');
smallSketch.addEventListener('click', function() {
  smallGrid(144);
});


