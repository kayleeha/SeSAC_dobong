const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    // console.log(req) // 요청 객체 정보

    console.log('url: ', req.url)

    // response
    // res.write('<p>응답1</p>')
    // res.write('<p>응답2</p>')
    // res.write('<p>응답3</p>')
    // res.end('<h3>응답 종료</h3>')
    
    try{
        // try문
        // 실행 코드
        const data = fs.readFileSync('./index.html')
        res.writeHead(200, {"content-type":"text/html; charset=utf-8"})
        res.end(data)
    }
    catch(e){
        // try문에서 어떤 에러가 발생되었는 지 error 객체를 넘겨줌 (생략 가능)
        // try문에서 에러가 났을 때 실행될 코드
        console.log(e)
        res.writeHead(404, {"content-type":"text/html; charset=utf-8"})

        // 404.html을 만들고
        // 파일 이름 읽을 때 오타가 났을 때 404 페이지 보여주기
        // res.end('<h1>page not found</h1>')
        const data_404 = fs.readFileSync('./error_404.html')
        res.end(data_404)
    }
})

const PORT = 8080

// 서버 이벤트 - connection, request
server.on('connection', function(req, res) {
    console.log('connection event 발생')
})
server.on('request', function(req, res){
    console.log('request event 발생')
})

// 포트 열기
server.listen(PORT, function() {
    console.log(`server listening on ${PORT}`)
})