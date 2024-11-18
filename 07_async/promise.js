function goMart() {
  console.log("마트에 갑니다!");
}

function pickDrink(callback) {
  return new Promise(function (resolve, reject) {
    // 3초 동안 고민하는 함수
    setTimeout(function () {
      console.log("고민 끝~!");
      product = "콜라";
      price = 1500;
      // resolve("구매 완료!"); // then의 콜백의 인자로 전달
      reject("구매 실패!");
    }, 3000);
  });
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

// 실행 함수
function exec() {
  goMart();
  pickDrink()
    .then((res) => {
      // pickDrink가 끝나고 나서 실행되는 작업
      pay();
      // result는 resolve로 전달된 값
      console.log("res", res);
    })
    // reject로 전달된 값
    .catch((e) => {
      console.log("e", e);
    })
    .finally(() => {
      console.log("집으로 돌아갑니다!");
    });
}

let price, product;
exec();
