const navBar = document.querySelector('nav')
const menuBtn = document.querySelector('.menubtn')
const closeBtn = document.querySelector('.closebtn')

menuBtn.addEventListener('click', ()=>{
    navBar.style.top = 0
})

closeBtn.addEventListener('click', ()=>{
    navBar.style.top = '-100%'
})