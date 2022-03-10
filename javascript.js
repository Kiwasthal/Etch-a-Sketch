//Creating all parts of HTML using JS
const body = document.getElementsByTagName('body');
//Creating dov-container to store all divs 
const container = document.createElement('div')
container.classList.add('container');
// Append container to body 
document.body.appendChild(container);


//Creates a function to produce grid

function createGrid(size) {
    for (let i = 0; i < size ; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row')
        
            for (let y = 0 ; y <size ; y++){
                const divBox = document.createElement('div');
                divBox.classList.add('box')
                divBox.addEventListener('mouseenter', function(e) {
                    e.target.style.backgroundColor = 'black';
                })
                divRow.appendChild(divBox)
            }
        container.appendChild(divRow)
    }}

    createGrid(16)