// input value 설정 및 가져오기
// val()
function getValue(){
    let value = $('input').val()
    console.log(value)
}
function setValue(){
    $('input').val('다른 글자로 설정')
}

// css()
function changeCssJS(){
    let span = document.querySelector('span')
    span.style = 'font-size:20px; color:red;'
}
function changeCssJQ(){
    $('span').css('font-size', '40px')
    $('span').css('color', 'blue')
}

// attr()
function changeAttrJS(){
    let a = document.querySelector('a')
    a.setAttribute('href', 'https://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href', 'https://www.daum.net')
}

// text()
function changeTextJS() {
    let p = document.querySelector('.p-text')
    p.innerText = 'js로 바꿨어요'
}
function changeTextJQ() {
    $('.p-text').text('jq로 바꾼 내용입니다.')
}

// html()
function changeHtmlJS() {
    let p1 = document.querySelector('.p-html')
    p1.innerHTML = '<em>js로 바꿨어요<em>'
}
function changeHtmlJQ() {
    $('.p-html').html('<b>jq</b>로 <h2>바꾼<h2> 내용입니다.')
}

// append()
function appendJS() {
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '마지막 자식으로 추가된 li (js)'
    ul.append(li)
}
function appendJQ() {
    $('.colors').append('<li>마지막 자식으로 추가된 li (jquery)<li>')
}

// prepend()
function prependJS() {
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '처음으로 추가된 li (js)'
    ul.prepend(li)
}
function prependJQ() {
    $('.colors').prepend('jq로 바꾼 내용입니다.')
}

// after()
function afterJS() {
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = '다음 형제로 추가된 li (js)'
    green.after(li)
}
function afterJQ() {
    $('.green').after('jq로 바꾼 내용입니다.')
}

// before()
function beforeJS() {
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = '이전 형제로 추가된 li (js)'
    green.before(li)
}
function beforeJQ() {
    $('.green').before('jq로 바꾼 내용입니다.')
}

// remove()
function removeJS(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}

function removeJQ(){
    $('.li2').remove()
}

// empty()
function emptyJS(){
    let nums = document.querySelector('.nums')
    nums.innerHTML = ''

}

function emptyJQ(){
    $('.nums').empty()
}

// 요소 탐색 
function findParent(){
    console.log($('.child2').parent())
}

function findParents(){
    console.log($('.child2').parents())
}

function findNext(){
    console.log($('.child2').next())
}

function findPrev(){
    console.log($('.child2').prev())
}

function findChildren(){
    console.log($('.parent').children())
}

// 클래스 조작하기
function addClass(){
    $('#hi').addClass('fs-50')
}

function removeClass(){
    // $('#hi').removeClass('color-blue')
    $('#hi').removeClass() // 클래스 모두 제거
}

function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}

function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}


