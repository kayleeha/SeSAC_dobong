console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

// click(): 클릭 했을 때
// jQuery에서는 이벤트 이름으로 메서드가 존재함
// 요소.click(function() {}), 요소.hover(function() {}, function() {})
$('.p-msg').click(function() {
    $('.p-msg').css('color', 'red')
})

$('.num').click(function() {
    $('.num').css('color', 'blue') // 전체가 변경
    $(this).css('color', 'green') // 자기 자신을 가리키므로 하나만 변경
})

$('.num').on('click', function() {
    $(this).css('color', 'pink')
})

// in js (19~21 라인까지의 동작과 동일) 
let li = document.querySelectorAll('li')
for(let i=0; i<li.length; i++) {
    li[i].addEventListener('click', function() {
        this.style.color = 'pink'
    })
}

// hover(): 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(function() {
        $(this).addClass('hover')
    }, 
    function() {
        $(this).removeClass('hover')
}) 

$(window).scroll(function() {
    console.log('scrolling..')
})

/* [키보드 이벤트] */

// input.addEventListener('keydown', function(e){
//     console.log(e)

//     if(e.code === "ArrowLeft") {
//         console.log('왼쪽 방향키')
//     } else if(e.code === "ArrowRight") {
//         console.log('오른쪽 방향키')
//     } else if(e.code === "ArrowUp") {
//         console.log('위쪽 방향키')
//     } else if(e.code === "ArrowDown") {
//         console.log('아래쪽 방향키')
//     } else {
//         console.log('방향키 X')
//     }
// })

$('.input-key').keydown(function(e) {
    if(e.code === "ArrowLeft") {
        console.log('왼쪽 방향키')
    } else if(e.code === "ArrowRight") {
        console.log('오른쪽 방향키')
    } else if(e.code === "ArrowUp") {
        console.log('위쪽 방향키')
    } else if(e.code === "ArrowDown") {
        console.log('아래쪽 방향키')
    } else {
        console.log('방향키 X')
    }
})

$('#todo-form').submit(function(e){
    // 기본 동작 막기 (새로고침 방지)
    e.preventDefault();

    // input 태그에 작성한 글자 가져오기
    let text = $('input[name="todo"]').val()

    // li 태그를 만듦과 동시에 form 아래의 ul 태그에 붙여넣기
    $('.todos').append(`<li>${text}</li>`)
    
    // input 초기화
    $('input[name="todo"]').val('')
})
