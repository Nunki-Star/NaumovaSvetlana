const tomFordParfume = [
{"id":"app",
"url":"https://valorya.by/wp-content/uploads/2021/02/375x500.34893-2.jpg",
"brand":"TOM FORD",
"model":"SOLEIL BLANC",
"text":"Soleil Blanc Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные цветочные. Soleil Blanc выпущен в 2016 году. Парфюмер: Nathalie Gracia-Cetto. Верхние ноты: Фисташки, Бергамот, Кардамон и Розовый перец; средние ноты: Тубероза, Иланг-иланг и Жасмин; базовые ноты: Кокос, Амбра, Бобы тонка и Бензоин.",
"price":"100"
},
{"id":"card2",
"url":"https://fraguru.com/mdimg/perfume/375x500.1825.jpg",
"brand":"TOM FORD",
"model":"TOBACCO VANILLE",
"text":"Tobacco Vanille Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные пряные. Tobacco Vanille выпущен в 2007 году. Парфюмер: Olivier Gillotin. Верхние ноты: Лист табака и Пряности; средние ноты: Ваниль, Какао, Бобы тонка и Цветок табака; базовые ноты: Сухофрукты и Древесные ноты.",
"price":"200"
},
{"id":"card3",
"url":"https://fraguru.com/mdimg/perfume/375x500.46513.jpg",
"brand":"TOM FORD",
"model":"SOLEIL FuCKING FABULOUS",
"text":"Fucking Fabulous Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе кожаные. Fucking Fabulous выпущен в 2017 году. Верхние ноты: Лаванда и Мускатный шалфей; средние ноты: Кожа, Горький миндаль, Ваниль и Корень ириса; базовые ноты: Кожа, Бобы тонка, Кашмеран, Светлое дерево и Амбра.",
"price":"300"
},
{"id":"card4",
"url":"https://fraguru.com/mdimg/perfume/375x500.51411.jpg",
"brand":"TOM FORD",
"model":"LOST CHERRY",
"text":"Lost Cherry Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные цветочные. Lost Cherry выпущен в 2018 году. Парфюмер: Louise Turner. Верхние ноты: Горький миндаль, Черная вишня и Cherry Liqueur; средние ноты: Вишня, Слива, Турецкая роза и Жасмин Самбак.",
"price":"400"

},
{"id":"card5",
"url":"https://fimgs.net/mdimg/perfume/375x500.62707.jpg",
"brand":"TOM FORD",
"model":"BITTER PEACH",
"text":"Bitter Peach by Tom Ford is a Amber Vanilla fragrance for women and men. Bitter Peach was launched in 2020. Top notes are Peach, Blood Orange, Cardamom and Heliotrope; middle notes are Rum, Cognac, Davana and Jasmine; base notes are Indonesian Patchouli Leaf, Vanilla, Tonka Bean.",
"price":"500"
}

]

const parfumeList = []; //empty arr
const app = document.getElementById("app"); //link to html app taken
//add button 
const add = () => {
    //variable link for title and model input 
    const brand = document.querySelector("[name='brand']").value;
    const model = document.querySelector("[name='model']").value;
    //adding brand and model to parfumelist
    parfumeList.push({
        brand, model
        })

        render(tomFordParfume)
}



function render(items){
       
        const html = items.reduce(function(acc, item){
        
            return acc+=`
        <div class="card" style="width: 18rem;">
            <img src="${item.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.brand}</h5>
                <h4 class="card-model">${item.model}</h4>
                <p class="card-text">${item.text}</p>
                <p class="card-price">${item.price}BYN</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>`
        }, "");
        console.log(html)

        app.innerHTML = html;
}

const parfumePrice = document.querySelector(".form_range");


let priceRange = {
    min: 100,
    max: 1000
};

let priceFiltered = menu.filter(function (tomFordParfume) {
    return tomFordParfume.price >= this.min && tomFordParfume.price <= this.mx;
}, priceRange);
  
console.log(priceFiltered);
    


