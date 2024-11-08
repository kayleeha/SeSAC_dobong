let val1 = document.querySelector('#value1')
let val2 = document.querySelector('#value2')
let op = document.querySelector('#operator')
let result = document.querySelector('#result')

// [계산] 버튼 클릭시 cal() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function cal() { 

    let rel = ''
    if(op.value === '+') {
        rel = Number(val1.value) + Number(val2.value)
    } else if(op.value === '-') {
        rel = Number(val1.value) - Number(val2.value)
    } else if(op.value === '*') {
        rel = Number(val1.value) * Number(val2.value)
    } else if(op.value === '/') {
        rel = Number(val1.value) / Number(val2.value)
    } else {
        alert('사용할 수 없는 연산자입니다!')
    }

    result.value = rel
}

// [초기화] 버튼 클릭시 resetInput() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function resetInput() { 
    val1.value = ''
    val2.value = ''
    op.value = ''
}