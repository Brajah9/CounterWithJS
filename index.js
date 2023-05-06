let button = document.querySelector('.button');
let buttonReload = document.querySelector('.button-reload');
let buttonTakeOut = document.querySelector('.button-takeout');
let buttonx100 = document.querySelector('.button-x100')
let alert = document.querySelector('.alert')
let contador = document.querySelector('.counter')

let counter = 0;

/* Events */

button.addEventListener('click', () => {
    counter++
    contador.textContent = counter
    alert.textContent = ''
    alert.classList.remove('ready')
})

buttonReload.addEventListener('click', () => {
    if (counter >= 1) {
    counter--
    contador.textContent = counter
    alert.textContent = ''
    alert.classList.remove('ready')
    
    }
})

buttonx100.addEventListener('click', () => {
    if (counter >= 100) {
        counter = counter + 100
        contador.textContent = counter
       
        alert.textContent = 'x100 Unlocked'
        alert.classList.add('ready')
        
    }else{
        alert.textContent = 'You need 100 points before!';  
    }
})


buttonTakeOut.addEventListener('click', () => {
    if (confirm("Are you sure?") == true) {
    counter = 0
    contador.textContent = counter
    alert.textContent = ''
    alert.classList.remove('ready')
    }
})