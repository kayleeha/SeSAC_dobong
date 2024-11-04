/* alt + shift + a */

/* 
자료형의 종류
- string(문자열), number(숫자), boolean, null, undefined
- object(객체), array(배열)
*/

// 1. string
let myName = 'lim'
let email = '[lim@naver.com]'

console.log(myName)
console.log(email)

// 문자와 변수를 동시에 써보기
console.log('내 이름은', myName)
console.log('내 이름은' + myName)

let aaa = '내 이름은 ' + myName + '이고, 이메일은 ' + email + '입니다.'
console.log(aaa)
// let bbb = '내 이름은', myName

let ccc = `내 이름은 ${myName}이고, 이메일은 ${email}입니다.`
console.log(ccc)

// 2. number
let number = 123
let opacity = 0.7
console.log(number)
console.log(opacity)

console.log(number + opacity)

console.log("apple" - 3) // NaN(Not a Number)

// 3. boolean
// true, false 둘 중의 하나의 값
let checked = true
let isShow = false

console.log(checked)
console.log(isShow)

// 4. undefined
// 값이 없는 상태, 실수에 가까움..넣어야 하는 값을 안 넣은 것, 타입 없음
let undef;
let obj = {
    abc:123
}
console.log(undef)
console.log(obj.abc)
console.log(obj.dfe)

// 5. null 
// 빈 값, 타입이 있다. 일부러 값을 안넣음
let empty = null;
console.log(empty)

// 6. array, 배열
let fruits = ['orange', 'apple', 'banana', 'peach']
let fruits2 = new Array('orange', 'apple', 'banana', 'peach')

console.log(fruits[3])
console.log(fruits2[1])

// 여러 데이터 타입을 한 번에 넣을 수 있음
let data = [1, true, null, "string", 100]
console.log(data[0], data[4])

// 2차원 배열
let korean = [['가', '갸', '거', '겨'], 
            ['나', '냐', '너', '녀'], 
            ['다', '댜', '더', '뎌']]

console.log(korean[2][0])

// 과제
const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

console.log(letters[3][0] + letters[1][3] + 
    letters[0][1] + letters[0][3] + letters[2][2])

const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums[1][0][1])

// 7. object 타입
// key:value 쌍으로 이루어져 있음
let cat = {
    name:'나비',
    age:1,
    gender:'F',
    isCute:true
}

console.log(cat.name)
console.log(cat.isCute)
cat.like = ['tuna', 'mouse']
console.log(cat)

// 접근 방법2 - 대괄호 접근법
console.log(cat['name'])
cat['parent'] = '초롱이'
console.log(cat)

// 자료형 확인 type of
console.log('-----------')
let und;
console.log(typeof "문자")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof {}) // object
console.log(typeof [true]) // object
console.log(typeof null) // object
console.log(typeof und) // object
console.log(typeof NaN) // number
console.log(typeof function(){}) // function


// 실습
// "number" isn't "string" data type.
// typeof를 array 이나 null에 사용하면, "object" 결과를 얻을 수 있습니다.
let num = 1
let str = "str"
let obj1 = null
let type = `"${typeof num}" isn't "${typeof str}" data type.`
console.log(type)

let type2 = `typeof를 array 이나 null에 사용하면, "${typeof obj1}" 결과를 얻을 수 있습니다.`
console.log(type2)

// 형 변환
console.log('-----------------------')
// 1. ?? >> string
let str1 = true
let str2 = 123
let str3 = null
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))
console.log(typeof str1.toString())

// 2. ?? >> number
let n1 = true
let n1_1 = false
let n2 = "123"
let n3 = "123.4"
console.log(typeof Number(n1)) // true > 1
console.log(typeof Number(n1_1)) // false > 0
console.log(typeof Number(n2))
console.log(typeof Number(n3))
console.log(parseInt(n2))
console.log(parseInt(n3)) // "123.4" > 123 (소수점 버림)
console.log(parseInt(3.14))

// prompt는 입력값을 문자열로 인식함
let english = prompt("영어 점수를 입력해주세요.")
let math = prompt("수학 점수를 입력해주세요.")

english = Number(english)
math = Number(math)

let average = (english + math) / 2
console.log(average)

// 변수
// 1. var - 재선언, 재할당 가능 (재선언이 가능한 부분 때문에 사용 지양)
var name = "홍길동"
name = "gildong" // 재할당 가능

var name = "성춘향" // 재선언 가능

// 2. let - 재할당 가능, 재선언 불가
let c; // 선언과 값의 초기화를 동시에 하지 않아도 됨
console.log('------------------')
console.log(c) // undefined
c = 5 // 재할당 가능
c = 10
console.log(c)
// let c = 123 재선언 불가

// 3. const - 재할당, 재선언 불가, 선언과 값의 초기화를 반드시 동시에 해주어야 함
// const b; 선언과 동시에 초기화 되어야 함
const b = 3
// const b = 5 재선언 불가
// b = 5 재할당 불가
console.log(b)

let a1 = 5
a1 - 1
console.log(a1) // 5

let a2 = 10
a2 = a2 + 10
a2 = a2 - 5
console.log(a2) // 15

console.log('=== 연산자 ===')
/**
 * 연산자
 * 대입 연산자 = 
 * 비교 연산자 == === != !== > >= < =
 * 산술 연산자 + - * / % **
 * 논리 연산자 ! && || 
 */

// 비교 연산자
// 비교 연산자의 결과값은 true나 false
// == === != !== > >= < =
console.log(1 == 1)
console.log(1 == 2)
console.log(1 != 1)
console.log(1 != 2)
console.log(1 == '1')
console.log(1 != '1')
console.log(1 == '2')

console.log('--- ( === 비교) ---')
console.log(1 === 1)
console.log(1 === 2)
console.log(1 !== 1)
console.log(1 !== 2)
console.log(1 === '1')
console.log(1 !== '1')
console.log(1 === '2')

console.log('--- 크기 비교 ---')
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)

console.log('--- 산술 연산자 ---')
console.log(1 + 2)
console.log(1 - 2)
console.log(1 * 2)
console.log(1 / 2) // 소수점까지 나옴
// 나머지 연산자
console.log(8 % 5)
// 거듭 제곱
console.log(2 ** 5)

// 논리 연산자
// ! && || 
console.log(true)
console.log(false)
console.log(!true)
console.log(!false)
console.log(!!false) // true
console.log(true && true) // true
console.log(true && false) // false (false인 확률이 높은 걸 앞에 써주는 것이 성능에 좋음)
console.log(false && false) // false
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true (true인 확률이 높은 걸 앞에 써주는 것이 성능에 좋음)
console.log(false || false) // false

console.log(!(2 > 1)) // false
console.log(2 > 1 && -2 < 1) // true
console.log((2 > 1 && 0 > -2) || 5 < 2 ) // true

console.log('------------')
// = 연산자 이용
console.log("0" == false) // true
console.log("0" == 0) // true
console.log("" == 0) // true
console.log(undefined == null) // true
console.log(0 == false) // true

console.log("" == "0") // false
console.log(false == undefined) // false
console.log(false == null) // false

console.log('-----------')
console.log("0" === false) // false
console.log("0" === 0) // false
console.log("" === 0) // false
console.log(undefined === null) // false
console.log(0 === false) // false