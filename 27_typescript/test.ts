// let olimpic_newgame: readonly [object, boolean];

// olimpic_newgame = [
//   {
//     name: "쇼트트랙",
//     type: "혼성 계주",
//   },
//   true,
// ];

// console.log(olimpic_newgame);

// interface Game {
//   title: string;
//   price: number;
//   desc?: string;
//   category: string;
//   isPassed?: boolean;
//   platform: string;
// }

// let heroGame_A: Game = {
//   title: "DC 언체인드",
//   price: 50000,
//   desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
//   category: "액션",
//   platform: "모바일",
// };

// let heroGame_B: Game = {
//   title: "MARVEL 퓨처파이트",
//   price: 65000,
//   category: "롤플레잉",
//   platform: "모바일",
// };

// function sum1(a: number, b: number): void {
//   console.log(a + b);
// }

// sum1(5, 11);

// function sum2(...numbers: Array<number>) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(sum2(1, 2, 3, 4, 10));

function arrElement<T>(x: T[], y: number): T | boolean {
  if (y < 0 || y >= x.length) {
    return false;
  }
  return x[y];
}

console.log(arrElement<string>(["a"], 0));
console.log(arrElement<string>(["a"], 1));
