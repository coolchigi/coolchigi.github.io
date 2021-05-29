let counterId = document.getElementById("counter-id")
let saveId = document.getElementById("prevEn")
let counter = 0
function increment(){
    counter++
    counterId.innerText = counter
}

function reset(){
    counter = 0
    counterId.innerText = counter
    saveId.innerText = "Previous Entries: 0"
}

function save(){
    let space = "  "
    let placeholder = space + counter +  " - " 
   
    saveId.innerText += placeholder
}