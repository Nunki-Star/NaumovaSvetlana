const tomFordParfume = [
{"id":"card1",
"url":"https://valorya.by/wp-content/uploads/2021/02/375x500.34893-2.jpg",
"title":"TOM FORD SOLEIL BLANC",
"price":"200$",
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
{"id":"card4",
"url":"https://fraguru.com/mdimg/perfume/375x500.51411.jpg",
"title":"TOM FORD LOST CHERRY",
"text":"Lost Cherry Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные цветочные. Lost Cherry выпущен в 2018 году. Парфюмер: Louise Turner. Верхние ноты: Горький миндаль, Черная вишня и Cherry Liqueur; средние ноты: Вишня, Слива, Турецкая роза и Жасмин Самбак."
},
{"id":"card5",
"url":"https://fimgs.net/mdimg/perfume/375x500.62707.jpg",
"title":"TOM FORD BITTER PEACH",
"text":"Bitter Peach by Tom Ford is a Amber Vanilla fragrance for women and men. Bitter Peach was launched in 2020. Top notes are Peach, Blood Orange, Cardamom and Heliotrope; middle notes are Rum, Cognac, Davana and Jasmine; base notes are Indonesian Patchouli Leaf, Vanilla, Tonka Bean."
}

]






const parfume = [];
const add = () => {
    const brand = document.querySelector("[name='title']").value;
    //const model = document.querySelector("[name='model']").value;
    parfume.push({
        brand
        })
        render(parfume)
    }
     function render (item){
            const html = item.reduce(function(acc, item){;
            return acc+=`<div class="card" style="width: 18rem;">
            <img src="${item.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <a href="#" class="btn btn-primary">place in the basket</a>
            </div>
            </div>`
            }, "")
            //console.log(html);
            app.innerHTML = htmlTags;
        }
        


/*const cars = [];

        const add = () => {
            const brand = document.querySelector("[name='brand']").value;
            const model = document.querySelector("[name='model']").value;

            cars.push({
                brand, model
            })

            render()
        }
*/