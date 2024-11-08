const section = document.querySelector("section");
const icecreams = [
    "내가 아인슈페너?!",
    "엄마는 외계인",
    "민트 초콜릿 칩",
    "뉴욕 치즈케이크",
    "아이스 초당옥수수",
    "초콜릿 무스",
    "체리쥬빌레",
    "뮤! 넌 내거야",
    "오레오 쿠키 앤 크림",
];

for(let i=0; i<icecreams.length; i++) {
    let article = document.createElement('article')
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let img = document.createElement('img')

    // article
    article.classList.add('article-box')

    // div
    div.classList.add('text-center')
    div.innerText = icecreams[i]

    // img
    img.classList.add('img-box')
    img.setAttribute("src", `./img/icecream${i+ 1}.png`)

    // h3
    h3.classList.add('text-center')
    h3.innerText = `Top${i+1}`

    article.append(div)
    article.append(img)
    article.append(h3)
    section.append(article)
}