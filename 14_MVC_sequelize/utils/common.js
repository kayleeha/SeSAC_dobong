// js docs
/**
 * 서버 에러가 났을 때 실행될 코드 모음
 * @param {Response} res 실제 에러 전달
 * @param {Error} e 실제 에러 전달
 * @param {string} eMsgInServer 서버 콘솔에 띄어 줄 메세지
 * @param {string} eMsgInClient 클라이언트에게 보내줄 메세지
 * @param {number} statusCode 에러의 상태 코드
 */
exports.errorlogs = (
  res,
  e,
  eMsgInServer = "ERROR",
  eMsgInClient = "Internal Server Error",
  statusCode = 500
) => {
  console.log(eMsgInServer, e);
  res.status(statusCode).send(eMsgInClient);
};
