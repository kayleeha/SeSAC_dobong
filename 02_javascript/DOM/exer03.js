let done = document.querySelectorAll('.done')
let todo = document.querySelectorAll('.todo')

for(let el of done) {
    el.classList.remove('done')
    el.classList.add('todo')
}

for(let to of todo) {
    to.classList.remove('todo')
    to.classList.add('done')
}
