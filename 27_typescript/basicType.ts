let num: number = 1;
num = 2;
// num = "ssss" // number형 변수에 string 타입을 할당하려고 하면 err
console.log(num);

let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array 선언
let numArr: number[] = [1, 2, 3, 10];
let strArr: Array<string> = ["a", "b", "c"];

let arr1: (number | string)[] = [1, 2, 3, "a", "b"];
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];

let arr3: any[] = [1, 2, "a", [], {}, null, true];

// object 선언
let obj1: object = {
  name: "aa",
};

// typescript는 알아서 타입 추론을 한다.
// 암묵적 타입 지정
let aa = 5; // aa를 선언하는 순간 암묵적으로 number 형으로 지정
let bb = "hello";

// aa = "hi" // err (숫자형에 문자열 대입 불가능)
