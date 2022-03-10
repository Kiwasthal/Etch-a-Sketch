//Creating all parts of HTML using JS
const body = document.getElementsByTagName('body');
//Creating a header
const headerContainer = document.createElement('div')
const header = document.createElement('h1')
headerContainer.classList.add('headcont')
document.body.appendChild(headerContainer)
header.textContent = "Etch-a-Sketch"
headerContainer.appendChild(header)
//Creating a board to fit grid and interface
const board = document.createElement('div')
board.classList.add('board')
//Creating a  div to fit buttons
const holderLeft = document.createElement('div')
holderLeft.classList.add('holderLeft')
//Creating buttons
const clearButton = document.createElement('button')
const gridZero = document.createElement('button')
const gridOne = document.createElement('button')
const gridTwo = document.createElement('button')
const gridThree = document.createElement('button')
const gridFour = document.createElement('button')
clearButton.textContent = 'Clear'
gridZero.textContent = '16px'
gridOne.textContent = "32px"
gridTwo.textContent = "64px"
gridThree.textContent = "128px"
gridFour.textContent = "256px"
holderLeft.appendChild(clearButton)
holderLeft.appendChild(gridZero)
holderLeft.appendChild(gridOne)
holderLeft.appendChild(gridTwo)
holderLeft.appendChild(gridThree)
holderLeft.appendChild(gridFour)
//Creating div-container to store all etching boxes
const container = document.createElement('div')
container.classList.add('container');
//Appending children
document.body.appendChild(board)
board.appendChild(holderLeft)
board.appendChild(container);
container.classList.add('container');
// Append container to body 

createGrid(32)

//Creates a function to produce grid

function createGrid(size) {
    for (let i = 0; i < size ; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row')
        let boxSize = 32/(size / 16)
            for (let y = 0 ; y <size ; y++){
                const divBox = document.createElement('div');
                divBox.classList.add('box')
                divBox.style.width = `${boxSize}px`
                divBox.style.height = `${boxSize}px`
                divBox.style.backgroundColor = 'white'
                divBox.addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = 'black';
                })
                divRow.appendChild(divBox)
            }
        container.appendChild(divRow)
    }}

    //Create a function to clear grid with button click



    let pixel = document.querySelectorAll(".box")
console.log(pixel)

//Adding a clear button

clearButton.addEventListener('click', function() {
    for (let i = 0; i< pixel.length ; i++) {
    pixel[i].style.backgroundColor = 'white'
}})

//Addin buttons that create differenc divs 
gridZero.addEventListener('click',() =>{ remove(16)})
gridOne.addEventListener('click', () =>{ remove(32)})
gridTwo.addEventListener('click', () =>{ remove(64)})
gridThree.addEventListener('click', () =>{ remove(128)})
gridFour.addEventListener('click', () =>{ remove(256)}) 


function remove(size) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    createGrid(size) 
} 
