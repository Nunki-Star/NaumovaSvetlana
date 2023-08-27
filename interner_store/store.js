const cosmetics = [
{"id":"card1",
"url":"",
"title":"lapraire"
},
{"id":"",
"url":"",
"title":""
},
{"id":"",
"url":"",
"title":""
},
{"id":"",
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
cosmetics.forEach(user =>{
    htmlTags+=`
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
})

app.innerHTML = htmlTags;


