const crypto = require("crypto");
/* 
1. crypto를 통해 단방향 암호화 구현 > 복호화 불가능
- createHash (알고리즘)
- pdkdf2sync (비밀번호, 솔트, 반복 횟수, 키의 길이, 알고리즘)
*/

// 1-1) createHash (알고리즘).update (평문).digest (인코딩 방식)
// 인코딩 방식 : base64, hex, ascii, binary
// digest : 암호화 된 문장을 우리가 읽을 수 있는 문자열로 인코딩 하는 것

const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log(createHashPW("1234"));
console.log(createHashPW("1234"));
console.log(createHashPW("1234")); // 전부 같은 값
console.log(createHashPW("1234.")); // 조금만 변해도 전혀 다른 해시값이 나옴

// 1-2) pdkdf2sync (비밀번호, 솔트, 반복 횟수, 키의 길이, 알고리즘).toString (인코딩 방식)

function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) // buffer 객체를 return 하는 중
    .toString("base64");
  return { salt, hash };
} // DB에 salt와 hash 모두 저장해야 함

console.log("pdkdf2sync >> ", saltAndHashPW("1234"));
console.log("pdkdf2sync >> ", saltAndHashPW("1234"));
console.log("pdkdf2sync >> ", saltAndHashPW("1234"));

// 암호 비교 함수
function checkPW(inputPW, savedSalt, savedHash) {
  const iterations = 100; // 반복 횐수 saltAndHashPW와 같아야 함
  const keylen = 64; // saltAndHashPW와 같아야 함
  const algorithm = "sha512"; // saltAndHashPW와 같아야 함

  // pdkdf2sync의 모든 인자가 똑같다면 해시값도 같다.
  const hash = crypto
    .pbkdf2Sync(inputPW, savedSalt, iterations, keylen, algorithm)
    .toString("base64");

  return hash === savedHash;
}

const realPW = "qwer1234";
console.log("============================================");
const data = saltAndHashPW(realPW);
console.log(data);
const { salt: DBsalt, hash: DBhash } = data;
console.log("================= 비밀 번호 일치 여부 확인 ====================");
const isMatch = checkPW("qwer1234!", DBsalt, DBhash);
const isMatch2 = checkPW("qwer1234", DBsalt, DBhash);
console.log(isMatch); // false, 비밀번호 불일치
console.log(isMatch2); // true, 비밀번호 일치

// ========================================================
/* 
2. 양방향 알고리즘
- creqteCipheriv : 암호화
- creqteDecipheriv : 복호화 
*/

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const algorithm = "aes-256-cbc";
const originalMessage = "hello, world"; // 원본 메세지, 평문

// 암호화
function encrypt(text) {
  // 1. 암호화 객체 생성
  //   const cipher = crypto.createCipheriv(algorithm, key, iv);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // 2. 실제 데이터 암호화
  //let encrypted = cipher.update(평문, 입력 인코딩, 출력 인코딩);
  let encrypted = cipher.update(text, "utf-8", "base64");

  // 3. 최종 결과 생성
  encrypted += cipher.final("base64");

  return encrypted;
}
console.log(encrypt(originalMessage));
console.log(encrypt(originalMessage));

// 복호화
function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // 2. 실제 데이터 복호화
  // base64 방식으로 인코딩된 문자열이 utf8로 복호화됨
  let decrypted = decipher.update(encryptedText, "base64", "utf8");

  // 3. 최종 결과 생성
  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log("암호화된 문장", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화된 문장", decryptedMessage);