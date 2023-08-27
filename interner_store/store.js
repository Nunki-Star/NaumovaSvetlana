const tomFordParfume = [
{"id":"card1",
"url":"https://valorya.by/wp-content/uploads/2021/02/375x500.34893-2.jpg",
"title":"TOM FORD SOLEIL BLANC",
"text":"Soleil Blanc Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные цветочные. Soleil Blanc выпущен в 2016 году. Парфюмер: Nathalie Gracia-Cetto. Верхние ноты: Фисташки, Бергамот, Кардамон и Розовый перец; средние ноты: Тубероза, Иланг-иланг и Жасмин; базовые ноты: Кокос, Амбра, Бобы тонка и Бензоин." 
},
{"id":"card2",
"url":"https://fraguru.com/mdimg/perfume/375x500.1825.jpg",
"title":"TOM FORD TOBACCO VANILLE",
"text":"Tobacco Vanille Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные пряные. Tobacco Vanille выпущен в 2007 году. Парфюмер: Olivier Gillotin. Верхние ноты: Лист табака и Пряности; средние ноты: Ваниль, Какао, Бобы тонка и Цветок табака; базовые ноты: Сухофрукты и Древесные ноты."
},
{"id":"card3",
"url":"https://fraguru.com/mdimg/perfume/375x500.46513.jpg",
"title":"TOM FORD FuCKING FABULOUS",
"text":"Fucking Fabulous Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе кожаные. Fucking Fabulous выпущен в 2017 году. Верхние ноты: Лаванда и Мускатный шалфей; средние ноты: Кожа, Горький миндаль, Ваниль и Корень ириса; базовые ноты: Кожа, Бобы тонка, Кашмеран, Светлое дерево и Амбра."
},
{"id":"card3",
"url":"",
"title":""
},
{"id":"",
"url":"",
"title":""
}

]
const app = document.getElementById("app");
let htmlTags = "";
tomFordParfume.forEach(item =>{
    htmlTags+=`
    <div class="card" style="width: 18rem;">
    <img src="${item.url}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.text}</p>
        <a href="#" class="btn btn-primary">place in the basket</a>
    </div>
    </div>`
})

app.innerHTML = htmlTags;


