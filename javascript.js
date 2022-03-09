//Creating all parts of HTML using JS
const body = document.getElementsByTagName('body');
//Creating dov-container to store all divs 
const container = document.createElement('div')
container.classList.add('container');
// Append container to body 
document.body.appendChild(container);
//creating variable to store divs, used to "sketch"
const divs = document.getElementsByClassName('sketchBox')
const get = document.getElementById('sketchBoxs')
//Creates a function to produce grid

function changeColor(e) {
    e.target.style.backgroundColor = 'black'
}

function gridSize(size){
for (let i= 0; i < size*size ; i++) {
    let divBox = document.createElement('div')   
    divBox.classList.add('sketchBox')  
    // divBox.addEventListener('hover', changeColor )
    container.appendChild(divBox)  
}}
//setting grid size for now
gridSize(16)


