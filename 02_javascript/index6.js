// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon"
let str2 = "   Strawberry Moon  "

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0] + str1[11])

// Sonny 단어 만들기
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9])

// length 공백 포함 - 함수 아님
console.log(str1.length)
console.log(str2.length)

/* 메서드 사용해보기 */
// trim, toLowerCase, toUpperCase
// 문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim())
console.log(str2.trim().length)

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, chatAt, slice
let fruit = "applemango"
// indexOf : 내가 찾고 싶은 문자열의 인덱스 번호 반환
console.log(fruit.indexOf("e"))
console.log(fruit.indexOf("a"))
console.log(fruit.indexOf("apple")) // 0
console.log(fruit.indexOf("mango")) // 5
// 없는 문자열을 찾으려고 하면, -1 반환
console.log(fruit.indexOf("z")) // -1 

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10)) // ''

console.log(fruit.slice(5)) // mango
console.log(fruit.slice(3, 6)) // lem
console.log(fruit.slice(-1)) // o
console.log(fruit.slice(-4)) // ango

// replace, replaceAll
let msg1 = "Wow~ It is so amazing!!! Wow~"
console.log(msg1.replace("Wow", "Hey~~~"))
console.log(msg1.replaceAll("o", "OO"))
console.log(msg1)

let date = "2024.11.06"
// YYYY - MM - DD
console.log(date.replaceAll(".", "-"))

let hello = "hello"
console.log(typeof hello)

let hello2 = hello.split()
console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2 = hello.split('e')
console.log(hello2)
console.log(typeof hello2)

// ['2024', '11, '06]
console.log(date.split('.'))

// ------------------ 배열 ------------------

console.log('------------- array method -------------')

let arr1 = [1, 2, 3, 4, 5]
let arr2 = ["quakka", "rabbit", "puppy", "hamster"]

arr1[5] = 6
arr1[8] = 8
console.log(arr1)

arr1 = [1, 2, 3, 4, 5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) // 반환값이 있으면 console에 찍힘!! 제거하는 값 반환
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) // 제거하는 값 반환
console.log(arr2)

// 배열.includes(요소) : 배열에 요소가 있는 지 없는 지 확인
console.log(arr2.includes("cat"))
console.log(arr2.includes("quakka"))

arr1 = [1, 2, 3, 4, 5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) // 4라는 요소가 몇 번 인덱스에 있는 지 확인

// reverse(), 순서 뒤집기
arr1.reverse() // 기존 배열 변경됨
console.log(arr1)

// join(''), 배열 > 문자열로 병합
str1 = arr1.join()
// join의 인자로 아무것도 전달이 되지 않으면 배열 안의 컴마까지 같이 문자열로 반환됨
console.log(str1) 
str1 = arr1.join('')
console.log(str1)

// for of, forEach
let arr3 = [1, 5, 3, 4, 5]
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f']

// 기본 for문
for(let i=0; i < arr3.length; i++) {
    console.log(arr3[i])
}

// for of문 - el은 변수이며 배열의 요소에 접근할 수 있음
for(let el of arr3) {
    console.log(el)
}

// forEach(익명 함수) : forEach 자체가 함수임
// forEach(function(a, [b, c]))
arr3.forEach(function(num, i, arr){
    console.log("요소", num) 
    console.log("배열의 인덱스", i)
    console.log("arr3", arr)
    console.log("----------------")
}) 

arr3.forEach((el) => {
    console.log(el)
})

arr2 = ["quakka", "rabbit", "puppy", "hamster"]
// filter, map, find
// 매개변수로 들어가는 함수에 리턴값이 필수
console.log('------------- filter -------------')

// return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
// filter는 배열을 반환함
let six = arr2.filter(function(el) {
    return el.length === 6
})
console.log(six)

console.log('------------- find -------------')
// find는 값을 반환함, 하나만 반환
let six2 = arr2.find(function(word) {
    return word.length === 6
})

console.log(six2)

console.log('------------- map -------------')
let arr4 = [1, 2, 3, 4, 5]
let multiArr = arr4.map(function(num){
    return num * 3
})

// 화살표 함수 - 중괄호 생략 가능, return을 명식적으로 쓰지 않음, 화살표 함수 자체가 이미 리턴해줌
arr4 = [1, 2, 3, 4, 5]
multiArr = arr4.map((num) => num * 3)

console.log(multiArr)

// object 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

for (let area in areaNum) {
    console.log(area) // key
    // 값에 접근
    console.log(areaNum[area])
}