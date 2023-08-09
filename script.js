const grid = document.getElementById('grid');

function createGrid ('div'){
    for (let i = 0; i < 256; i++ ) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
}

function removeChild (parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function randomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0, i < 6; i++) {
        color += letters[(Math.floor(Math.random()) * 16)];
    }
    return color;
}


const slider = document.getElementById('slider');
const sliderVal = document.getElementById('sliderVal');

slider.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    sliderVal.textContent = val;
    removeChild(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
    })
        grid.appendChild(div);
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; val*val; i++) {
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'white';
        })
    }
});

const rgb = document.getElementById('rgb');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; val*val; i++) {
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomColor();
        })
    }
});

const black = document.getElementById('black');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; val*val; i++) {
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = black;
        })
    }
});

const colorSelector = document.getElementById('colorSelector');
rgb.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; val*val; i++) {
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});

createGrid();