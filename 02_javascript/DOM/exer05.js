const btn = document.querySelector('button')
const body = document.querySelector('body')
const h2 = document.querySelector('h2')

btn.addEventListener('click', (e) => {
    randomBg = Math.floor(Math.random() * 256)
    randomBg1 = Math.floor(Math.random() * 256)
    randomBg2 = Math.floor(Math.random() * 256)
    
    body.style.backgroundColor = `rgb(${randomBg}, ${randomBg1}, ${randomBg2})`
    h2.innerText = `rgb(${randomBg}, ${randomBg1}, ${randomBg2})`
})


