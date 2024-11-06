arr = []
for(let i=1; i <=100; i++) {
    arr.push(i)
}
console.log(arr)

sum = 0
for(i=0; i<arr.length; i++){
    sum += arr[i]
}
console.log(sum)

sum1 = 0
for(let el of arr){
    sum1 += el;
}
console.log(sum1)

sum2 = 0
arr.forEach((el) => {
    return sum2 += el
});
console.log(sum2)

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

let same = []
let diff = []

for(let el of fruits1) {
    if(fruits2.includes(el)){
        same.push(el)
    }
    else{
        diff.push(el)
    }
}

console.log(same)
console.log(diff)

console.log(Math.floor(Math.random() * 11))

