const formDef1 = [
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {caption:'Опубликовать',kind:'submit'},
];

const formDef2 = [
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {caption:'Зарегистрироваться',kind:'submit'},
];


/*function createDynamicForms(first, second){

}*/


function createdDynamicForm(arr1, arr2){
formDef1.forEach(function(item){
  console.log(item);
  for(key in item){
    console.log(key+" znacheniye");
    console.log(item[key] + " key");
    if(key === "label"){
      const createdLabel = document.createElement("label");
      createdLabel.innerHTML = item[key];
      const getFirstForm = document.querySelector("#first");
      getFirstForm.appendChild(createdLabel);
      
    }
    if(item[key] === "longtext" || item[key]==="number" || item[key] ==="shorttext"){
      const createdInput = document.createElement("input");
      createdInput.innerHTML = item;
      const getFirstForm = document.querySelector("#first");
      getFirstForm.append(createdInput)
      const devider = document.createElement("br");
      getFirstForm.append(devider);
      const createdAttrType =document.createAttribute("type");
      createdAttrType.value = "text"
      createdInput.setAttributeNode(createdAttrType)
    }

    if(item[key] === "combo"){
      const createdSelect = document.createElement("select");
      createdSelect.innerHTML = item;
      const getFirstForm = document.querySelector("#first");
      getFirstForm.append(createdSelect)
      const devider = document.createElement("br");
      getFirstForm.append(devider);

      item.variants.forEach(function(variantItems){
        const createdOptions = document.createElement("option");
        createdOptions.setAttribute("value", variantItems.value);
        createdOptions.textContent = variantItems.text;
        createdSelect.appendChild(createdOptions)
      })
    }


    

    if(item[key] === "radio"){
      item.variants.forEach(function(radioElem){
        const createdRadio = document.createElement("input");
        createdRadio.type = "radio";
        createdRadio.name = "payment";
        createdRadio.setAttribute("value", radioElem.value);
        let radioOptions = document.createElement("span");
        radioOptions.textContent = radioElem.text;
        createdRadio.innerHTML = item;
        const getFirstForm = document.querySelector("#first");
        getFirstForm.append(createdRadio);
        getFirstForm.appendChild(radioOptions);
        const devider = document.createElement("br");
        getFirstForm.append(devider);
      })
      
    }

    if(item[key]==="check"){
      const createdCheckBox = document.createElement("input");
      createdCheckBox.type = "checkbox";
      createdCheckBox.name = "votes";
      createdCheckBox.innerHTML = item;
      const getFirstForm = document.querySelector("#first");
      getFirstForm.append(createdCheckBox);
      const devider = document.createElement("br");
      getFirstForm.append(devider);
    }


    if(item[key]==="memo"){
      const createdMemo = document.createElement("textarea");
      createdMemo.name = "description";
      createdMemo.style.width = "300px";
      createdMemo.style.height = "200px";
      createdMemo.html = item;
      const getFirstForm = document.querySelector("#first");
      getFirstForm.append(createdMemo);
      const devider = document.createElement("br");
      getFirstForm.append(devider);
    }


      if(item[key]==="submit"){
        const createdSub = document.createElement("input");
        createdSub.innerHTML = item;
        createdSub.type = "submit"
        const getFirstForm = document.querySelector("#first");
        getFirstForm.append(createdSub);
        const devider = document.createElement("br");
        getFirstForm.append(devider);
        
      }
    }
  });



    formDef2.forEach(function(item2){
      console.log(item2);
      for(key in item2){
        console.log(key+" znacheniye");
        console.log(item2[key] + " key");
        if(key === "label"){
          const createdLabel = document.createElement("label");
          createdLabel.innerHTML = item2[key];
          const getFirstForm = document.querySelector("#first");
          getFirstForm.appendChild(createdLabel);
          
        }
        if(item2[key] === "longtext" || item2[key]==="number"){
          const createdInput = document.createElement("input");
          createdInput.innerHTML = item2;
          const getFirstForm = document.querySelector("#first");
          getFirstForm.append(createdInput)
          const devider = document.createElement("br");
          getFirstForm.append(devider);
          const createdAttrType =document.createAttribute("type");
          createdAttrType.value = "text"
          createdInput.setAttributeNode(createdAttrType)
        }
        if(item2[key]==="submit"){
            const createdSub = document.createElement("input");
            createdSub.innerHTML = item2;
            createdSub.type = "submit"
            const getFirstForm = document.querySelector("#first");
            getFirstForm.append(createdSub);
            const devider = document.createElement("br");
            getFirstForm.append(devider);
            
          }
        }
    
  
});

}
createdDynamicForm(formDef1, formDef2, document.forms.firstForm, document.forms.secondForm);
