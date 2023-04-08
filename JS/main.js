let conte = document.getElementById('container')
let div = document.querySelector('.select')
let btns = document.querySelectorAll('.btn')
let submit = document.querySelector('#sub')
let thanks = document.querySelector('.tks')
let span = document.querySelector('#rating')
let revert = document.querySelector('#inic')

let number = ''
btns.forEach((btn) =>{
    btn.addEventListener('click', e =>{
        number = e.target.innerText
    });
});

submit.addEventListener('click', e => {
    if(number  == ''){
        alert('Select a Number')
    }else {
        conte.style.display = 'none'
        thanks.style.display = 'block'

        span.innerText = number
    }
});

revert.addEventListener('click', () =>{
    location.reload()
})