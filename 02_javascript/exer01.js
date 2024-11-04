// let age = Number(prompt('나이를 입력해주세요!'));
// if(age >= 20) {
//     console.log('성인')
// } else if(age >= 17) {
//     console.log('고등학생')
// } else if(age >= 14) {
//     console.log('중학생')
// } else if(age >= 8) {
//     console.log('초등학생')
// } else {
//     console.log('유아')
// }

let now = new Date().getHours;

now >= 0 || now <= 12 ? console.log('오전') : console.log('오후')

let age = Number(prompt('10000까지의 숫자를 입력해주세요!'));

let arr = []
for(let i=0; i<=age; i++){
    if((i % 2 === 1) && (i % 13 === 0)) {
        arr.push(i)
    }
}

console.log(arr)

let sum = 0
for(let i=0; i<=100; i++){
    if((i % 2 === 0 || i % 5 === 0)) {
        sum += i
    }
}

console.log(sum)

for(i=2; i<=9; i++){
    console.log(`--- ${i}단 ---`)
    for(j=1; j<=9; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}