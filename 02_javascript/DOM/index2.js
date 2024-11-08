/* 1. 태그 내부 내용 */
/* 
- innerText - 2칸 이상의 공백 문자 제거, 앞뒤로 공백 문자 제거
- textContent - 공백 적용됨
- innerHTML
*/

let div1 = document.getElementById('div1')
div1.innerText = '     여기는 <b>첫번째<b> 태그입니다. &hearts;      /'
console.log(div1.innerText)

div1.innerHTML = '여기는 <b>첫번째<b> 태그입니다. &hearts;'

div1.textContent = '     여기는 <b>첫번째<b> 태그입니다. &hearts;      /'
console.log(div1.textContent)

/* 2. 속성에 접근 */
/* 
- 요소.속성명
- getAttribute() : 속성값 가져오기
- setAttribute() : 속성값 설정하기 
*/

// pooh, naver 아이디
let naver = document.getElementById('naver')
// let naver = document.querySelector('#naver')
console.log(naver)
// naver.setAttribute("속성 이름", "바꿔줄 속성값")
naver.setAttribute("href", "https://www.google.com")
naver.textContent = "구글로 이동";
console.log(naver.href)
console.log(naver.getAttribute("href"))

console.log(document.querySelector('#pooh').src)
console.log(document.querySelector('#pooh').alt = "푸사진")

/* 3. CSS 변경 */
let h1 = document.querySelector('h1')
let list = document.querySelectorAll('li')
// console.log(h1)
// console.log(list)

// 배경색을 분홍색, 글자색 흰색, 글씨 크기 1.3rem
for(let el of list) {
    // el.style.color = "white"
    // el.style.backgroundColor = "pink"
    // el.style.fontSize = "1.3rem"
    el.classList.add('friends')
}

h1.classList.add('add-h1') // 클래스 추가
console.log(h1.classList)
h1.classList.remove('add-h1') // 클래스 제거
console.log(h1.classList)
h1.classList.toggle('add-h1') // 클래스가 있으면 제거, 없으면 추가
console.log(h1.classList) // 선택된 요소의 클래스 목록 확인

// 클래스가 있는 지 없는 지 확인, true, false "반환"
console.log(h1.classList.contains('add-h1'))

/* 4. 부모, 자식, 형제 노드 찾기 */
let friends = document.querySelector('#friends')
let tigger = document.getElementById('tigger')
// console.log(friends)
// console.log(tigger)

console.log('--- 자식 노드 접근 ---')
// 배열 형태로 가져옴
console.log(friends.children)
console.log(friends.children[0])

console.log('--- 부모 노드 접근 ---')
// 배열 형태가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode)

console.log('--- 형제 노드 접근 ---')
// 배열 형태가 아닌 요소 자체를 가져옴
console.log('이전 형제:', tigger.previousElementSibling)
console.log('다음 형제:', tigger.nextElementSibling)

/* 5. 노드를 생성, 추가, 삭제 */
let container = document.querySelector('.container')
// console.log(container)

// 요소 생성
let p = document.createElement('p')
p.innerText = "새로 추가된 p"
p.style.fontWeight = "700"
p.style.background = "red"
p.id = "append-p"

// 요소 추가
console.log(p)
// 선택된 요소(container)의 맨 뒤 자식 요소로 추가됨
container.append(p)

let p2 = document.createElement('p') 
let p3 = document.createElement('p')

// 각 p2, p3에 글자 요소 추가, 클래스 (p-2, p-3) 추가
p2.innerText = "p2"
p3.innerText = "p3"

p2.classList.add('p-2') // 클래스 추가
console.log(p2.classList)

p3.classList.add('p-3') // 클래스 추가
console.log(p3.classList)

// append는 여러개를 한 번에 추가할 수 있음 (권장)
container.append(p2)
container.append(p3)
container.append(p2, p3, "안녕하세요!")

container.appendChild(p2)

// prepend() : 선택된 요소의 맨 앞 자식으로 추가됨
// let friends = document.querySelector('#friends')
// li 태그를 만들고, "캉가", friends 클래스 추가

let li = document.createElement('li')
li.innerText = "캉가"
li.classList.add('friends')

friends.prepend(li)

// console.log(h1)
// before()
let h2 = document.createElement('h2')
h2.innerText = "h2"
h1.before(h2)

// after()
let h3 = document.createElement('h3')
h3.innerText = "h3"
h1.after(h3)

/* 요소 삭제 > remove(), removeChild() */
let firstLi = document.querySelector('li')
// console.log(firstLi)
let ul = firstLi.parentNode
// console.log(ul)

// 삭제할 요소.remove
//firstLi.remove() // 선택된 요소가 삭제

// 부모 요소.removeChild(삭제할 자식 요소)
ul.removeChild(firstLi)

// 실습
let div = document.createElement('div')
let img = document.createElement('img')
let span = document.createElement('span')

img.setAttribute("src", "./img/zoom.png")
img.setAttribute("alt", "puppy")
span.innerText = "강아지"

div.append(img)
div.append(span)
console.log(div)

container.append(div)
