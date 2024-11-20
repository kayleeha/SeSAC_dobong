// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// 콜백 함수 실행
call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (message) {
      console.log("여기는" + message);
    });
  });
});

// Promise
function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // cb 대신 resolve로 값 넘김
    }, 1000);
  });
}

function backPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  // reject 생략 가능
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// then ~ catch
callPromise("kim")
  .then((result) => {
    console.log(result + "반가워");
    return backPromise();
  })
  .then((txt) => {
    // txt = 이전 then의 return 값 = "back"
    console.log(txt + "를 실행했구나");
    return hellPromise();
  })
  .then((msg) => {
    console.log("여기는" + msg);
  });
