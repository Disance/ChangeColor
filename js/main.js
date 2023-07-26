const cols = document.querySelectorAll('.col')


document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code == "Space"){
        setRandomColors()
    }
})

document.addEventListener('click', (event) =>{
    const type = event.target.dataset.type
    if (type == "lock"){
        const node = event.target.tagName.toLowerCase() == 'i'
        ? event.target
        : event.target.children[0]
        
        node.classList.toggle('fa-unlock')
        node.classList.toggle('fa-lock')
     }
    
})

function generateRandomColor(){
    const hexCodes = "0123456789ABCDEF"

    let color = ''

    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

function setRandomColors(){
    cols.forEach(col => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const color = generateRandomColor()

        if (isLocked){
            return
        }

        text.textContent = color
        col.style.background = color
    });
}

setRandomColors()