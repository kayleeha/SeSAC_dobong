// module1.js의 모든 데이터 객체 형태로 가져오기
const module1 = require('./module_03_01.js')
console.log(module1)

// 가지고 오고 싶은 데이터만 가져오기(객체 구조 분해 할당)
const {colors} = require('./module_03_01.js')
console.log(colors)

// 가져오는 방식은 같음!
const module2 = require('./module_03_02.js')
console.log(module2)

const{name, sayHi} = require('./module_03_01.js')
console.log(name)
sayHi()