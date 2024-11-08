/* 
동작의 종류 : click, dbclick, scroll, change, submit, ...
- addEventListener(동작의 종류, function(){})
- <태그 onchange="함수의 이름()" onclick="함수의 이름"><태그>
  on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')

// btn1.addEventListener("동작의 이름", function(){동작})
btn1.addEventListener("click", function(){
    console.log('버튼1이 클릭 되었습니다!!')
    alert('버튼1 클릭 했습니다!')
})

btn1.addEventListener("mouseover", function(){
    // btn1.style.backgroundColor = "aqua"
    // this는 자기 자신을 가리킴
    this.style.backgroundColor = "aqua"
})

// btn2 클릭 시, div를 자식으로 붙이기
const container = document.getElementById('container')
btn2.addEventListener("click", () => {
    let div = document.createElement('div')
    div.innerText = 'hi'
    div.style.backgroundColor = 'pink'

    container.append(div)
})

// btn3 클릭 시, 만들어진 div의 배경색 변경
// 함수 호출 시 중괄호 필수적으로 생략해야함, 괄호 작성 시 즉시 호출
btn3.addEventListener('click', changeColor)

function changeColor() {
    const divs = document.querySelectorAll('#container > div')
    for(let div of divs) {
        div.style.backgroundColor = 'skyblue'
    }

    // 막내 요소만 노란색으로 변경
    if (divs.length > 0) {
        divs[divs.length - 1].style.backgroundColor = 'yellow';
    }
}

// btn4 배경색 노란색으로 변경, 글자색 검정으로 변경
btn4.addEventListener('click', changeBtnColor)

function changeBtnColor() {
    this.style.backgroundColor = "yellow"
    this.style.color = 'black'
}

// btn5 alert창 띄우기
sayHi = () => {
    alert('안녕!')
}

// =========================================================

let btn = document.querySelector('button')
let input = document.querySelector('input')

/* 1. [클릭 이벤트] */
btn.addEventListener('click', function(e){
    // 클릭 이벤트에 관한 정보 (event 객체)
    console.log(e)

    // 어떤 요소가 클릭 되었는 지 확인 가능
    console.log(e.target)
})

// =========================================================

/* 2. [키보드 이벤트] */
//console.log(input)
input.addEventListener('keydown', function(e){
    console.log(e)

    // 방향키 아래, 위, 왼쪽, 오른쪽
    // console.log(e.code)
    // console.log(e.key)
    // console.log(e.keyCode)
    if(e.code === "ArrowLeft") {
        console.log('왼쪽 방향키')
    } else if(e.code === "ArrowRight") {
        console.log('오른쪽 방향키')
    } else if(e.code === "ArrowUp") {
        console.log('위쪽 방향키')
    } else if(e.code === "ArrowDown") {
        console.log('아래쪽 방향키')
    } else {
        console.log('방향키 X')
    }
})

// =========================================================

/* 3. [scroll 이벤트] */
//console.log(window)

window.addEventListener('scroll', (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(scrollY)

    // scrollY가 606에서 div opacity가 1이 되도록
    if(scrollY > 606) {
        document.querySelector('.pos').style.opacity="1"
    }
})

// =========================================================

/* 4. [submit 이벤트] */ // 폼 이벤트
let form = document.querySelector('form')
let ul = document.querySelector('.todos')
// console.log(form)
// console.log(ul)

form.addEventListener('submit', (e)=> {
    // form이 제출되는 것을 취소, 이벤트 전달을 막는 방법
    // 새로 고침 막음
    e.preventDefault();
    console.log('submit')

    const todoInput = document.querySelector('input[name="todo"]')
    // 요소가 가지고 있는 데이터를 출력
    console.dir(todoInput)
    // console.log(todoInput.value)

    const todo = todoInput.value.trim()

    // 공백으로 들어오는 문자는 추가되지 않도록!
    // 선택된 ul 태그의 자식으로 <li>todo<li>
    if(todo !== "") {
        let li = document.createElement('li') 
        li.textContent = todo
        ul.append(li)
    } else {
        alert("문자를 작성해주세요!")
    }

    todoInput.value=''
})

// =========================================================

/* 5. [change 이벤트] */
const cngInput = document.querySelector('#change-input')
cngInput.addEventListener('change', function() {
    console.log('changed!!')
})

/* 화살표 함수는 **this**를 자신의 상위 스코프에서 참조하게 되므로, 
    이벤트 리스너 내부의 this가 input 요소를 가리키지 X,
    익명 함수를 써주거나 this를 사용 X */

cngInput.addEventListener('input', (e) => {
    // input 창의 value에 변경이 발생 되면 일어나는 이벤트
    console.log('changing!')

    let intro = document.querySelector('.intro')
    intro.innerHTML = cngInput.value
})
