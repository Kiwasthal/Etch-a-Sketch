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
const holderRigt = document.createElement('div')
holderLeft.classList.add('holderLeft')
holderRigt.classList.add('holderRight')
//Right side buttons
//Change grid size and clear current grid
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
//Left side buttons
const colorBtn = document.createElement('button')
const gradBtn = document.createElement('button')
const eraseBtn = document.createElement('button')
colorBtn.textContent = 'Colorful'
gradBtn.textContent = 'Gradient'
eraseBtn.textContent= 'Eraser'
holderRigt.appendChild(colorBtn)
holderRigt.appendChild(gradBtn)
holderRigt.appendChild(eraseBtn)
//Creating div-container to store all etching boxes
const container = document.createElement('div')
container.classList.add('container');
//Appending children
document.body.appendChild(board)
board.appendChild(holderLeft)
board.appendChild(container);
board.appendChild(holderRigt)
container.classList.add('container');
// Append container to body 

createGrid(16)

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




//Addin buttons that create differenc divs 

gridZero.addEventListener('click',() =>{ remove(16)})
gridOne.addEventListener('click', () =>{ remove(32)})
gridTwo.addEventListener('click', () =>{ remove(64)})
gridThree.addEventListener('click', () =>{ remove(128)})
gridFour.addEventListener('click', () =>{ remove(256)}) 

//Function to create a new grid , removes all container content and uses the grid generator function
function remove(size) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    createGrid(size) 
} 


//Changes all pixels to backgroundColor White

clearButton.addEventListener('click', function() {
    let pixel = document.querySelectorAll(".box")
    for (let i = 0; i< pixel.length ; i++) {
    pixel[i].style.backgroundColor = 'white'
}})

//Generates different colors when mouse enters a pixel
colorBtn.addEventListener('click', colorful )

gradBtn.addEventListener('click', gradient )

eraseBtn.addEventListener('click', erase )




//Callback function to colorBtn event Listener  

function colorful() {
    let pixel = document.querySelectorAll(".box")
    for (let i = 0; i < pixel.length ; i++) {
        pixel[i].addEventListener('mouseenter', function() {
            let red = Math.floor(Math.random()*256) ;
            let green = Math.floor(Math.random()*256) ;
            let blue = Math.floor(Math.random()*256) ;
            pixel[i].style.backgroundColor = `rgb(${red},${green},${blue})` ;
        })
}}

//Used as a callback of eraseBtn

function erase(){
    let pixel = document.querySelectorAll(".box")
    for (let i = 0; i < pixel.length ; i++) {
        pixel[i].addEventListener('mouseenter', function() {
            pixel[i].style.backgroundColor = 'white' ;
        })
}}


let start = 256

function gradient() {
    let pixel = document.querySelectorAll(".box")
    for (let i = 0; i < pixel.length ; i++) {
        pixel[i].addEventListener('mouseenter', function(){
            for (y = 0 ; y <10 ; y++) {
                pixel[i].style.backgroundColor = `rgb(${start-25.6},${start-25.6},${start-25.6})`
            }
        }
    )}}
