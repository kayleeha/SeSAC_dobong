let form = document.querySelector('form')
let btn = document.querySelector('button')
let id = document.querySelector('#userid')
let comment = document.querySelector('#comment')
let ul = document.querySelector('ul')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let li = document.createElement('li') 
    li.innerHTML = `<b>${id.value}</b> - ${comment.value}`;
    ul.append(li)

    id.value = ''
    comment.value = ''
})


