//1
const identNumInput = document.querySelector('.identNumInput');
const identNumCheck = document.querySelector('.identNumCheck');
const identNumResult = document.querySelector('.identNumResult');

const identNumRegExp = /^[1|2]\d{13}$/;

identNumCheck.addEventListener('click',()=>{
    if(identNumRegExp.test(identNumInput.value)){
        identNumResult.innerText = 'correct';
        identNumResult.style.color = 'green';
    } else {
        identNumResult.innerText = 'wrong';
        identNumResult.style.color = 'red';
    }
});


//2
const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');

let i = 0

const move = block2.addEventListener('click', ()=>{
    block2.style.left = `${i++}px`
    move()
})

