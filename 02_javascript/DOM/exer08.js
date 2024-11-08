// TODO: practice14_설명.png 이미지의 조건을 만족하는 js 코드 작성
// writeNote() 함수를 미리 정의해두었습니다.

let writer = document.querySelector('#writer')
let content = document.querySelector('#content')
let table = document.querySelector('table')

// [등록] 버튼 클릭시 writeNote() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.

let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()

if(date < 10) {
    date = '0' + date;
}

let hour = now.getHours()
let minute = now.getMinutes()

function writeNote() {
    if(writer.value != '' && content.value != '') {
        let tr1 = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')

        td1.textContent = writer.value
        td2.textContent = content.value
        td3.textContent = `${year}-${month}-${date} ${hour}:${minute}`
        tr1.append(td1, td2, td3)
        table.append(tr1)       
    } else {
        alert("작성자와 내용 모두 작성해주세요!")
    }

    writer.value = ''
    content.value = ''
}