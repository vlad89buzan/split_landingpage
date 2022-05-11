const left =document.querySelector('.left');
const right =document.querySelector('.right');
const container =document.querySelector('.container');
if(container.offsetWidth >799.98){
    left.addEventListener('mouseenter',()=>{
        container.classList.add('hover-left')
    })
    left.addEventListener('mouseleave',()=>{
        container.classList.remove('hover-left')
    })
    right.addEventListener('mouseenter',()=>{
        container.classList.add('hover-right')
    })
    right.addEventListener('mouseleave',()=>{
        container.classList.remove('hover-right')
    })
}
else{
    left.addEventListener('mouseenter',()=>{
        container.classList.add('hover-left-height')
    })
    left.addEventListener('mouseleave',()=>{
        container.classList.remove('hover-left-height')
    })
    right.addEventListener('mouseenter',()=>{
        container.classList.add('hover-right-height')
    })
    right.addEventListener('mouseleave',()=>{
        container.classList.remove('hover-right-height')
    })
}
