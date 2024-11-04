/**
 * for문
 * for(변수 선언과 초기화; 조건식(어디까지 감소, 증가); 증감){
 *  반복 실행 코드
 * }
 */

// 증감식: i++, i=i+1, i+=1

for(let i=0; i < 10; i++) {
    console.log('안녕', i)
}

for(let i=0; i < 10; i+=2) {
    console.log(`안녕 ${i}`)
}

// 1 ~ 5까지 출력하는 방법
for(let i=1; i<=5; i++){
    console.log(i)
}

for(let i=1; i<6; i++){
    console.log(i)
}

for(let i=0; i<5; i++){
    console.log(i+1)
}

// 5 ~ 1 출력
for(let i=5; i>0; i--){
    console.log(i)
}

let fruits = ['apple', 'banana', 'orange', 'mango']

for(i=0; i<fruits.length; i++) { // i = 0 으로 초기화 하는 이유는 배열의 인덱스가 0부터 시작하기 때문
    console.log(fruits[i])
}

// quiz
// 1부터 n까지 더하기!
let n = 11

let sum = 0
for(i=0; i<= n; i++){
    sum += i
}
console.log(sum)

// 배열 내부의 합 구하기
let arr = [99, 98, 85, 77, 100, 50]

let sum1 = 0
for(let i=0; i<arr.length; i++){
    sum1 += arr[i]
}

console.log(sum1)

// 1 이상 20 이하의 수 중에서 짝수만 더한 값 출력
let sum2 = 0
for(let i=1; i<=20; i++) {
    if(i % 2 === 0)
    sum2 += i
}

console.log(sum2)

let sum3 = 0
for(let i=0; i<=20; i=i+2){
    sum3 += i
}

console.log(sum3)