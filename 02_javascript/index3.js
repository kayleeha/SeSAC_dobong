/**
 * 함수
 *  - 특정 작업을 수행하기 위해 설계된 코드 집합
 *  - 함수의 선언 구조
 *  - 키워드 : function
 *  - 함수의 이름 : camelCase로 함수의 이름 작성
 *  - (매개변수) : 함수 내부에서 사용할 변수
 *  - {scope} : 함수의 내부 코드
 * 함수 선언문, 함수 표현식
 *  - 함수 표현식 : 변수에 함수를 저장 (호이스팅 X)
 *  - 함수 선언문 : 명시적 함수 선언 (호이스팅 O)
 *  - 화살표 함수 : 호이스팅 X
 */

// 함수 선언문
helloWorld1()
console.log('선언되기 전')

function helloWorld1() {
    console.log('hello world 1')
}

helloWorld1()

function helloWorld2() {
    // return 키워드
    // 함수 내부 코드의 최종 결과값을 보관하기 위한 키워드
    return 'hello world 2'
    console.log('리턴 아래입니다..')
}

console.log(helloWorld2())

// 함수 표현식
// helloWorld3() 호이스팅 불가, 오류

const helloWorld3 = function () {
    console.log('hello world 3')
}

helloWorld3()

// 화살표 함수
// helloWorld4() 호이스팅 불가, 오류
const helloWorld4 = () => {
    console.log('hello world 4')
}

helloWorld4()

// 매개변수 있는 함수 만들기
// 1. 매개변수 1개, 함수 선언문
function sayHello1(text) {
    return text
}

console.log(sayHello1("안녕!"))

// 2. 매개변수 2개, 함수 선언문
function sayHello2(text, name) {
    return `${text}! ${name}`
}

console.log(sayHello2("hi", "jason"))

// 3. 매개변수 2개, 함수 표현식
// 내부 스코프 console.log로 작성

const sayHello3 = function (text, name) {
    console.log(`${text}! ${name}`)
}

sayHello3("hi", "jason")

// 4. 매개변수 2개, 화살표 함수
const sayHello4 = (text, name) => {
    return `${text}! ${name}`
}

//console.log(sayHello4("hi", "jason"))

const sayHelloValue = sayHello4("hi", "jason")
console.log(sayHelloValue)

console.log("---------")

// 실습1

function multifly(n1, n2) {
    return n1 * n2
}

console.log(multifly(3, 7))
console.log(multifly(2, 2))

// 실습2
const square = function(num) {
    console.log(num ** 2)
}

square(4)
square(11)
square(5)

